const LOCAL_STORYBOOK_URL = "http://localhost:6006";
// Trailing slash is required: relative asset paths in Storybook index.html
// resolve incorrectly from /storybook (no slash).
const APP_STORYBOOK_PATH = "/storybook/";

export const STORYBOOK_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL ??
  (process.env.NODE_ENV === "production"
    ? APP_STORYBOOK_PATH
    : LOCAL_STORYBOOK_URL);

export function isExternalStorybookUrl(url: string = STORYBOOK_URL) {
  return /^https?:\/\//.test(url);
}
