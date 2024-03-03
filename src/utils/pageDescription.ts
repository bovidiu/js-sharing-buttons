/**
 * Get current href page URL from window location.
 */
const getPageDescription = function () {
  const meta = Object.values(document.getElementsByTagName("meta")).find(({ name }) => name === "description")
  return meta?.content;
};

export default getPageDescription;