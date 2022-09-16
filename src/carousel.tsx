import React, { useEffect, useState } from "react";
import { carouselData } from "./carouselData";
import { Buttons } from "./buttons";

export const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    const [action, setAction] = useState('next');
    const [width, setWidth] = useState(screen.width);
    const [height, setHeight] = useState(document.documentElement.scrollHeight);
    const slideLength = carouselData.length;
    console.log(width);

    const nextSlide = () => {
        setNext(true);
        setTimeout(()=>{
        setCurrent(current === slideLength-1 ? 0 : current + 1); 
        setNext(false); 
        }, 1200);
        setAction('next');
    }

    const prevSlide = () => {
        setPrev(true);
        setTimeout(()=>{
            setCurrent(current === 0 ? slideLength-1 : current-1);
            setPrev(false);
        }, 2000);
        setAction('prev');
    }

    const deterAnimation = (index: number) => {
        if(index===current){
            if(action==='next'){
                return 'next'
            }
            return 'prev'
        }
    };

    return(
        <>
            <Buttons next={nextSlide} prev={prevSlide} firstIndex={current === 0 ? true : false} lastIndex={current === slideLength-1 ? true : false}
            background={(current===1)||(current===5) ? true : false}
            />
            <div className='container'>
                {carouselData.map((slide, index)=>{
                    return(
                        <div key={index} className={index === current ? 'active' : 'slide'}>
                            {<slide.component animation={index===current ? true : false} next={(next)&&(current===index) ? true : false} 
                            prev={(prev)&&(current===index) ? true : false} action={deterAnimation(index)}/>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}