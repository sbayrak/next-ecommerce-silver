/* eslint-disable import/no-anonymous-default-export */
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../../utils/dbConnect';

export default async (req, res) => {
  await dbConnect();

  if (req.method !== 'POST') {
    res.status(500).json({ success: false, msg: 'server error' });
  } else if (req.method === 'POST') {
    try {
      if (!req.body.email || !req.body.password) {
        res.status(401).json({ success: false, msg: 'not authorized' });
      } else if (req.body.email && req.body.password) {
        const user = await User.findOne({ email: req.body.email });

        if (!user)
          res.status(401).json({ success: false, msg: 'user not found' });
        else if (user) {
          const hashedPassword = await bcrypt.compare(
            req.body.password,
            user.password
          );

          if (!hashedPassword)
            res.status(401).json({ success: false, msg: 'user not found' });
          else if (hashedPassword) res.status(200).json(user);
        }
      }
    } catch (error) {
      res.status(500).json({ success: false, msg: 'server error' });
    }
  }
};

// @@@@@@@@@@@@@@@@@@@@@@@@ FUNCTION EXPORTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const signIn = async (email, password) => {
  await dbConnect();

  try {
    const user = await User.findOne({ email: email });

    if (!user) return { success: false, msg: 'user not found' };
    else if (user) {
      const hashedPassword = await bcrypt.compare(password, user.password);

      if (!hashedPassword) return { success: false, msg: 'user not found' };
      else if (hashedPassword) return user;
    }
  } catch (error) {
    return { success: false, msg: 'server error' };
  }
};
// @@@@@@@@@@@@@@@@@@@@@@@@ FUNCTION EXPORTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
