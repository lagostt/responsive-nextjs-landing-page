
import { ReactElement } from "react"
import AddPerson from "../Icons/AddPerson"
import Bank from "../Icons/Bank"
import Book from "../Icons/Book"
import Groups from "../Icons/Groups"



type CardProps = {
    Icon:ReactElement,
    title:string,
    body:string
}

export default function Experties() {

    const iconSize = "48"
    const cardItems = [
        {
            title:"Gestion des relations avec les salariés et les tiers",
            body:"Nous nous occupons du cadre règlementaire et légal de vos paies afin d’optimiser vos coûts et votre temps. Aussi, nous mettons à votre disposition notre savoir-faire afin de mieux connaître vos clients et d’être pro actif dans vos relations.",
            icon:<Bank height={iconSize} width={iconSize}/>
        },
        {
            title:"Administration du personnel",
            body:"Nous mettons à votre disposition notre savoir-faire afin de recruter, de gérer et d’administrer votre personnel.",
            icon:<Groups height={iconSize} width={iconSize} />
        },
        {
            title:"Formation",
            body:"Nos formations sont toujours réalisés sur mesure et sous forme de plan d’actions efficaces et durables.",
            icon:<Book height={iconSize} width={iconSize} />
        },
        {
            title:"Récrutement",
            body:"Vous cherchez le candidat idéal ?\n Nous vous fournissons la préstation adéquate.",
            icon:<AddPerson height={iconSize} width={iconSize}/>
        }
    ]

    const CardItem = (props:CardProps) => {
        return (
            <div className="h-[40vh] flex-grow flex flex-col col-span-1 bg-red-200 border-2 border-red-200 p-8 m-5 rounded-md ">
                <div className=" flex justify-center mb-5 ">
                    {props.Icon}
                </div>
                <div className=" text-center text-neutral-800 text-xl font-bold mb-5 ">
                    {props.title}
                </div>
                <div className=" text-center text-neutral-800 text-lg " style={{whiteSpace:'pre-line'}}>
                    {props.body}
                </div>
            </div>
        )
    }

    return (
        <div className=" flex flex-col w-full pt-16 ">
            <div className=" text-center text-neutral-800 text-4xl font-bold">
            Nos domaines d’expertise
            </div>
            <div className=" text-xl text-neutral-600 text-center pt-6 ">
            Nous vous accompagnons dans la vie de votre organisation et au long du parcours professionnel de vos collaborateurs en <br></br> nous appuyant sur plusieurs domaines d’expertise.
            </div>
            <div className=" grid grid-cols-2 grid-rows-auto w-full px-16 pt-36 pb-20 ">
               {
                cardItems.map((item, index)=>{
                    return (
                        <div key={index} className="flex flex-col">
                        <CardItem  Icon={item.icon} title={item.title} body={item.body} />
                        </div> 
                        )
                })
               }
            </div>
        </div>
    )
}