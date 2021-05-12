import React from 'react'
import DivElement from "../../atom/DivElement"
import Image from "../../atom/Image"

const CardItem = ({Poster, Title, Type, Year}) => (
    <DivElement className="search-item">
      <Image src={Poster !== 'N/A' && Poster} alt='poster' />
      <DivElement className="search-item-data">
        <DivElement className="title">{Title}</DivElement>
        <DivElement className="meta">{`${Type} | ${Year}`}</DivElement>
      </DivElement>
    </DivElement>
)

export default React.memo(CardItem, (prev, next) => prev.Title === next.Title && prev.Year === next.Year && prev.Poster === next.Poster )