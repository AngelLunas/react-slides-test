import React, { useEffect, useRef, useState } from "react";
import { Line_svg } from "../lineSvg";
import { gsap } from 'gsap';
import { PropsView } from "./typeProps";

export const View8 = ({animation, next, prev, action}: PropsView) => {

    const tl = gsap.timeline();
    const Icon = useRef(null);
    const groupCircles = useRef(null);
    const groupTexts = useRef(null);
    const groupDataCirlces = useRef(null);
    const Description = useRef(null);
    groupDataCirlces.current = [];
    groupCircles.current = [];
    groupTexts.current = [];
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    const addToRefs = (el: HTMLDivElement) => {
        if(el && !groupCircles.current.includes(el)){
          groupCircles.current.push(el);
        };
      };

      const addToRefsTexts = (el: HTMLDivElement) => {
        if(el && !groupTexts.current.includes(el)){
            groupTexts.current.push(el);
          };
      };

      const addToRefsData = (el: HTMLDivElement) => {
        if(el && !groupDataCirlces.current.includes(el)){
            groupDataCirlces.current.push(el);
          };
      }

      useEffect(()=>{
        if(animation) {
            setTimeout(()=>{
                setLoading(true);
                setIsView(false);
            }, 200);
            if(action==='next'){
                tl.from(groupCircles.current.reverse(), {
                    duration: .3,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                      from: 11,
                      ease: "power3.inOut",
                      amount: .4
                    }
                  });
                  tl.from(groupTexts.current.reverse(), {
                    duration: .3,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                      from: 11,
                      ease: "power3.inOut",
                      amount: .4
                    }
                  });
                  tl.from(groupDataCirlces.current.reverse(), {
                    duration: .3,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                      from: 11,
                      ease: "power3.inOut",
                      amount: .4
                    }
                  }, "-=0.5");
                  tl.from(Description.current, {
                    opacity: 0, 
                    duration: .4,
                    ease: "power1.inOut",
                  });
            }
        }
      }, [animation]);

      useEffect(()=>{
        if(prev){
            setTimeout(()=>{
                setLoading(false);
                setIsView(true);
            }, 1200);
            tl.to(groupCircles.current, {
                duration: .3,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                  from: 11,
                  ease: "power3.inOut",
                  amount: .4
                }
              });
              tl.to(groupTexts.current, {
                duration: .3,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                  from: 11,
                  ease: "power3.inOut",
                  amount: .4
                }
              });
              tl.to(groupDataCirlces.current, {
                duration: .3,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                  from: 11,
                  ease: "power3.inOut",
                  amount: .4
                }
              }, "-=0.5");
              tl.to(Description.current, {
                opacity: 0, 
                duration: .4,
                ease: "power1.inOut",
              });

              tl.to(groupCircles.current, {
                opacity: 1,
                delay: 2,
                duration: 0
              });

              tl.to(groupTexts.current, {
                opacity: 1,
                duration: 0
              });

              tl.to(groupDataCirlces.current, {
                opacity: 1,
                duration: 0
              })

              tl.to(Description.current, {
                opacity: 1,
                duration: 0
              })
        }
      }, [prev])

    return(
        <div className='view__8__container'>
            <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_8' : null}></div>
            <div className={loading ? 'view__8__container' : 'ocult'}>
                <div className='view__8__container_title'>
                    <span className="text_titles_white">United as one healthcare family, we:</span>
                </div>
                <div className="container-content-circles">
                    <Line_svg svgRef={Icon}/>
                    <div className='view__8__container_circles'>
                        <div>
                            <div className='view__8__container_data' ref={addToRefsTexts}>
                                <div className='view__8__container_data_text'>
                                    <div className="directionColumn ">
                                        <span className="view__8_text_data">Are stronger together</span>
                                    </div>
                                </div>
                                <div className='view__8__selector'></div>
                            </div>
                            <div className="view__8__circles" ref={addToRefs}>
                                <div ref={addToRefsData} className='view__8__data_text'>
                                    <div>
                                        <span className='text_orange'>77K</span>
                                        <span className='text_blue'>+</span>
                                    </div>
                                    <div className='directionColumn'>
                                        <span className='text_data_8'>colleagues across</span>
                                        <span className='text_data_8'>the state</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='view__8__container_data' ref={addToRefsTexts}>
                                <div className='view__8__container_data_text'>
                                    <div className="directionColumn ">
                                        <span className="view__8_text_data">impact our communities</span>
                                        <span className="view__8_text_data">even more</span>
                                    </div>
                                </div>
                                <div className='view__8__selector'></div>
                            </div>
                            <div className="view__8__circles" ref={addToRefs}>
                                <div ref={addToRefsData} className='view__8__data_text'>
                                    <div>
                                        <span className='text_blue'>$</span>
                                        <span className="text_orange">836M</span>
                                    </div>
                                    <div className="directionColumn">
                                        <span className='text_data_8'>estimated cost for</span>
                                        <span className='text_data_8'>delivery of</span>
                                        <span className='text_data_8'>uncompensated care</span>
                                        <span className='text_data_8'>in 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='view__8__container_data' ref={addToRefsTexts}>
                                <div className='view__8__container_data_text'>
                                    <div className="directionColumn ">
                                        <span className="view__8_text_data">Increase our rich to</span>
                                        <span className="view__8_text_data">millions</span>
                                    </div>
                                </div>
                                <div className='view__8__selector'></div>
                            </div>
                        <div>
                            <div className="view__8__circles" ref={addToRefs}>
                                <div ref={addToRefsData} className='view__8__data_text'>
                                    <div>
                                        <span className='text_orange'>6</span>
                                        <span className='text_blue'>.</span>
                                        <span className='text_orange'>4M</span>
                                    </div>
                                    <div className="directionColumn">
                                        <span className='text_data_8'>patient encounters</span>
                                        <span className='text_data_8'>in 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='view__8__container_description' ref={Description}>
                    <span className='text_orange_title'>We are proud <span className='text_white'>of what we can do together</span></span>
                </div> 
            </div>
        </div>
    )
}