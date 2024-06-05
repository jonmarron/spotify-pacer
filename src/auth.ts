import NextAuth, {type DefaultSession} from "next-auth"
import Spotify from "@auth/core/providers/spotify";
import '@/models/types'

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?:any;
    scope?:any;
    user: {
      /** The user's postal address. */
      address?: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
  }
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Spotify({
    clientId:process.env.AUTH_SPOTIFY_ID,
    clientSecret:process.env.AUTH_SPOTIFY_SECRET,
    authorization: 'https://accounts.spotify.com/authorize?scope=playlist-modify-private+user-read-email+user-read-private+user-library-read+playlist-read-private+playlist-read-collaborative',
    token: 'https://accounts.spotify.com/api/token'
  })],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.scope = account.scope;  // Log scope to verify
        console.log("JWT Callback - Access Token:", token.accessToken);
        console.log("JWT Callback - Scope:", token.scope);
        console.log("JWT Callback - Account:", account);
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.scope = token.scope;  // Log scope to verify
      console.log("Session Callback - Access Token:", session.accessToken);
      console.log("Session Callback - Scope:", session.scope);
      console.log("Session Callback - Token:", token);
      return session;
    },
  },
})