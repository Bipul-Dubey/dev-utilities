import { Container, Grid2, Stack } from "@mui/material";
import HeadingSubheading from "../components/common/HeadingSubheading";
import Page from "../components/common/Page";
import { TOOL_List } from "../constant/tools";
import ToolCard from "../components/Tools/ToolCard";

export default function Home() {
  return (
    <Page>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingSubheading
          title="All the tools you need in one place"
          subtitle={`Simplify your tasks with ease! Whether it's converting, organizing, or
        managing, we've got you covered with fast and free solutions.`}
        />

        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            {TOOL_List.map((tool, index) => (
              <ToolCard tool={tool} key={"tool" + index} />
            ))}
          </Grid2>
        </Container>
      </Stack>
    </Page>
  );
}
