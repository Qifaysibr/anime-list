// in auth.ts
import { AuthOptions, getServerSession } from "next-auth"
import Google from 'next-auth/providers/google';


const authOptions = {
    // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }