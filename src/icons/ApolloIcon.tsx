import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const ApolloIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_558_907)">
        <path
          d="M8.98 6.30509e-06C4.56133 6.30509e-06 0.98 3.58201 0.98 8.00001C0.98 12.4187 4.56133 16 8.98 16C13.398 16 16.98 12.4187 16.98 8.00001C16.9803 7.24598 16.8742 6.49568 16.6647 5.77134C16.6254 5.67596 16.5508 5.59943 16.4564 5.55774C16.3621 5.51606 16.2553 5.51243 16.1583 5.54762C16.0614 5.5828 15.9817 5.65409 15.9361 5.74659C15.8904 5.83908 15.8823 5.94564 15.9133 6.04401H15.912C16.0887 6.67267 16.18 7.32934 16.18 8.00001C16.1826 8.94592 15.9976 9.88295 15.6356 10.7569C15.2737 11.6308 14.742 12.4243 14.0713 13.0913C13.4043 13.762 12.6108 14.2937 11.7369 14.6557C10.863 15.0176 9.92592 15.2026 8.98 15.2C8.03409 15.2026 7.09705 15.0176 6.22313 14.6556C5.3492 14.2937 4.55574 13.762 3.88867 13.0913C3.21796 12.4243 2.68623 11.6309 2.32428 10.7569C1.96232 9.88299 1.77733 8.94593 1.78 8.00001C1.7774 7.0541 1.96243 6.11706 2.32438 5.24313C2.68633 4.36921 3.21802 3.57575 3.88867 2.90867C4.5557 2.23797 5.34915 1.70624 6.22308 1.34428C7.09702 0.982328 8.03408 0.797332 8.98 0.800006C10.6973 0.800006 12.322 1.39734 13.6187 2.49334C13.5367 2.70135 13.5286 2.93116 13.5955 3.14446C13.6625 3.35776 13.8006 3.54164 13.9868 3.66543C14.173 3.78922 14.396 3.84545 14.6186 3.82472C14.8412 3.804 15.0499 3.70758 15.2101 3.55155C15.3702 3.39552 15.472 3.18931 15.4984 2.96731C15.5249 2.74532 15.4745 2.52096 15.3555 2.33165C15.2366 2.14234 15.0563 1.99954 14.8448 1.92706C14.6333 1.85457 14.4034 1.85679 14.1933 1.93334C12.7441 0.683851 10.8935 -0.00239968 8.98 6.30509e-06V6.30509e-06ZM8.02 3.92001L5.22 11.188H6.97333L7.43133 9.95601H10.0773L9.598 8.59467H7.856L8.98933 5.46734L11.0053 11.1873H12.7593L9.96 3.92001H8.02Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_558_907">
          <rect
            width="16"
            height="16"
            fill={iconColor}
            transform="translate(0.98)"
          />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default ApolloIcon