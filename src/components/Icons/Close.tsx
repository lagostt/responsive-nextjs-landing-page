
export default function Close(props:{height:string, width:string, onClick:() => void}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
    )
}