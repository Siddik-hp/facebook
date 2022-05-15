import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SIGNING_PRIVET_KEY,
});
