import { fromBase64, qrCodeGenerator, toBase64 } from "../assets";
import { PATHS } from "./paths";

export const TOOL_List = [
  {
    title: "To Base64 encoded",
    subtitle: "Convert files to base64 encoding",
    path: PATHS.TOOLS.FilesToBase64,
    imageUrl: toBase64,
  },
  {
    title: "From Base64 decode",
    subtitle: "Convert base64 encoding to files",
    path: PATHS.TOOLS.Base64ToFiles,
    imageUrl: fromBase64,
  },
  {
    title: "QRCode generator",
    subtitle: "Generate qr code from text, embed image into it",
    path: PATHS.TOOLS.QRCode_GENERATOR,
    imageUrl: qrCodeGenerator,
  },
];
