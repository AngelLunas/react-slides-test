import * as React from "react"

export const HospitalSvg = ({svgRef}: {svgRef:  React.MutableRefObject<any>}) => {
  return(
    <svg
    width={109}
    height={100}
    viewBox="0 0 77 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="icon_hospital_container" ref={svgRef}>
    <path
      className="icon_hospital"
      d="M5.246 55c.22 1.976 1.976 3.513 3.952 3.293 6.367-.659 14.711-1.537 29.202-1.537h.219c14.492 0 22.835.878 29.202 1.537 1.976.22 3.733-1.317 3.952-3.293 0-.439-.219-.659-.658-.659-5.709-.659-15.37-1.757-32.715-1.757h-.22c-17.345 0-27.006 1.098-32.714 1.757 0 0-.22.439-.22.659ZM37.08 20.529h2.854c.439 0 .659-.22.659-.659v-3.293h3.293c.439 0 .659-.22.659-.659v-2.854c0-.439-.22-.659-.659-.659h-3.293V9.112c0-.44-.22-.659-.659-.659H37.08c-.44 0-.659.219-.659.659v3.293h-3.294c-.439 0-.658.22-.658.659v2.854c0 .439.219.659.658.659h3.294v3.293c.219.439.439.659.659.659Z"
      fill="#03173E"
    />
    <path
      className="icon_hospital"
      d="M68.257 50.609c1.098.219 2.195.219 3.074.439.439 0 .658-.22.658-.659V28.433h3.733c.439 0 .878-.439.659-.878l-6.368-14.491c0-.22-.439-.439-.658-.439H52.229C51.351 6.038 45.642.768 38.616.768s-12.735 5.05-13.613 11.857H7.877c-.219 0-.439 0-.658.219L.851 27.335c-.219.439.22.879.659.879h3.952V50.17c0 .439.439.658.659.658.878-.219 1.976-.219 3.074-.439.439 0 .658-.219.658-.658V27.994H67.598v21.737c0 .658.439.878.659.878Zm1.756-26.787H48.716c1.756-1.976 3.074-4.391 3.513-7.026h14.71l3.074 7.026ZM38.836 5.16c5.269 0 9.441 4.171 9.441 9.441 0 5.269-4.172 9.441-9.441 9.441-5.27 0-9.442-4.391-9.442-9.441 0-5.05 4.172-9.441 9.442-9.441ZM10.293 17.016h14.93c.439 2.635 1.756 5.05 3.513 7.026H7.219l3.074-7.026Z"
      fill="#0B183D"
    />
    <path
      className="icon_hospital"
      d="M46.28 49.291h3.074c.439 0 .659-.219.659-.658V36.557c0-1.537-1.318-2.855-2.855-2.855H34.643c-1.537 0-2.854 1.318-2.854 2.855v12.954c0 .439.22.659.659.659.878 0 1.976-.22 3.074-.22.439 0 .658-.22.658-.659V38.094h9.44v10.758c0 .22.44.439.66.439Z"
      fill="#0B183D"
    />
    <path
      className="icon_hospital"
      d="M49.106 47.754V34.361c0-.439-.22-.659-.659-.659H25.393c-.439 0-.659.22-.659.659v12.515c0 .439.22.659.659.659 9.661 0 17.345.439 23.054.878.22 0 .659-.22.659-.659Zm-4.392-3.952c-4.83-.439-10.099-.439-15.588-.658v-5.05h15.588v5.708Z"
      fill="#0B183D"
    />
    </g>
  </svg>
  )
}