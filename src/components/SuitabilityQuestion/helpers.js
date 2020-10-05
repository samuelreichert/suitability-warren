export const formatSingleResponse = (text) => {
  return text.replace(/{{\w+.\w+}}/, '').trim();
};
