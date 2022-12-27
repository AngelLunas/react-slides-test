import React, { useEffect, useRef, useState } from "react";
import { HospitalSvg } from "../hospitalSvg";
import { PropsView } from "./typeProps";
import { gsap } from "gsap";

export const View2 = ({animation, next, prev, action}: PropsView) => {

    const tl = gsap.timeline();
    let Icon = useRef(null);
    let ContainerCircle = useRef(null);
    let Text = useRef(null);
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    useEffect(()=>{
        if(animation){
            setTimeout(()=>{
                setLoading(true);
                setIsView(false);
            }, 100);
            if(action==='next'){
                tl.from(Text.current, {
                    duration: 0.2,
                    opacity: 0
                });
        
                tl.from(ContainerCircle.current, {
                    duration: 0.2,
                    scale: 0.1,
                    y: 40,
                    opacity: 0,
                    delay: 1
                }, "-=0.4"); 
            }else if(action==='prev'){
                tl.to([Icon.current, Text.current], {
                    opacity: 0,
                    duration: 0
                });
                tl.to(ContainerCircle.current, {
                    width: '100vw',
                    height: '100vh',
                    top: -70, 
                    left: 0,
                    position: 'relative',
                    duration: 0,
                    borderRadius: 0
                });
                tl.to(ContainerCircle.current, {
                    width: 160,
                    height: 160,
                    position: 'unset',
                    duration: .5,
                });
                tl.set(ContainerCircle.current, {
                    borderRadius: '50%'
                }, '-=.4');
                tl.to([Icon.current, Text.current], {
                    opacity: 1,
                    duration: .2
                });
            }
        }
    }, [animation]);

    useEffect(()=>{
        if(next===true){
            setTimeout(()=>{
                setLoading(false);
                setIsView(true);
            }, 1400)
            tl.to(Icon.current, {
                opacity: 0,
                duration: .1
            });

            tl.to(ContainerCircle.current, {
                duration: 2,
                scale: '30'
            });

            tl.from(ContainerCircle.current, {
                duration: 0.3,
                borderRadius: 0
            });

            tl.to(ContainerCircle.current, {
                scale: 1,
            });

            tl.to(ContainerCircle.current, {
                borderRadius: '50%'
            });

            tl.to(Icon.current, {
                opacity: 1
            });
        }
        
    }, [next]);

    useEffect(()=>{
        if(prev){
            setTimeout(()=>{
                setLoading(false);
                setIsView(true);
            }, 1200);
            tl.to(Text.current, {
                duration: .4,
                opacity: 0
            })
    
            tl.to(ContainerCircle.current, {
                duration: .3,
                scale: 0.1,
                y: 40,
                opacity: 0
            });
            tl.to(Text.current, {
                duration: 0, 
                opacity: 1,
                delay: 1
              });
              tl.to(ContainerCircle.current, {
                duration: 0,
                opacity: 1, 
                scale: 1,
                y: 0,
                delay: 1
              });
        }
    }, [prev])

    return(
        <div>
            <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_2' : null}></div> 
            <div className='view__2__container'>
                <div className={loading ? 'view__2__container_data' : 'view__2__container_data ocult'}>
                    <div>
                        <div className='container_icon view__2__container_icon_2' ref={ContainerCircle}>
                            <HospitalSvg svgRef={Icon}/>
                        </div>
                        <div>
                            <span className='view__2__text' ref={Text}>Before, we operated individually.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}