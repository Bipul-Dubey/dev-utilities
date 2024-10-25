import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

import { NAVIGATIONS } from "../../constant/navigations";
import ToolNavigation from "./ToolNavigation";
import NavigationButton from "./NavigationButton";

export default function Navbar() {
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
              color: "#f65858",
            },
          }}
        >
          Easy Find
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
