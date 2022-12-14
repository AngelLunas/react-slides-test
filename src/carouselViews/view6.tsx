import React, { useEffect, useRef, useState } from "react";
import { View_Standard } from "./viewStandard";
import { MedicalCenter } from "../medicalCenter";
import { Group_6 } from "../group_6_svg";
import { PropsView } from "./typeProps";
import { gsap } from 'gsap';
import { animationMain, animationNext, animationPrev } from "../animations";

export const View6 = ({animation, next, prev, action}: PropsView) => {
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
    }, [prev])

    return(
        <>
        <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_6' : null}></div>
        <View_Standard text='One hospital had 1,471 caregivers for patients.' class_text='text_titles_white' Group={Group_6} 
        Icon={MedicalCenter} class_circle='view__6__container_icon_6' class_container='view__6__container' ref_icon={Icon}
        ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
        top={top} left={left} width={width} setLeft={setLeft} setTop={setTop} setWidth={setWidth} svgRef2={svgRef} topSvg={topSvg} setTopSvg={setTopSvg}
        />
        </>
    )
}