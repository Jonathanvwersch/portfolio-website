import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const LinkedInIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.28604 4.97937H7.76204V6.21271C8.11871 5.50337 9.03337 4.86604 10.4074 4.86604C13.0414 4.86604 13.6667 6.27804 13.6667 8.86871V13.6667H11V9.45871C11 7.98337 10.6434 7.15137 9.73537 7.15137C8.47604 7.15137 7.95271 8.04804 7.95271 9.45804V13.6667H5.28604V4.97937V4.97937ZM0.713374 13.5534H3.38004V4.86604H0.713374V13.5534V13.5534ZM3.76204 2.03337C3.76214 2.25689 3.71781 2.4782 3.63163 2.68443C3.54545 2.89067 3.41914 3.07772 3.26004 3.23471C2.93764 3.55512 2.50125 3.73448 2.04671 3.73337C1.59297 3.73307 1.15758 3.55417 0.834707 3.23537C0.676182 3.07785 0.550298 2.89059 0.46427 2.68433C0.378242 2.47807 0.33376 2.25686 0.333374 2.03337C0.333374 1.58204 0.513374 1.15004 0.835374 0.831374C1.15796 0.512146 1.59353 0.333175 2.04737 0.333374C2.50204 0.333374 2.93804 0.512708 3.26004 0.831374C3.58137 1.15004 3.76204 1.58204 3.76204 2.03337Z"
        fill={iconColor}
      />
    </Svg>
  )
}

export default LinkedInIcon