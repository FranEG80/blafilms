
const Input = ({id, className, type, placeholder, style} = {}) =>  (
    <input
        id={id}
        type={type ? type : 'text'} 
        placeholder={placeholder}
        className={className}
        style={style}
        onChange={(nativeEvent)=> console.log(nativeEvent.currentTarget.value)}
    />
)

export default Input