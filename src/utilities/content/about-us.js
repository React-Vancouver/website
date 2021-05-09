export default function(data) {
  const { title, _rawText } = data?.allSanityAboutUs?.nodes?.[0];
  return {
    title,
    blocks: _rawText,
    description: '',
  };
}
