import { View1 } from "./carouselViews/view1";
import { View2 } from "./carouselViews/view2";
import { View3 } from "./carouselViews/view3";
import { View4 } from "./carouselViews/view4";
import { View5 } from "./carouselViews/view5";
import { View6 } from "./carouselViews/view6";
import { View7 } from "./carouselViews/view7";
import { View8 } from "./carouselViews/view8";
import { PropsView } from "./carouselViews/typeProps";

interface Carousel {
    component: ({animation, next}: PropsView) => JSX.Element,
    name: String
}

export const carouselData: Array<Carousel> = [
    {component: View1, name: 'view 1'},
    {component: View2, name: 'view 2'},
    {component: View3, name: 'view 3'},
    {component: View4, name: 'view 4'},
    {component: View5, name: 'view 5'},
    {component: View6, name: 'view 6'},
    {component: View7, name: 'view 7'},
    {component: View8, name: 'View 8'}
]