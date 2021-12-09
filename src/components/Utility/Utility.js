import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import * as UtilityStyle from './Utility.module.css'
const HorizontalList = ({children}) => {
    return (
      <div className={UtilityStyle.horizontal_list}>
        {children}
      </div>
    )
  }

export {HorizontalList};

const DemoItem = ({active, content, action}) => {
  return (
    <button className={`pill ${active?'active':''}`} onClick={() => action({content})}>
      <StaticImage src='../../images/Sushi.svg'/>
      {content} 
    </button>
  )
}

export {DemoItem}


const ItemCard = () => {
  return (
    <div className={UtilityStyle.short_card}>
      <StaticImage src='../../images/xoi.jpg' className={UtilityStyle.card__img}/>
      <div>
        <h4>Xôi Ngon</h4>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, et?</span>
      </div>

    </div>
  )
}

export {ItemCard}

const VerticalList = ({children}) => {
  return (
    <div className={UtilityStyle.list}>
      {children}
    </div>
  )
}

export {VerticalList}