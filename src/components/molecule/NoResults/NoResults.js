import Text from "../../atom/Text"

const NoResults = ({param}) => (
    <Text type='p'>
        {
            param
                ? `No results for '${param}'`
                : 'What do you want to look for?'
        }
    </Text>
)

export default NoResults