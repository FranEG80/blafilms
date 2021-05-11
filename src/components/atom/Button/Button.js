
const Button = ({children, style, className, onPress} = {}) => (
    <button
        className={className}
        style={style}
        onPress
    >
        {children}
    </button>
)

export default Button