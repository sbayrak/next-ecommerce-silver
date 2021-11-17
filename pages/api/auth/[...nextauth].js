import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        let user;

        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
          method: 'POST',
          headers: {
            'Content-Type:': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        const arrayToJSON = await res.json();
        user = arrayToJSON[0];

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/giris',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn(user) {
      return user.userId && user.isActive === '1';
    },

    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt(token, user) {
      if (user) token.user = user;
      return token;
    },
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  database: `${process.env.MONGODB_URI}`,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
