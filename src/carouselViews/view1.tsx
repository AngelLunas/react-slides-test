import React, { useEffect, useRef, useState } from "react";
import ImageLine from '../../public/imgs/bg.svg';
import { PropsView } from "./typeProps";
import { gsap } from "gsap";

export const View1 = ({animation, next, action, prev}: PropsView) => {

    const tl = gsap.timeline();
    const ContainerCircle = useRef(null);
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    useEffect(()=>{
        if(animation){
            setTimeout(()=>{
                setLoading(true);
                setIsView(false);
            }, 200);
            if(action==='prev'){
                tl.to(ContainerCircle.current, {
                    opacity: 1,
                    duration: 0
                });
    
                tl.from(ContainerCircle.current, {
                    duration: .5,
                    scale: 20,
                    y: 40,
                    borderRadius: 300
                });
    
                tl.to(ContainerCircle.current, {
                    opacity: 0,
                    duration: 0
                });
            }
        }
    }, [animation]);

    useEffect(()=>{
        if(next===true){
            setTimeout(()=>{
                setLoading(false);
                setIsView(true);
            }, 1200);
            tl.to(ContainerCircle.current, {
                opacity: 1,
                duration: .1,
                delay: .7
            });

            tl.to(ContainerCircle.current, { 
                duration: 1.5,
                scale: '30'
            });

            tl.to(ContainerCircle.current, {
                scale: 1,
                opacity: 0
            });
        }
        
    }, [next])

    return(
        <div className='view__1__container'>
            <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_1' : null}></div>
            <div>
                <div className={loading ? 'view__2__container_data' : 'view__2__container_data ocult'}>
                    <div className='view__1__container_text'>
                        <h2 className='text_titles'>You are part of something bigger</h2>
                        <h3 className='text_titles'>Learn more our expaned network of dedicated colleagues</h3>
                    </div>
                    <div className="view__1__container_icon_1" ref={ContainerCircle}></div>
                    <div className='view__1__container_image'>
                        <img src={ImageLine} className='view__1__image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}