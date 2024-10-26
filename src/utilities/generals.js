// Function to group tools by category
export function groupToolsByCategory(toolList) {
  const groupedTools = {};

  toolList.forEach((tool) => {
    const category = tool.category;

    // If the category doesn't exist in groupedTools, create it
    if (!groupedTools[category]) {
      groupedTools[category] = {
        category,
        tools: [],
      };
    }

    // Add the tool to the respective category
    groupedTools[category].tools.push({
      title: tool.title,
      subtitle: tool.subtitle,
      image: tool.imageUrl,
      path: tool.path,
    });
  });

  // Return an array of grouped tools
  return Object.values(groupedTools);
}

export function filterDataByKeysAndString(dataList, keys, searchString) {
  const searchPattern = new RegExp(`\\b${searchString}\\b`, "i"); // regex to match whole words, case-insensitive

  return dataList.filter((item) => {
    return keys.some((key) => {
      if (item[key]) {
        return searchPattern.test(item[key]);
      }
      return false;
    });
  });
}

export function openUrl(url, openInNewTab = true) {
  if (!url) return;
  if (openInNewTab) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}
