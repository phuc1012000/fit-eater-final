import React from "react";
import { HorizontalList, ItemCard } from "./Utility/Utility";

const ItemHorizontalList = () => {
    return (
      <div>
        <h2>
          Món Ngon Nổi Bật
        </h2>
        <HorizontalList>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </HorizontalList>
      </div>
    )
  }

export {ItemHorizontalList}