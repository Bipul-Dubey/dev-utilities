import { PATHS } from "./paths";

const CATEGORY = {
  Base64: "Base64 en/de-coding",
  Other: "Other",
};

export const TOOL_List = [
  {
    category: CATEGORY.Base64,
    title: "To Base64 encoded",
    subtitle: "Convert files to base64 encoding",
    path: PATHS.TOOLS.FilesToBase64,
    imageUrl: "/tool-images/to_base64.webp",
  },
  {
    category: CATEGORY.Base64,
    title: "From Base64 decode",
    subtitle: "Convert base64 encoding to files",
    path: PATHS.TOOLS.Base64ToFiles,
    imageUrl: "/tool-images/from_base64.webp",
  },
];
