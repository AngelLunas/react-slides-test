import React, { useEffect, useRef, useState } from "react";
import { calculateTopGroup } from "./hooks";

type propsView = {
    Icon: ({ svgRef }: { svgRef: React.MutableRefObject<any>; }) => JSX.Element
    Group: ({ group, svgRef, top }: { group: Array<SVGGElement>, svgRef: React.MutableRefObject<any>, top: string}) => JSX.Element
    text: String
    class_text: string
    class_circle: string
    class_container: string
    ref_icon: React.MutableRefObject<any>
    ref_container: React.MutableRefObject<any>
    ref_circle: React.MutableRefObject<any>
    ref_group: Array<any>
    ref_text: React.MutableRefObject<any>
    loading: boolean
    class_container_extend?: string,
    top: number, 
    setTop: React.Dispatch<React.SetStateAction<number>>,
    left: Number,
    setLeft: React.Dispatch<React.SetStateAction<number>>,
    width: number, 
    setWidth: React.Dispatch<React.SetStateAction<number>>,
    svgRef2: React.MutableRefObject<any>,
    topSvg: string,
    setTopSvg: React.Dispatch<React.SetStateAction<string>>,
}

export const View_Standard = ({Icon, Group, text, class_text, class_circle, class_container, ref_icon, ref_container, ref_circle, ref_group, ref_text, loading, class_container_extend, top, left, width, setWidth, setTop, setLeft, svgRef2, topSvg, setTopSvg}: propsView) => {
    const textRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        calculateTopGroup(textRef, svgRef, setLeft, setTop, setWidth, setTopSvg, svgRef2);
    }, []);

    window.addEventListener('resize', () => {
        calculateTopGroup(textRef, svgRef, setLeft, setTop, setWidth, setTopSvg, svgRef2);
    });

    return(
        <div className={class_container} ref={ref_container}>
            <div className={loading ? class_container_extend ? `${class_container} ${class_container_extend}` : class_container : 'ocult'}>
                <div className='container_text' ref={textRef}>
                    <span className={class_text} ref={ref_text}>{text}</span>
                </div>
                <div className='container_svg' ref={svgRef}>
                    <div className={`container_icon ${class_circle}`} ref={ref_circle} style={{left: `50%`, top: `50%`, width: `${width}px`, height: `${width}px`}}>
                        <Icon svgRef={ref_icon}/>
                    </div>
                    <Group group={ref_group} svgRef={svgRef2} top={topSvg}/>
                </div>
            </div>
        </div>
    )
}