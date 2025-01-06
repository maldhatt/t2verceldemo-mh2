const DOMAIN = "t2vercel.mvbuilt.com";
const CLIENT_ID = "yfj0AJFboBcPRCIYwjaOUzIJqwvJV1e0";
const REDIRECT_URI = "http://localhost:3000/api/auth/callback";
const AUDIENCE = "api://t2verceldemo";
const SCOPE = "openid email profile";
const STATE = "randomstateval";
// const NONCE = "randomnonceval";

export interface Options {
  link?: string;
  screen: string;
  extFrom?: string;
  screenHint?: string;
  connection?: string;
  loginHint?: string;
  state?: string;
}
export function redirectTo(options: Options) {
  const { extFrom, screenHint, connection, loginHint, link, state } = options;
  const responseType = "code";
  window.location.href = link
    ? link
    : `https://${DOMAIN}/authorize?response_type=${responseType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&audience=${AUDIENCE}&state=${
        state || STATE
      }&scope=${SCOPE}${extFrom ? `&ext-from=${extFrom}` : ""}${
        screenHint ? `&screen_hint=${screenHint}` : ""
      }${connection ? `&connection=${connection}` : ""}${
        loginHint ? `&login_hint=${loginHint}` : ""
      }`;
}
