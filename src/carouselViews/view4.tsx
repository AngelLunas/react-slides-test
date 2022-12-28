import React, { useRef, useEffect, useState } from "react";
import { View_Standard } from "./viewStandard";
import { MedicalCenter } from "../medicalCenter_white";
import { Group_4 } from "../group_4_svg";
import { PropsView } from "./typeProps"; 
import { gsap } from 'gsap';
import { animationMain, animationNext, animationPrev } from "../animations";

export const View4 = ({animation, next, prev, action}: PropsView) => {
    const [width, setWidth] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    let Icon = useRef(null);
    let Container = useRef(null);
    let ContainerCircle = useRef(null);
    let group = useRef([]);
    let Text = useRef(null);
    const svgRef = useRef(null);
    group.current = [];
    const tl = gsap.timeline();
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
            <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_4' : null}></div>
            <View_Standard text='One large hospital had 90,000 patiens encounters in 2020' Icon={MedicalCenter} Group={Group_4}
            class_container='view__4__container' class_text='text_titles_white' class_circle='view__4__container_icon_4' ref_icon={Icon}
            ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
            top={top} left={left} width={width} setLeft={setLeft} setTop={setTop} setWidth={setWidth} svgRef2={svgRef} topSvg={topSvg} setTopSvg={setTopSvg}
            />
        </>
    )
}