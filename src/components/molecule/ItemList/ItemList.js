import DivElement from "../../atom/DivElement"
import CardItem from "../CardItem"

const ItemList = ({searchResult}) => (
    <DivElement className="search-results-list">
      {searchResult.Search.map(({Poster, Title, Type, Year, imdbID}, i) => 
      (
        <CardItem {...{Poster, Title, Type, Year, imdbID}} key={imdbID+i} />
      ))}
    </DivElement>
  )

export default ItemList