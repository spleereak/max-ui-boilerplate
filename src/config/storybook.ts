const LOCAL_STORYBOOK_URL = "http://localhost:6006";
const APP_STORYBOOK_PATH = "/storybook";

export const STORYBOOK_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL ??
  (process.env.NODE_ENV === "production"
    ? APP_STORYBOOK_PATH
    : LOCAL_STORYBOOK_URL);

export function isExternalStorybookUrl(url: string = STORYBOOK_URL) {
  return /^https?:\/\//.test(url);
}
