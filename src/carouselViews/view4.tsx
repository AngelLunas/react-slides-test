import React, { useRef, useEffect, useState } from "react";
import { View_Standard } from "./viewStandard";
import { MedicalCenter } from "../medicalCenter_white";
import { Group_4 } from "../group_4_svg";
import { PropsView } from "./typeProps"; 
import { gsap } from 'gsap';
import { animationMain, animationNext, animationPrev } from "../animations";

export const View4 = ({animation, next, prev, action}: PropsView) => {

    let Icon = useRef(null);
    let Container = useRef(null);
    let ContainerCircle = useRef(null);
    let group = useRef([]);
    let Text = useRef(null);
    group.current = [];
    const tl = gsap.timeline();
    const [loading, setLoading] = useState(false);
    const [isView, setIsView] = useState(false);

    useEffect(()=>{
        animationMain(animation, tl, Text, action, ContainerCircle, setLoading, setIsView, group, Icon);
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
            />
        </>
    )
}