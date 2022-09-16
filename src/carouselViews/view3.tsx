import React, { useEffect, useRef, useState } from "react";
import { Group_3 } from "../svgComponent";
import { NurseSvg } from "../nurseSvg";
import { View_Standard } from "./viewStandard";
import { gsap } from "gsap";
import { PropsView } from "./typeProps";
import { animationMain, animationNext, animationPrev } from "../animations";


export const View3 = ({animation, next, prev, action}: PropsView) => {

    const tl = gsap.timeline();
    let group = useRef([]);
    group.current = [];
    let ContainerCircle = useRef(null);
    let Icon = useRef(null);
    let Text = useRef(null);
    let Container = useRef(null);
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    useEffect(()=>{
        animationMain(animation, tl, Text, action, ContainerCircle, setLoading, setIsView, group, Icon)
    }, [animation]);

    useEffect(()=>{
        animationNext(tl, next, setLoading, setIsView, group, ContainerCircle, Icon);
    }, [next]);

    useEffect(()=>{
        animationPrev(tl, setLoading, setIsView, prev, next, Text, ContainerCircle, group);
    }, [prev]);


    return(
        <>
            <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_3' : null}></div>
            <View_Standard Icon={NurseSvg} Group={Group_3} class_container='view__3__container' class_circle='view__3__container_icon_3'
            text='Each of us has an impact on thousands of patients every year.' class_text='text_titles_black' ref_icon={Icon}
            ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
            />
        </>
)
}