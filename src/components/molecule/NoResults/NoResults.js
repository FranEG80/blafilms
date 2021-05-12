import './NoResults.css'
import DivElement from "../../atom/DivElement"
import Text from "../../atom/Text"

const NoResults = ({param}) => (
    <DivElement className='wrapper'>
        <Text type='h2'>
            {
                param
                    ? `No results for '${param}'`
                    : 'What do you want to look for today?'
            }
        </Text>
    </DivElement>
)

export default NoResults