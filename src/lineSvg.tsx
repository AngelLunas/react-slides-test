import React from "react";

export const Line_svg = ({svgRef}: {svgRef: React.MutableRefObject<any>}) => {
return(
  <svg
    width={1250}
    height={24}
    viewBox="0 0 1524 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="line_svg"
  >
    <path
      ref={svgRef}
      d="M0.452994 12L12 23.547L23.547 12L12 0.452994L0.452994 12ZM1523.55 12L1512 0.452994L1500.45 12L1512 23.547L1523.55 12ZM12 14H1512V10H12V14Z"
      fill="#0085CA"
    />
  </svg>
)
}

