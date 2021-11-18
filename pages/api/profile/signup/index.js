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
    // const token = uuidv4();
    // const callbackUrl = `${process.env.NEXTAUTH_URL}/auth/verification-message`;
    // const isUserExists = await db.collection('users').findOne({ email });

    // if (isUserExists) {
    //   const callbackUrl = `${process.env.NEXTAUTH_URL}/auth/verification-message`;

    //   res
    //     .status(201)
    //     .json({ msg: 'exists', callbackUrl, email: '', token: '' });
    // } else if (!isUserExists) {
    //   const newVerificationRequest = await db
    //     .collection('verificationRequests')
    //     .insertOne({
    //       firstname: firstname,
    //       lastname: lastname,
    //       email: email,
    //       password: password,
    //       token,
    //       callbackUrl,
    //       madeAt: date.toString(),
    //     });

    //   res.status(201).json(newVerificationRequest.ops);
    // }
  } else if (req.method === 'GET') {
    res.status(200).json({ msg: '/signup/get method' });
  }
};
