export const urlParser = (url) => {
  let parsed = {
    url,
    isExternal: false,
    isInternal: false,
  };

  if (url.startsWith('http')) {
    parsed.isExternal = true;
    parsed.out = url;
  }

  if (url.startsWith('/')) {
    parsed.isInternal = true;
    parsed.to = url;
  }

  return parsed;
};
