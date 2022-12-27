export const animationMain = (animation: boolean, tl: gsap.core.Timeline, Text: React.MutableRefObject<any>, 
                              action: string, ContainerCircle: React.MutableRefObject<any>, setLoading: (value: React.SetStateAction<boolean>) => void, setIsView: (value: React.SetStateAction<boolean>) => void, 
                              group: React.MutableRefObject<any>, Icon: React.MutableRefObject<any>
) => {
    if(animation){
        setTimeout(()=>{
            setLoading(true);
            setIsView(false);
        }, 200);
        if(action==='next'){
            tl.from(Text.current, {
                duration: 0.4,
                opacity: 0,
                delay: .2
            })
    
            tl.from(ContainerCircle.current, {
                duration: 0.4,
                scale: 0.1,
                y: 40,
                opacity: 0
            }, "-=0.1");
    
            tl.from(group.current, {
                duration: .4,
                scale: 0,
                y: 40,
                ease: "power1.inOut",
                stagger: {
                    grid: [7,15],
                    from: "random",
                    amount: 1.5
                }
              });
        }else if(action==='prev'){
            console.log('ejecuting previuss');
            tl.to(Icon.current, {
                opacity: 0,
                duration: 0
            });
            tl.from(ContainerCircle.current, {
                duration: .5,
                scale: 2,
                y: 40,
                borderRadius: 300
            }, "-=0.5");
            tl.to(Icon.current, {
                opacity: 1,
                duration: .2
            })
        }
    }
}

export const animationNext = (tl: gsap.core.Timeline, next: boolean, setLoading: (value: React.SetStateAction<boolean>) => void, setIsView: (value: React.SetStateAction<boolean>) => void, 
                        group: React.MutableRefObject<any>, ContainerCircle: React.MutableRefObject<any>, Icon: React.MutableRefObject<any>) => {
    if(next===true){
        setTimeout(()=>{
            setLoading(false);
            setIsView(true);
        }, 1200);
        tl.to(group.current, {
            duration: 0,
            opacity: 0
        });

        tl.to(Icon.current, {
            opacity: 0,
            duration: .1
        });

        tl.to(ContainerCircle.current, {
            duration: 2,
            scale: '30'
        });

        tl.from(ContainerCircle.current, {
            duration: 0.3, 
            borderRadius: 0
        }, "-=0.1");

        tl.to(ContainerCircle.current, {
            scale: 1,
        });

        tl.to(ContainerCircle.current, {
            borderRadius: '50%'
        });

        tl.to(Icon.current, {
            opacity: 1
        });

        tl.to(group.current, {
            opacity: 1
        });
    }
};

export const animationPrev = (tl: gsap.core.Timeline, setLoading: (value: React.SetStateAction<boolean>) => void, setIsView: (value: React.SetStateAction<boolean>) => void,
                              prev: boolean, next: boolean, Text: React.MutableRefObject<any>, ContainerCircle: React.MutableRefObject<any>, group: React.MutableRefObject<any>) => {
    if(prev){
        console.log('prevvv');
        setTimeout(()=>{
            setLoading(false);
            setIsView(true);
        }, 1200);
        tl.to(Text.current, {
            duration: .4,
            opacity: 0
        })

        tl.to(ContainerCircle.current, {
            duration: .3,
            scale: 0.1,
            y: 40,
            opacity: 0
        });

        tl.to(group.current, {
            duration: .4,
            scale: 0,
            opacity: 0,
            y: 40,
            ease: "power1.inOut",
            stagger: {
              grid: [7,15],
              from: "random",
              axis: "y",
              ease: "power2.in",
              amount: 1
            }
          }, "-=.8");
          tl.to(Text.current, {
            duration: 0, 
            opacity: 1,
            delay: 1
          });
          tl.to(ContainerCircle.current, {
            duration: 0,
            opacity: 1, 
            scale: 1,
            y: 0,
            delay: 1
          });
          tl.to(group.current, {
            scale: 1,
            opacity: 1, 
            y: 0,
            duration: 0, 
            delay: 1
          })
    }
}