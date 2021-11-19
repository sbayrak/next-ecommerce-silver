/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import VerificationRequest from '../../../../models/VerificationRequest';
import sendMail from '../../../../utils/confirmation-email';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  await dbConnect();

  // METHOD         :       POST
  // DESCRIPTION    :       REGISTER THE CUSTOMER
  // ROUTE          :       /api/profile/signup/
  if (req.method === 'POST') {
    try {
      // @@@@ CHECK IF USER EXITS @@@@
      let isUserExists = await User.findOne({ email: req.body.email });

      if (isUserExists) {
        res.status(200).json({ success: false, msg: 'userexists', user: null });
      } else if (!isUserExists) {
        let mailFields = {};
        mailFields.email = req.body.email;
        mailFields.token = uuidv4();

        // @@@@@ GENERATE SALT AND HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        mailFields.password = await bcrypt.hash(req.body.password, salt);
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        await VerificationRequest.create(mailFields);
        sendMail(mailFields.email, 'EcommerceSilver', mailFields.token);

        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  // METHOD         :       GET
  // DESCRIPTION    :       VERIFY VERIFICATION TOKEN AND SAVE CUSTOMER TO users COLLECTION
  // ROUTE          :       /api/profile/signup?email=EMAIL&verification=VERIFICATION
  else if (req.method === 'GET') {
    try {
      const { email, verification } = req.query;

      const isVerificationExists = await VerificationRequest.findOne({
        email,
        verification,
      });

      if (!isVerificationExists) {
        res.status(401).json({ success: false, msg: 'verificationnotexists' });
      } else if (isVerificationExists) {
        let userFields = {};
        userFields.email = isVerificationExists.email;
        userFields.password = isVerificationExists.password;

        await User.create(userFields);
        await VerificationRequest.deleteOne({ _id: isVerificationExists._id });
        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(500).json({ success: false, msg: 'error, signup GET' });
    }
  }
};
