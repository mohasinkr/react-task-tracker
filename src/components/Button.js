import PropTypes from 'prop-types'


const Button = ({color,text,btnClick})=>{
    return (
        <button 
        style={{backgroundColor:color}} 
        className="btn"
        onClick={btnClick}
        >
            {text}
        </button>
    );
}

Button.defaultProps = {
    color:'yellow',
    text: 'this is awesome',
};

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    btnClick:PropTypes.func,
};

export default Button;