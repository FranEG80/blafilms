import './ActivityIndicator.css'
import DivElement from "../../atom/DivElement"
import Text from "../../atom/Text"

const ActivityIndicator = () => (
    <DivElement className="activity-indicator">
        <Text type='h2'>Loading...</Text>
    </DivElement>
)

export default ActivityIndicator