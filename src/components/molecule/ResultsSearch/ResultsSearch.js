
import { ReactComponent as ChevronLeft } from '../../../assets/img/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../../assets/img/chevron-right.svg'
import DivElement from "../../atom/DivElement";
import ItemList from '../ItemList';

const ResultsSearch = ({searchResult, hasLess, hasMore, onChangePage}) => {
    const handleChangePage = onChangePage
    
    return (
        <DivElement className="search-results">
            <DivElement className="chevron" >
                { hasLess && (<ChevronLeft onClick={()=> handleChangePage(false)}/>)}
            </DivElement>
            <ItemList searchResult={searchResult} />
            <DivElement className="chevron">
                { hasMore && (<ChevronRight onClick={()=> handleChangePage(true)}/>)}
            </DivElement>
        </DivElement>
    )
}

export default ResultsSearch