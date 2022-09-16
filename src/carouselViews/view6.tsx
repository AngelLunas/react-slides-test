import React, { useEffect, useRef, useState } from "react";
import { View_Standard } from "./viewStandard";
import { MedicalCenter } from "../medicalCenter";
import { Group_6 } from "../group_6_svg";
import { PropsView } from "./typeProps";
import { gsap } from 'gsap';
import { animationMain, animationNext, animationPrev } from "../animations";

export const View6 = ({animation, next, prev, action}: PropsView) => {

    const tl = gsap.timeline();
    let Icon = useRef(null);
    let Container = useRef(null);
    let ContainerCircle = useRef(null);
    let group = useRef([]);
    let Text = useRef(null)
    group.current = [];
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
    }, [prev])

    return(
        <>
        <div className={(isView)&&(action==='prev')&&(!prev) ? 'ocult_6' : null}></div>
        <View_Standard text='One hospital had 1,471 caregivers for patients.' class_text='text_titles_white' Group={Group_6} 
        Icon={MedicalCenter} class_circle='view__6__container_icon_6' class_container='view__6__container' ref_icon={Icon}
        ref_container={Container} ref_circle={ContainerCircle} ref_group={group.current} ref_text={Text} loading={loading}
        />
        </>
    )
}