import React, { useEffect, useRef, useState } from "react";
import { View_Standard } from "./viewStandard";
import { Group_7 } from "../group_7_svg";
import { MedicalCenter } from "../medicalCenter_white";
import { PropsView } from "./typeProps";
import { animationMain, animationNext, animationPrev } from "../animations";
import { gsap } from 'gsap';

export const View7 = ({animation, next, prev, action}: PropsView) => {
    const [width, setWidth] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const tl = gsap.timeline();
    let Icon = useRef(null);
    let Container = useRef(null);
    let ContainerCircle = useRef(null);
    let group = useRef([]);
    let Text = useRef(null);
    const svgRef = useRef(null);
    group.current = [];
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);
    const [topSvg, setTopSvg] = useState('');

    useEffect(()=>{
        animationMain(animation, tl, Text, action, ContainerCircle, setLoading, setIsView, group, Icon, width, left, top);
    }, [animation]);

    useEffect(()=>{
        animationNext(tl, next, setLoading, setIsView, group, ContainerCircle, Icon);
    }, [next]);

    useEffect(()=>{
        animationPrev(tl, setLoading, setIsView, prev, next, Text, ContainerCircle, group);
    }, [prev]);

    return(
       <>
       <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_7' : null}></div>
       <View_Standard Icon={MedicalCenter} Group={Group_7} class_container='view__7__container' class_circle='view__7__container_icon_7'
       class_text='text_titles_black' text='In 2020, one hospital provided $35 million in uncompensated care.' ref_icon={Icon}
       ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
       class_container_extend='ocult_7' top={top} left={left} width={width} setLeft={setLeft} setTop={setTop} setWidth={setWidth}
       svgRef2={svgRef} topSvg={topSvg} setTopSvg={setTopSvg}
       /> 
       </>
    )
}