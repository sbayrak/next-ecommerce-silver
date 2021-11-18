/* eslint-disable import/no-anonymous-default-export */
import mongoose from 'mongoose';
import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {
  await dbConnect();
  if (req.method === 'GET') {
    const user = await User.findOne({ email: 'suat.bayrak@bilgiedu.net2' });
    res.status(200).json({ success: true, user });
  } else {
    res.status(200).json({ success: false });
  }
};
