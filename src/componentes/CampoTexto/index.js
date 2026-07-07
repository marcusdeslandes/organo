import './CampoTexto.css'

const CampoTexto = (props) => { //parametro da label    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto