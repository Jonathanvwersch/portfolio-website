import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const GraphQLIcon = ({ color, size }: IconType) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.primary

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_558_898)">
        <path
          d="M7.98 15.875C7.77063 15.875 7.55813 15.8188 7.37375 15.7125L5.44562 14.5719C5.15812 14.4094 5.29875 14.3531 5.3925 14.3219C5.77687 14.1875 5.855 14.1594 6.26438 13.925C6.30813 13.9 6.36437 13.9094 6.40812 13.9375L7.88938 14.8156C7.9425 14.8469 8.0175 14.8469 8.0675 14.8156L13.8394 11.4844C13.8925 11.4531 13.9269 11.3906 13.9269 11.3281V4.66565C13.9269 4.60002 13.8925 4.54065 13.8362 4.50627L8.0675 1.17815C8.01438 1.1469 7.9425 1.1469 7.88938 1.17815L2.12375 4.5094C2.0675 4.54065 2.03312 4.60315 2.03312 4.66877V11.3281C2.03312 11.3906 2.0675 11.4531 2.12375 11.4813L3.705 12.3938C4.56437 12.8219 5.08938 12.3188 5.08938 11.8094V5.2344C5.08938 5.14065 5.16437 5.06877 5.25812 5.06877H5.98938C6.08 5.06877 6.15812 5.14065 6.15812 5.2344V11.8125C6.15812 12.9563 5.53313 13.6125 4.44875 13.6125C4.11438 13.6125 3.85188 13.6125 3.12063 13.25L1.60812 12.3781C1.23312 12.1625 1.00187 11.7594 1.00187 11.325V4.66565C1.00187 4.2344 1.23312 3.82815 1.60812 3.61252L7.37375 0.281274C7.73938 0.0750244 8.22375 0.0750244 8.58625 0.281274L14.3581 3.61565C14.7331 3.83127 14.9644 4.2344 14.9644 4.66877V11.3281C14.9644 11.7594 14.7331 12.1625 14.3581 12.3813L8.58625 15.7125C8.40187 15.8188 8.1925 15.875 7.98 15.875ZM12.6394 9.3094C12.6394 8.06252 11.7956 7.73127 10.0237 7.4969C8.23 7.2594 8.04875 7.13752 8.04875 6.71877C8.04875 6.3719 8.20187 5.9094 9.53 5.9094C10.7144 5.9094 11.1519 6.16565 11.3331 6.96565C11.3487 7.04065 11.4175 7.0969 11.4956 7.0969H12.2456C12.2925 7.0969 12.3362 7.07815 12.3675 7.04377C12.3987 7.0094 12.4144 6.96252 12.4112 6.91565C12.2956 5.53752 11.38 4.8969 9.53 4.8969C7.88312 4.8969 6.90188 5.59065 6.90188 6.75627C6.90188 8.01877 7.88 8.36877 9.45812 8.52502C11.3487 8.7094 11.4956 8.98752 11.4956 9.3594C11.4956 10.0031 10.9769 10.2781 9.76125 10.2781C8.23312 10.2781 7.89875 9.89377 7.78625 9.1344C7.77375 9.05315 7.705 8.99377 7.62063 8.99377H6.87375C6.78 8.99377 6.70813 9.06877 6.70813 9.1594C6.70813 10.1313 7.23625 11.2906 9.76437 11.2906C11.5894 11.2875 12.6394 10.5656 12.6394 9.3094V9.3094Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_558_898">
          <rect
            width="14"
            height="16"
            fill={iconColor}
            transform="translate(0.98)"
          />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default GraphQLIcon
