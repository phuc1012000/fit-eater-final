import React from "react";
import { HorizontalList, ItemCard } from "./Utility/Utility";

const ItemHorizontalList = ({data}) => {
    return (
      <div>
        <h2>
          Món Ngon Nổi Bật
        </h2>
        <HorizontalList>
          {data.map(e => <ItemCard item={e} />)}
        </HorizontalList>
      </div>
    )
  }

export {ItemHorizontalList}