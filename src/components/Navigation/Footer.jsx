import { Stack, Tooltip, Typography } from "@mui/material";
import {
  GITHUB_URL,
  PRODUCT_BY,
  SITE_NAME,
} from "../../constants/siteConstant";
import { GithubLogo } from "phosphor-react";
import { openUrl } from "../../utilities/generals";

export default function Footer() {
  return (
    <Stack
      height={"40px"}
      bgcolor={"#fded91"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
      gap={2}
    >
      <Typography variant="subtitle1">
        {SITE_NAME} by {PRODUCT_BY}
      </Typography>
      <Tooltip title="GitHub">
        <div>
          <Stack
            sx={{
              borderRadius: "50%",
              border: "1px solid #000",
              padding: 0.3,
              cursor: "pointer",
            }}
            onClick={() => openUrl(GITHUB_URL)}
          >
            <GithubLogo size={24} />
          </Stack>
        </div>
      </Tooltip>
    </Stack>
  );
}
