module.exports = {
  siteMetadata: {
    siteUrl: "https://www.fiteater.life",
    title: "FitEater",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve : `gatsby-transformer-yaml`,
      options : {
        typeName : ({node}) => {
          const name = node.sourceInstanceName
          if (name === `products`) {
            return `Product`
          } 
          if (name === `brands`) {
            return `Brand`
          } 
          if (name === `food_category`) {
            return `food`
          }           
          return name
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        path : `${__dirname}/data/products`,
        name : 'product',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        path : `${__dirname}/data/brands`,
        name : 'brand',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        path : `${__dirname}/data/food_category`,
        name : 'food',
      }
    },
  ],
};
