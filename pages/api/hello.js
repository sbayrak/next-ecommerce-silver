/* eslint-disable import/no-anonymous-default-export */
import mongoose from 'mongoose';
import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {
  await dbConnect();
  if (req.method === 'GET') {
    res.status(200).send({ success: false });
  }
};
