
import { ReactComponent as ChevronLeft } from '../../../assets/img/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../../assets/img/chevron-right.svg'
import DivElement from '../../atom/DivElement';
import ItemList from '../ItemList';

const ResultsSearch = ({searchResult}) => (
    <DivElement className="search-results">
        <DivElement className="chevron">
            <ChevronLeft />
        </DivElement>
        <ItemList searchResult={searchResult} />
        <DivElement className="chevron">
            <ChevronRight />
        </DivElement>
    </DivElement>
)

export default ResultsSearch