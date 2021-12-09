import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import * as IndexStyle from '../components/pages/index.module.css'
import Header from '../components/Header/Header'
import { HorizontalList, ItemCard, DemoItem, VerticalList } from "../components/Utility/Utility"
import { ItemHorizontalList } from "../components/ItemList"
import Footer from "../components/Footer/Footer"
// import { AmplifyProvider } from '@aws-amplify/ui-react';
// const IndexPage = () => {
//   const [is_phone, set_phone] = useState(false)
//   const [promo, set_promo] = useState(false)

//   useEffect(() => {
//     set_phone(window.screen.width < 480)
//   }, [])

//   return (
//     <>
//       {
//         (is_phone | promo) ?
//           <div>
//             <Header />

//           </div> : null
//       }
//     </>
//   )
// }

const Intro = () => {
  const user = { name: 'Phúc', score: 80, voucher: 1 }

  return (
    <div>
      <h3>Hi, {user.name}</h3>
      <p>Bạn đã có được: {user.score} điểm và {user.voucher} voucher</p>
      <p>Bạn đang tìm kiếm món ăn nào?? </p>
    </div>
  )
}



const FoodCategory = () => {
  const [CategoryList, update] = useState([
    { 'content': 'Ăn Vặt' },
    { 'content': 'Ăn Sáng', active: true },
    { 'content': 'Ăn Trưa' },
    { 'content': 'Ăn Tối' }
  ])

  const action = (key) => {
    let list = CategoryList.map(e => e.content)
    list = list.filter(e => e !== key.content)
    list.unshift(key.content)
    list = list.map(e => {
      return { 'content': e }
    })
    list[0]['active'] = true

    update(list)
  }

  return (
    <div>
      <HorizontalList>
        {CategoryList.map(e => <DemoItem {...e} action={action} />)}
      </HorizontalList>
    </div>
  )
}

const BranchLogo = () => {
  return (
    <StaticImage src='../images/circleK.png' className='logo' objectFit='contain'/>
  )
}

const BrandHorizontalList = () => {
  return (
    <div>
      <h2>
        Thương Hiệu Thân Quen
      </h2>
      <HorizontalList>
        <BranchLogo />
        <BranchLogo />
        <BranchLogo />
        <BranchLogo />
        <BranchLogo />
        <BranchLogo />
      </HorizontalList>
    </div>
  )
}

const ItemList = () => {
  return (
    <VerticalList>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </VerticalList>
  )
}


const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <FoodCategory />
        <ItemHorizontalList />
        <BrandHorizontalList />
        <ItemList />
      </main>
      <Footer />
    </>
  )
}

const Authenticated = () => {

}

export default IndexPage
