
import"./Button.css";
interface ButtonProp{
    texto:string;
}
function alerta(){
    alert("reservation maked")
}


const Button:React.FC<ButtonProp>=({texto})=>{
    return(
        <div>
            <button onClick={alerta}>{texto}</button>
        </div>
    );


}
export default Button;