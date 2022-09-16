import React from "react";

type propsView = {
    Icon: ({ svgRef }: { svgRef: React.MutableRefObject<any>; }) => JSX.Element
    Group: ({ group }: { group: Array<SVGGElement>; }) => JSX.Element
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
    class_container_extend?: string
}

export const View_Standard = ({Icon, Group, text, class_text, class_circle, class_container, ref_icon, ref_container, ref_circle, ref_group, ref_text, loading, class_container_extend}: propsView) => {
    return(
        <div className={class_container} ref={ref_container}>
            <div className={loading ? class_container_extend ? `${class_container} ${class_container_extend}` : class_container : 'ocult'}>
                <div className='container_text'>
                    <span className={class_text} ref={ref_text}>{text}</span>
                </div>
                <div className={`container_icon ${class_circle}`} ref={ref_circle}>
                    <Icon svgRef={ref_icon}/>
                </div>
                <div className='container_svg'>
                    <Group group={ref_group}/>
                </div>
            </div>
        </div>
    )
}