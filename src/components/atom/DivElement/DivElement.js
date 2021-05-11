
const DivElement = ({children, style, className} = {}) => (
    <div
        className={className}
        style={style}
    >
        {children}
    </div>
)

export default DivElement