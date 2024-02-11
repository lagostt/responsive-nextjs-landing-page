


export default function RightArrow(props:{height:string,width:string, onClick:() => void}){
    
    return (
        <svg className=" cursor-pointer " onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
        </svg>
    )
}