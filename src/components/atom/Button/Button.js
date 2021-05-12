
const Button = ({children,  className, onPress, disabled} = {}) => (
    <button
        className={className}
        style={disabled ? {opacity: 0.7} : {}}
        onClick={onPress}
        disabled={disabled}
    >
        {children}
    </button>
)

export default Button