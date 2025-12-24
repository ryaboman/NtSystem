import classes from './Button.module.css'

export default function Button( {type, background, children} ){
    return (
        <button type={type} className={`${classes.button} ${classes.active}`} style={{background: background}}>
            {children}
        </button>
    )
}