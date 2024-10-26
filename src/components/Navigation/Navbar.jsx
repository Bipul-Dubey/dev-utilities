import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

import { NAVIGATIONS } from "../../constants/navigations";
import ToolNavigation from "./ToolNavigation";
import NavigationButton from "./NavigationButton";
import { SITE_NAME } from "../../constants/siteConstant";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#333333",
      }}
    >
      <Toolbar
        sx={{
          gap: 5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#eaecee",
            },
          }}
          onClick={() => navigate("/")}
        >
          {SITE_NAME}
        </Typography>

        <Stack
          sx={{
            "&:hover": {
              color: "#FFD700",
            },
          }}
        >
          {NAVIGATIONS?.map((navigation, index) =>
            navigation.is_dropdown ? (
              <ToolNavigation
                key={"ToolNavigation" + index}
                navigation={navigation}
              />
            ) : (
              <NavigationButton
                key={"NavigationButton" + index}
                navigation={navigation}
              />
            )
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
