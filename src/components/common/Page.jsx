import { Box, Stack } from "@mui/material";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import PropTypes from "prop-types";

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Page({ children }) {
  return (
    <Stack minHeight="100vh">
      <Navbar />
      <Box flexGrow={1} paddingTop="64px" bgcolor={"#FAFAFA"}>
        {children}
      </Box>{" "}
      <Footer />
    </Stack>
  );
}
