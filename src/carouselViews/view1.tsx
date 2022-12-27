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
                tl.set(ContainerCircle.current, {
                    opacity: 1,
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0,
                    top: 0,
                    left: 0
                });
    
                tl.to(ContainerCircle.current, {
                    width: 200,
                    height: 200, 
                    left: '40%',
                    top: '30%',
                    duration: .5,
                });

                tl.to(ContainerCircle.current, {
                    borderRadius: '50%',
                    duration: 0
                }, '-=.4');

                tl.to(ContainerCircle.current, {
                    opacity: 0, 
                    duration: 0
                }, '-=.1');
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