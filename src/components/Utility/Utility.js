import React from "react"
import * as UtilityStyle from './Utility.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import {AiFillStar, AiFillFire} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'


const HorizontalList = ({children}) => {
    return (
      <div className={UtilityStyle.horizontal_list}>
        {children}
      </div>
    )
  }

export {HorizontalList};

const FoodType = ({item}) => {
  const image = getImage(item.img)
  return (
      // <GatsbyImage image={image} alt={item.name} />
    <Link to='/' className='pill'>
      <GatsbyImage image={image} alt={item.name} />
      {item.title}

    </Link>
  )
}

export {FoodType as DemoItem}


const ItemCard = ({item}) => {
  const image = getImage(item.img)
  const description = item.description.slice(0, 50)
  const {price, kcal, rating} = item

  return (
    <div className={UtilityStyle.short_card}>
      <GatsbyImage image={image} alt={item.name} className={UtilityStyle.card__img} />
      <div className={UtilityStyle.description}>
        <h4>{item.name}</h4>
        <span>{description}</span>
        <div className={UtilityStyle.price}>{price} <RiMoneyDollarCircleFill/></div>
        <div className={UtilityStyle.kcal}>{kcal} kcal<AiFillFire/></div>
        <div className={UtilityStyle.rating}>{rating} <AiFillStar /></div>
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