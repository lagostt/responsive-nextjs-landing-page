
import Image from 'next/image'
import Link from 'next/link';
import RightArrow from './Icons/RightArrow';
import LeftArrow from './Icons/LeftArrow';

export default function NavBar(){

    interface ContactItemProps {
        title: string;
        contact: string;
    }

    interface NavBarItemProps {
        text: string;
    }

  

    const NavBarItem = (props:NavBarItemProps) => {
        return (
            <div className=" mx-3 text-base hover:text-red-500 hover:cursor-pointer">
                {props.text}
            </div>
        )
    }

    

    return (
      <div className="flex flex-col ">
         <div className=" px-16 h[5%] flex flex-row justify-between items-center bg-white opacity-80 fixed top-0 z-10 w-full ">
            <div className=' flex flex-row justify-center ' >
            <Image src={'/static/images/choose-logo.png'} alt={'A9 Conseils'} width="100" height="80" />
            </div>
            <div className=" flex flex-row justify-center text-slate-800s font-bold" >
                <NavBarItem text='ACCUEIL'/>
                <NavBarItem text='QUI SOMME-NOUS?'/>
                <NavBarItem text="NOS DOMAINES D'EXPERTISE" />
                <NavBarItem text='ANNONCES ET ACTUALITÉ'/>
                <NavBarItem text='CONTACT'/>
            </div>
         </div>
      </div>    
    )
}