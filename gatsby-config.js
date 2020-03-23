const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'ReactVancouver',
    description:
      'Join one of the biggest tech communities in Vancouver. Do you want to learn more about React? Or are you looking for job opportunities? A recruiter who wants to find talent, or an entrepreneur who wishes to connect with new people? React Vancouver is the place.',
    author: '@ReactVan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Space Mono',
            variants: ['700'],
            subsets: ['latin'],
          },
          {
            family: 'Open Sans',
            variants: ['600', '700'],
            subsets: ['latin'],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
