import { ReactElement } from "react"
import Clock from "../Icons/Clock"
import Euro from "../Icons/Euro"
import Flexible from "../Icons/Flexible"
import Done from "../Icons/Done"


type CardProps = {
    Icon:ReactElement,
    title:string,
    body:string
}

export default function Benifits(){

    const iconSize = "48"
    const cardItems = [
        {
            title:"Rapide",
            body:"Notre approche permet de réduire le nombre d'itérations et de générer un gain de temps et d'argent.",
            icon:<Clock height={iconSize} width={iconSize}/>
        },
        {
            title:"Économique",
            body:"Nous facturons au succès et à la réussite afin que notre partenariat soit gagnant-gagnant.",
            icon:<Euro height={iconSize} width={iconSize} />
        },
        {
            title:"Flexible",
            body:"A9 Conseils a été conçu pour vous apporter des solutions rapides, fiables et innovantes à vos problématiques RH.",
            icon:<Flexible height={iconSize} width={iconSize} />
        },
        {
            title:"Efficace",
            body:"En un mot, notre objectif est de vous donner satisfaction et de répondre au mieux à vos besoins.",
            icon:<Done height={iconSize} width={iconSize}/>
        }
    ]

    const CardItem = (props:CardProps) => {
        return (
            <div className=" flex flex-col basis-1/4 px-8 h-58 ">
                <div className="flex flex-row justify-cener items-center h-[30%] pb-5">
                <div className=" pr-4">
                    {props.Icon}
                </div>
                <div className=" text-start text-xl font-bold text-neutral-800 ">
                    {props.title}
                </div>
                </div>
                <div className=" text-start text-lg font-normal text-neutral-600 h-[70%] ">
                    {props.body}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full pt-28 "  >
            <div className=" text-center text-neutral-800 ">
           <span className="text-4xl font-bold"> Bienvenue chez </span> 
           <span className=" font-normal text-4xl " >A9 Conseils</span>
            </div>
            <div className=" text-xl text-neutral-600 text-center pt-6 ">
            Parce que vos meilleurs leviers business sont vos ressources humaines, notre ambition est de vous <br></br> conseiller dans toutes vos missions RH.
            </div>
            <div className="flex lg:flex-row sm:flex-col w-full py-10 pt-36 pb-20 ">
               {
                cardItems.map((item, index)=>{
                    return <CardItem key={index} Icon={item.icon} title={item.title} body={item.body} />
                })
               } 
            </div>
        </div>
    )
}