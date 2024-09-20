import './button.css'


function Button(props) {

    return(
        <button onClick={ props.clickFunction } className='standard-button'>{ props.btnText }</button>
    )
    
}

export default Button