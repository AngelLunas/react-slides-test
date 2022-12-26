function calculateTopGroup (textRef: React.MutableRefObject<any>, 
    svgRef: React.MutableRefObject<any>, 
    setLeft: React.Dispatch<React.SetStateAction<number>>, 
    setTop: React.Dispatch<React.SetStateAction<number>>, 
    setWidth: React.Dispatch<React.SetStateAction<number>>
) {
    const windowWidht = window.innerWidth >= 1366 ? 1366 : window.innerWidth;
    const width = (12 * windowWidht) / 100;
    const windowHeight = textRef.current.clientHeight + 20 + svgRef.current.clientHeight;
    const percentWidth = ((width / window.innerWidth) * 100) / 2;
    const percentHeight = ((width / windowHeight) * 100) / 2;
    setLeft(50 - percentWidth);
    setTop(50 - percentHeight);
    setWidth(width);
}

export {
    calculateTopGroup
}