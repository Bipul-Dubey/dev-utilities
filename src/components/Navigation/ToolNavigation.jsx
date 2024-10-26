import { useRef, useState } from "react";
import { Stack, Menu } from "@mui/material";
import NavigationButton from "./NavigationButton";
import { CaretDown } from "phosphor-react";
import { TOOL_List } from "../../constants/tools";
import PropTypes from "prop-types";
import { ToolContainer } from "../tool-component/ToolContainer";

const MenuComponent = ({ anchorEl, open }) => {
  return (
    <Menu open={open} anchorEl={anchorEl}>
      <ToolContainer tools={TOOL_List} />
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
