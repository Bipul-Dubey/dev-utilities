import { useRef, useState } from "react";
import { Stack, Container, Menu, Grid, Paper, Typography } from "@mui/material";
import NavigationButton from "./NavigationButton";
import { CaretDown } from "phosphor-react";
import { Box } from "@mui/material";
import { TOOL_List } from "../../constant/tools";
import { groupToolsByCategory } from "../../utilities/generals";
import PropTypes from "prop-types";

function ToolNavigationContainer() {
  const tool_list = groupToolsByCategory(TOOL_List);

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {tool_list.map((category, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {category.category}
            </Typography>
            <Grid container spacing={1}>
              {category.tools.map((tool, toolIndex) => (
                <Grid item xs={12} key={toolIndex}>
                  <Paper
                    elevation={1}
                    sx={{
                      padding: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      transition: "0.2s",
                      "&:hover": {
                        boxShadow: 3,
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {}}
                  >
                    <Box
                      component="img"
                      src={tool.image}
                      alt={tool.title}
                      sx={{
                        width: 35,
                        height: 35,
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: 14, lineHeight: 1.2 }}
                      >
                        {tool.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        sx={{ fontSize: 12, lineHeight: 1.1 }}
                      >
                        {tool.subtitle}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const MenuComponent = ({ anchorEl, open }) => {
  return (
    <Menu open={open} anchorEl={anchorEl}>
      <ToolNavigationContainer />
    </Menu>
  );
};

MenuComponent.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

ToolNavigation.propTypes = {
  navigation: PropTypes.object,
};

export default function ToolNavigation({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Stack
      flexDirection="row"
      gap={0.7}
      alignItems="center"
      onClick={handleToggle}
      ref={ref}
      sx={{ position: "relative", color: isOpen ? "#FFD700'" : "" }}
    >
      <NavigationButton navigation={navigation} />
      <CaretDown
        size={24}
        style={{
          rotate: isOpen ? "180deg" : "0deg",
        }}
      />
      <MenuComponent
        open={isOpen}
        anchorEl={ref.current}
        handleClose={handleClose}
      />
    </Stack>
  );
}
