import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { Flex } from "antd";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function ToolContainer({ tools, isLarge }) {
  const navigation = useNavigate();
  return (
    <Container
      maxWidth={isLarge ? "lg" : "md"}
      sx={{
        margin: 2,
      }}
    >
      <Flex wrap gap="small">
        {tools?.map((tool, index) => (
          <Paper
            elevation={2}
            key={tool.title + index}
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "48%",
                md: isLarge ? "30%" : "32.7%",
                lg: isLarge ? "25%" : "32.7%",
              },
              padding: 1,
              transition: "0.2s",
              "&:hover": {
                boxShadow: 5,
              },
              cursor: "pointer",
            }}
            onClick={() => {
              navigation(tool.path);
            }}
          >
            <Stack flexDirection={"row"} gap={1.5}>
              <Box
                sx={{
                  height: isLarge ? 65 : 40,
                  width: isLarge ? 65 : 40,
                  borderRadius: 1.5,
                }}
                component={"img"}
                src={tool.imageUrl}
              />
              <Stack gap={0.5}>
                <Typography variant="subtitle2" fontWeight={600}>
                  {tool.title}
                </Typography>
                <Typography
                  sx={{
                    maxWidth: "250px",
                  }}
                  variant="subtitle2"
                >
                  {tool.subtitle}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Flex>
    </Container>
  );
}

ToolContainer.propTypes = {
  tools: PropTypes.array.isRequired,
  isLarge: PropTypes.bool,
};
