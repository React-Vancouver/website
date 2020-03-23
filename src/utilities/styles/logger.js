// export { logger } from '@storybook/client-logger'

export const logger = {
  warn: (string) => console.warn(string),
  info: (string) => console.info(string),
  error: (string) => console.error(string),
};
