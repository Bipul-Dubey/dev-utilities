import { Stack, TextField } from "@mui/material";
import HeadingSubheading from "../components/common/HeadingSubheading";
import Page from "../components/common/Page";
import { TOOL_List } from "../constants/tools";
import { useState } from "react";
import { filterDataByKeysAndString } from "../utilities/generals";
import { ToolContainer } from "../components/tool-component/ToolContainer";

export default function Home() {
  const [search, setSearch] = useState("");
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
        <Stack
          sx={{
            width: {
              lg: "75%",
              md: "80%",
            },
            px: 2,
          }}
        >
          <Stack
            sx={{
              alignSelf: {
                lg: "flex-end",
                md: "flex-end",
              },
              minWidth: {
                lg: "400px",
                md: "400px",
                sm: "100%",
              },
            }}
          >
            <TextField
              label="Search for tools..."
              size="small"
              fullWidth
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Stack>
        </Stack>

        <ToolContainer
          isLarge
          tools={filterDataByKeysAndString(
            TOOL_List,
            ["title", "subtitle"],
            search
          )}
        />
      </Stack>
    </Page>
  );
}
