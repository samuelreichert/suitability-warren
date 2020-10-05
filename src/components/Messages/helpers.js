export const formatSingleMessage = (message) => {
  return message
    .split(/\^\d+/)
    .join('')
    .replace(/<\w+>/, '');
};
