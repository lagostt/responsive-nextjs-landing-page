"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';
import Menu from './Icons/Menu';
import Close from './Icons/Close';



interface NavBarItemProps {
    text: string;
}

export default function NavBar(){


    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navBarItems = [
      "ACCEIL",
      "QUI SOMME-NOUS?",
      "NOS DOMAINES D'EXPERTISE",
      "ANNONCES ET ACTUALITÉ",
      "CONTACT"
    ]
    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
  
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  
        if (scrollPercentage > 5) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const NavBarItem = (props:NavBarItemProps) => {
        return (
            <div className=" mx-3 text-base hover:text-red-500 hover:cursor-pointer">
                {props.text}
            </div>
        )
    }
    const DrawerItem = (props:NavBarItemProps) => {
      return (
        <div className=' text-lg font-semibold py-2 text-start'>
          {props.text}
        </div>
      )
    }

    

    return (
     <div>
      <div className="lg:flex flex-col hidden">
         <div className={" transition-all duration-700 px-16 h[5%] flex flex-row justify-between items-center fixed top-0 z-10 w-full "+(scrolled ? "bg-neutral-100 border-b-2 border-neutral-200":"bg-neutral-100 opacity-80")}>
            <div className=' flex flex-row justify-center ' >
            <Image src={'/static/images/choose-logo.png'} alt={'A9 Conseils'} width="100" height="80" />
            </div>
            <div className={" flex flex-row justify-center text-slate-800 font-bold"} >
              {
                navBarItems.map((item, index) => {
                  return <NavBarItem key={index} text={item}/>
                })
              }
            </div>
         </div>
      </div>  
      <div className={'lg:hidden flex flex-row justify-between px-3 fixed top-0 z-10 w-full transition-all duration-700 '+(scrolled ? "bg-neutral-100 border-b-2 border-neutral-200":"bg-neutral-100 opacity-80")}>
      <div className=' flex flex-row justify-center ' >
            <Image src={'/static/images/choose-logo.png'} alt={'A9 Conseils'} width="100" height="80" />
      </div>
      <div className='flex flex-row justify-center px-3 items-center'>
        <Menu width='48' height='48' onClick={toggleDrawer} />
      </div>
      </div>
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-neutral-100 z-10 shadow-lg transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-4">
          <div className='flex flex-row justify-end'>
            <Close width='32' height='32' onClick={toggleDrawer}/>
          </div>
          {
                navBarItems.map((item, index) => {
                  return <DrawerItem key={index} text={item}/>
                })
          }
        </div>
      </div>
    </div>  
    )
}