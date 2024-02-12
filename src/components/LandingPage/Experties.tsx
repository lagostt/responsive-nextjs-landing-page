
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
            body:"Nous optimisons vos coûts et votre temps en gérant vos paies selon les normes, tout en utilisant notre expertise pour renforcer vos relations client.",
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
            <div className=" lg:h-[40vh] h-[50vh] flex-grow flex flex-col col-span-1 justify-center items-center bg-red-200 border-2 border-red-200 p-5 my-3 mx-3 rounded-md ">
                <div className=" flex justify-center mb-5 ">
                    {props.Icon}
                </div>
                <div className=" text-center text-neutral-800 lg:text-xl text-lg font-bold mb-5 ">
                    {props.title}
                </div>
                <div className=" text-center text-neutral-800 lg:text-lg text-base " style={{whiteSpace:'pre-line'}}>
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
            <div className=" grid lg:grid-cols-2 grid-cols-1 grid-rows-auto w-full px-8 pt-36 pb-20 ">
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