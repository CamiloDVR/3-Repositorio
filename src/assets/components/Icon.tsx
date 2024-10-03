import "./Icon.css"
interface IconProp{
    imageUrl:string;
    className?:string;
}
const Icon:React.FC<IconProp>=({imageUrl,className})=>{
    return(
        <div>
            <img alt="icons"src={imageUrl} className={`${className}`}/>
        </div>



    );

}

export default Icon