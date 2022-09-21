/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */

import { envsafe, str, url } from "envsafe";
import { clientEnv } from "./clientEnv.mjs";

if (typeof window !== "undefined") {
  throw new Error("This should only be included on the client");
}

export const serverEnv = {
  ...clientEnv,
  ...envsafe({
    DATABASE_URL: url(),
    NODE_ENV: str({
      devDefault: "development",
      choices: ["development", "test", "production"],
    }),
    NEXTAUTH_SECRET: str(),
    NEXTAUTH_URL: url(),
    DISCORD_CLIENT_ID: str(),
    DISCORD_CLIENT_SECRET: str(),
  }),
};
