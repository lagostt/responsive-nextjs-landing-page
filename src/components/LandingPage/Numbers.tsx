
type CardProps = {
    value:string,
    desc:string
}

export default function Numbers(){

    const Items = [
        {
            value : "185",
            desc : "CAS DE RÉUSSITE"
        },
        {
            value: "155",
            desc : "CLIENTS FIABLES"
        },
        {
            value: "200",
            desc: "ÉTUDE DE CAS"
        },
        {
            value: "150",
            desc : "CAS ENREGISTRÉ"
        }
    ]

    const ItemCard = (props:CardProps) =>
    {
        return (
        <div className=" p-8 mx-12 lg:my-0 my-8 basis-1/4 flex flex-col justify-center items-center border-2 border-neutral-100 bg-neutral-100 rounded-md">
            <div className=" text-4xl text-center font-bold text-neutral-800">
                {props.value}
            </div>
            <div className="text-2xl text-center font-normal text-neutral-500">
                {props.desc}
            </div>
        </div>
    )
   }
   
   return (
    <div className=" flex flex-col w-full pt-16 ">
      <div className=" text-center text-neutral-800 text-4xl font-bold">
              Ils nous ont fait confiance
      </div>
      <div className="flex lg:flex-row flex-col justify-center w-full pt-36">
           {
                Items.map((item, index)=>{
                    return (
                        <div key={index} className="flex flex-col">
                        <ItemCard   value={item.value} desc={item.desc} />
                        </div> 
                        )
                })
           }
      </div>
    </div>
   )

}