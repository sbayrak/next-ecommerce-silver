/* eslint-disable import/no-anonymous-default-export */
import mongoose from 'mongoose';
import User from '../../models/User';
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {
  await dbConnect();
  if (req.method === 'GET') {
    const headers = req.headers.authorization;

    var auth = new Buffer.from(headers.split(' ')[1], 'base64')
      .toString()
      .split(':');
    var user = auth[0];
    var pass = auth[1];

    console.log(`user: ${user} & pass : ${pass}`);
    res.status(200).json({ success: true });
  }
};
