"use client";

import Image from 'next/image'
import LeftArrow from '../Icons/LeftArrow'
import RightArrow from '../Icons/RightArrow'
import { useEffect, useState } from 'react'

// this component is not being used
export default function ImageCarousel(){
    
    const [currentImage,setCurrentImage] = useState(0);

    const images = [
        {
            text:"UN EXPERT À VOS CÔTÉS",
            text2:"",
            image:"banner-img-1.jpg"},
        {
            text:"NOUS SOMMES DES EXPERTS",
            text2:"DANS NOTRE DOMAINE",
            image:"banner-img-2.jpg"
        }
    ]

   useEffect(()=>{
    const slideInterval = setInterval(nextSlide,6000)
    return () => clearInterval(slideInterval)
   },[])

    const prevSlide = () => {
        setCurrentImage((currentImage) =>
        currentImage === 0 ? images.length - 1 : currentImage - 1
        );
    };

    const nextSlide = () => {
        setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
        );
    };


    

    const ImageContainerWithText = (props:{image:string, text1:string, text2:string}) => {
        return (
            <div className='relative h-full w-full ' >
                <div 
                className=' absolute flex flex-col justify-center items-center inset-0 w-full z-10 bg-slate-900 bg-opacity-25'>
                    <div className="text-white text-5xl font-bold pb-5"> 
                        A9 CONSUEILS                           
                    </div>
                    <div className=" text-white text-6xl font-bold text-center pb-5 ">
                        {props.text1}
                    </div>
                    {
                        props.text2 === "" ? <div></div>:
                        <div className=" text-white text-6xl font-bold text-center ">
                        {props.text2}
                        </div>
                    }
                </div>
                <Image src={"/static/images/"+props.image} alt='' fill={true} />
            </div>
        )
    }


    return (
        <div className=' overflow-hidden relative '>
           <div className='flex transition-transform  duration-700 motion-reduce:transition-none'
                style={{transform: `translateX(-${currentImage*100}%) `, transitionProperty: 'transform', transitionTimingFunction: 'ease-out' }}
             > 

             {
                images.map((s,i) => (
                    <div key={i} className=' w-full h-[70vh] flex-shrink-0  '  >
                        <ImageContainerWithText image={s.image} text1={s.text} text2={s.text2} />
                    </div>
                ) )
             }

            </div>
            <div className=' absolute inset-0 z-20 fill-slate-300 flex items-center justify-between px-10'  >
                <LeftArrow height='32' width='48' onClick={prevSlide} />
                <RightArrow height='32' width='48' onClick={nextSlide} />
            </div>
        </div>
    )
}


