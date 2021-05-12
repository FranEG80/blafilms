import './Modal.css'
import DivElement from "../../atom/DivElement";
import Text from "../../atom/Text";

const Modal = ({error, success, warn, message}) => {
    const type = error
        ? 'error'
        : warn 
            ? 'warn' 
            : 'success'
            
    return (
        <DivElement className='modal-container' >
            <Text type='h3' className={`modal ${type}`}>
                {error && '🚨'}
                {warn && '🔽'}
                {(success || (!success && !warn && !error)) && '🆗'}
                <Text 
                    type='span' 
                    style={{
                        marginLeft: 20,
                        color: '#555'
                    }}>{message}</Text>
            </Text>
        </DivElement>
    )
}

export default Modal