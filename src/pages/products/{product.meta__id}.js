import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as ProductStyle from '../../styles/pages/product.module.css'

function Product({data}) {
    const { product } = data
    const image = getImage(product.img)
    const description = product.description.slice(0, 50)
    const {price, kcal, rating} = product
    return (
        <div id={ProductStyle.product_page}>
            <GatsbyImage image={image} alt={product.name} className={ProductStyle.image}/>
            {product.name}
        </div>
    )
}

export default Product;

export const query = graphql`
    query($id: String!) {
        product(id :{ eq: $id}) {
        name
        description
        kcal
        img {
          childImageSharp {
          gatsbyImageData(
            width: 300
            height: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )} 
        }
        price
        rating
        }
    }
`