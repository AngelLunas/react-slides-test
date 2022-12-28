import React, { useEffect, useRef, useState } from "react";
import { View_Standard } from "./viewStandard";
import { NurseSvg } from "../nurseSvg";
import { Group_5 } from "../group_5_svg";
import { PropsView } from "./typeProps";
import { gsap } from 'gsap';
import { animationMain, animationNext, animationPrev } from "../animations";

export const View5 = ({animation, next, prev, action}: PropsView) => {
    const [width, setWidth] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const tl = gsap.timeline();
    let Icon = useRef(null);
    let Container = useRef(null);
    let ContainerCircle = useRef(null);
    let Text = useRef(null);
    let group = useRef([]);
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
        <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_5' : null}></div>
        <View_Standard text='Each of us makes a positive impact in our communities.' Icon={NurseSvg} Group={Group_5}
        class_container='view__5__container' class_text='text_titles_white' class_circle='view__5__container_icon_5' ref_icon={Icon}
        ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
        top={top} left={left} width={width} setLeft={setLeft} setTop={setTop} setWidth={setWidth} svgRef2={svgRef} topSvg={topSvg} setTopSvg={setTopSvg}
        />
        </>
    )
}