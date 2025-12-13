import './Button.css'

export default function Button( {type, background, children} ){
    return (
        <button type={type} className="button active" style={{background: background}}>
            {children}
        </button>
    )
}