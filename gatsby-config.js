/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'tutorial',
    description: 'description about site',
    author:'@johndoe',
    data:{name:'john', age: 14},
  },
  plugins:[`gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`],
}
