function calculateTopGroup (textRef: React.MutableRefObject<any>, 
    svgRef: React.MutableRefObject<any>, 
    setLeft: React.Dispatch<React.SetStateAction<number>>, 
    setTop: React.Dispatch<React.SetStateAction<number>>, 
    setWidth: React.Dispatch<React.SetStateAction<number>>,
    setTopSvg: React.Dispatch<React.SetStateAction<string>>,
    svgRef2: React.MutableRefObject<any>, 
) {
    const windowWidht = window.innerWidth >= 1366 ? 1366 : window.innerWidth;
    const width = (12 * windowWidht) / 100;
    const margin = window.getComputedStyle(textRef.current).marginTop;
    const marginTopContainer = parseFloat(`${margin[0]}${margin[1]}`);
    const windowHeight = textRef.current.clientHeight + marginTopContainer + svgRef.current.clientHeight;
    const percentWidth = ((width / window.innerWidth) * 100) / 2;
    const percentHeight = ((width / windowHeight) * 100) / 2;
    const top = 50 - percentHeight;
    setLeft(50 - percentWidth);
    setTop(top);
    setWidth(width);
}

export {
    calculateTopGroup
}