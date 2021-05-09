const path = require('path');

module.exports = {
  '@blocks': path.resolve(__dirname, '../src/styles/blocks'),
  '@constants': path.resolve(__dirname, '../src/constants/'),
  '@constructs': path.resolve(__dirname, '../src/components/constructs/'),
  '@data': path.resolve(__dirname, '../src/data/'),
  '@elements': path.resolve(__dirname, '../src/components/elements/'),
  '@global': path.resolve(__dirname, '../src/styles/global/'),
  '@sections': path.resolve(__dirname, '../src/components/sections'),
  '@symbols': path.resolve(__dirname, '../src/styles/symbols/'),
  '@utilities': path.resolve(__dirname, '../src/utilities/'),
  '@views': path.resolve(__dirname, '../src/components/views/'),
};
