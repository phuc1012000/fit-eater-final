import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useState } from "react"
import { HorizontalList, ItemCard, DemoItem, VerticalList } from "../components/Utility/Utility"
import { ItemHorizontalList } from "../components/ItemList"
import { graphql } from "gatsby"
import { useEffect } from "react"
import { Auth } from "aws-amplify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Intro = () => {
  const [user, set] = useState({ name: '', score: 0, voucher: 0 })

  useEffect(async () => {
    Auth.currentAuthenticatedUser().then(({ username }) => {
      set({ name: username, score: 50, voucher: 1 })

    })
  }, [])

  return (
    <div>
      <h3>Hi, {user.name}</h3>
      <p>Bạn đã có được: <em>{user.score} điểm</em>  và {user.voucher} voucher</p>
      <p>Bạn đang tìm kiếm món ăn nào?? </p>
    </div>
  )
}



const FoodCategory = ({data}) => {
  return (
      <HorizontalList>
        {data.map(e => <DemoItem item={e} />)}
      </HorizontalList>
  )
}

const BranchLogo = ({ item }) => {
  const image = getImage(item.img)
  return (
      <GatsbyImage image={image} alt={item.name} className='logo' objectFit='contain'  />
  )
}

const BrandHorizontalList = ({ data }) => {
  return (
    <div>
      <h2>
        Thương Hiệu Thân Quen
      </h2>
      <HorizontalList>
        {data.map(e => <BranchLogo item={e} />)}
      </HorizontalList>
    </div>
  )
}

const ItemList = ({ data }) => {
  return (
    <VerticalList>
      {data.map(e => <ItemCard item={e} />)}
    </VerticalList>
  )
}



const IndexPage = ({ data }) => {
  const products = data.allProduct.edges.map(e => e['node'])
  const recommended_products = products.filter(e => e.rating > 4.2)
  const category = data.allFood.edges.map(e => e['node'])
  const brands = data.allBrand.edges.map(e => e['node'])

  return (
    <>
      <Intro />
      <FoodCategory data={category} />
      <ItemHorizontalList data={recommended_products} />
      <BrandHorizontalList data={brands} />
      <ItemList data={products} />
    </>
  )
}

export default IndexPage

export const query = graphql`
    {
    allProduct {
      edges {
        node {
          name
          description
          kcal
          img {
            childImageSharp {
            gatsbyImageData(
              width: 500
              height: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )} 
          }
          price
          rating
        }
      }
    }
    allBrand {
    edges {
      node {
        name
        title
        img {
            childImageSharp {
            gatsbyImageData(
              width: 60
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )} 
          }
      }
    }
  }
  allFood {
    edges {
      node {
        name
        title
        img {
            childImageSharp {
            gatsbyImageData(
              width: 30
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )} 
          }
      }
    }
  }
    }
`