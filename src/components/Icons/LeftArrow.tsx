


export default function LeftArrow(props:{height:string,width:string, onClick:() => void}){
    
    return (
        <svg className=" cursor-pointer " onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
    )
}