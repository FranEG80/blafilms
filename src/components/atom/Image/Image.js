import placeholderImg from '../../../assets/img/placeholder.png'

const Image = ({src, alt}) => (
    <img
        src={src ? src : placeholderImg}
        alt={alt}
    />
)

export default Image