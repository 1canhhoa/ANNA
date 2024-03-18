import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';


export const NEXT_AUTH_OPTIONS: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: 'username',
        },
        password: { 
          label: 'password', 
        type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_V2_API}/jwt-auth/v1/token`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data  = await res.json();

        if (res.ok && data) {
          return data;
        }
        return null;
      },
    }),
    FacebookProvider({
      clientId: '7838673589552016',
      clientSecret: '7dac65851961ce836601e73a1a7cc5a9',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  // pages: {
  //   signIn: "/"
  // },
  callbacks: {
    async signIn({ account, profile  }) {
      // console.log("account", account)
      // console.log("profile", profile)
      return true
    },
    async jwt({ token, user }) {
      console.log("token", token)
      console.log("user", user)

      // Persist the OAuth access_token and or the user id to the token right after signin
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // console.log({ token });
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
