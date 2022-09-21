import { envsafe, str } from "envsafe";

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */

export const clientEnv = envsafe({
  NEXT_PUBLIC_NO_DEFAULT: str({
    // because of how nextjs deals with transpiling public env vars
    // we have to put it in as `input`
    input: process.env.NEXT_PUBLIC_NO_DEFAULT,
  }),
  // NEXT_PUBLIC_WITH_DEFAULT: str({
  //   default: "with default",
  //   input: process.env.NEXT_PUBLIC_WITH_DEFAULT,
  // }),
});
