/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../../utils/dbConnect';
import resetEmail from '../../../../utils/reset-email';
import VerificationRequest from '../../../../models/VerificationRequest';
import User from '../../../../models/User';
import { v4 as uuidv4 } from 'uuid';
import bcrpyt from 'bcryptjs';

export default async (req, res) => {
  await dbConnect();

  if (req.method !== 'POST' && req.method !== 'PUT') {
    res.status(500).json({ success: false, msg: 'Server Error1' });
  } else if (req.method === 'POST') {
    try {
      if (!req.body.email) {
        res.status(404).json({ success: false, msg: 'not authorized' });
      } else if (req.body.email) {
        let verification = uuidv4();
        const resetPassword = await VerificationRequest.create({
          email: req.body.email,
          verification: verification,
        });
        resetEmail(
          resetPassword.email,
          'MarkaIsmi',
          resetPassword.verification
        );

        res.status(200).json({ success: true, msg: 'ok' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, msg: 'Server Error', error: error });
    }
  } else if (req.method === 'PUT') {
    try {
      const isVerificationRequestExists = await VerificationRequest.findOne({
        email: req.query.email,
        verification: req.query.verification,
      });
      const isUserExists = await User.findOne({ email: req.query.email });
      if (!isVerificationRequestExists || !isUserExists) {
        res.status(404).json({ success: false, msg: 'not authorized1' });
      } else if (isVerificationRequestExists && isUserExists) {
        const salt = await bcrpyt.genSalt();
        const hashedPassword = await bcrpyt.hash(req.body.password, salt);
        await VerificationRequest.deleteOne({
          email: req.query.email,
          verification: req.query.verification,
        });
        await User.updateOne(
          { email: req.query.email },
          {
            $set: {
              password: hashedPassword,
            },
          }
        );
        res.status(200).json({ success: true, msg: 'ok' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, msg: 'Server Error', error: error });
    }
  }
};
