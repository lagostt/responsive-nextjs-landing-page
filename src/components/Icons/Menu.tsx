
export default function Menu(props:{height:string, width:string, onClick:() => void}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} height={props.height} viewBox="0 -960 960 960" width={props.width}>
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
    )
}