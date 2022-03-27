import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Svg } from "."
import { IconType } from "../definitions"

const ExpressIcon: React.FC<IconType> = ({ color, size }) => {
  const theme = useContext(ThemeContext)
  const iconColor = color ? color : theme.colors.iconColor

  return (
    <Svg size={size} viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_558_891)">
        <path
          d="M0.357799 12.4165V6.29777H7.99742V5.93987H0.357799V0.357799H8.48043V0H0V12.7743H8.55195V12.4165H0.357906H0.357799ZM15.4402 3.5782L12.2735 7.7469L9.1782 3.57831H8.71302L12.0587 8.01536L8.39087 12.7742H8.8203L12.2733 8.28349L15.7442 12.7742H16.1915L12.5059 8.01514L15.8694 3.57809H15.4401L15.4402 3.5782ZM17.2651 15.9232V10.1981H17.3008C17.5156 11.033 17.939 11.7039 18.5712 12.2109C19.2033 12.7177 20.0084 12.9713 20.9864 12.9713C21.6186 12.9713 22.1792 12.8431 22.6682 12.5866C23.1573 12.3302 23.5657 11.9813 23.8938 11.54C24.2217 11.0986 24.4723 10.5858 24.6453 10.0013C24.8181 9.41691 24.9047 8.80258 24.9047 8.1586C24.9047 7.46674 24.8151 6.82856 24.6362 6.24419C24.4573 5.6597 24.1979 5.15275 23.858 4.72344C23.5181 4.29401 23.1066 3.95995 22.6235 3.72156C22.1405 3.48295 21.5947 3.36365 20.9864 3.36365C20.5212 3.36365 20.0889 3.43227 19.6893 3.5694C19.2898 3.70663 18.935 3.90035 18.6249 4.15087C18.3129 4.40332 18.0414 4.70196 17.8197 5.03646C17.5931 5.37643 17.4201 5.74915 17.3008 6.15474H17.2651V3.5782H16.9073V15.9232H17.2651ZM20.9864 12.6312C19.8653 12.6312 18.9647 12.2466 18.2849 11.4773C17.605 10.708 17.2651 9.60161 17.2651 8.15839C17.2651 7.56199 17.3486 6.99544 17.5156 6.45874C17.6826 5.92204 17.9241 5.45085 18.2401 5.04537C18.5562 4.63979 18.9469 4.31774 19.412 4.07925C19.8772 3.84064 20.402 3.72134 20.9864 3.72134C21.5828 3.72134 22.1047 3.84064 22.5519 4.07925C22.9992 4.31774 23.369 4.64279 23.6612 5.05428C23.9534 5.46577 24.1741 5.93697 24.3232 6.46765C24.4723 6.99844 24.5468 7.56199 24.5468 8.15839C24.5468 8.69519 24.4783 9.22899 24.341 9.75968C24.2039 10.2905 23.9922 10.7676 23.7059 11.1911C23.4197 11.6144 23.053 11.9603 22.6056 12.2287C22.1583 12.4971 21.6186 12.6312 20.9864 12.6312ZM26.8727 12.7743V7.568C26.8727 7.06706 26.9442 6.57793 27.0875 6.10094C27.2305 5.62384 27.4512 5.20333 27.7494 4.83962C28.0476 4.47581 28.4262 4.18953 28.8855 3.98078C29.3446 3.77203 29.8904 3.68558 30.5225 3.72134V3.36354C29.9738 3.35173 29.4938 3.41122 29.0823 3.54244C28.6707 3.67366 28.3159 3.85256 28.0177 4.07925C27.7195 4.30583 27.481 4.57117 27.3021 4.87538C27.1234 5.17911 26.9907 5.50771 26.9085 5.85042H26.8727V3.5782H26.5149V12.7744H26.8727V12.7743ZM30.9698 8.24784H38.663C38.6869 7.61568 38.6243 7.00746 38.4752 6.42298C38.3261 5.8385 38.0875 5.31962 37.7596 4.86647C37.4315 4.41321 37.0081 4.0494 36.4892 3.77503C35.9704 3.50067 35.3531 3.36354 34.6375 3.36354C34.1246 3.36354 33.6236 3.47093 33.1346 3.68569C32.6456 3.90035 32.2162 4.21337 31.8464 4.62486C31.4767 5.03635 31.1785 5.5403 30.9519 6.13681C30.7254 6.7331 30.612 7.41294 30.612 8.17632C30.612 8.85616 30.6895 9.49133 30.8446 10.0817C30.9996 10.6721 31.2381 11.1851 31.5602 11.6204C31.8823 12.0557 32.2968 12.3927 32.8037 12.6312C33.3105 12.8698 33.9218 12.9831 34.6375 12.9712C35.6871 12.9712 36.5698 12.6759 37.2854 12.0856C38.0011 11.4951 38.4245 10.6632 38.5557 9.58969H38.1979C38.0428 10.6036 37.6462 11.364 37.0081 11.8708C36.3699 12.3778 35.5679 12.6312 34.6017 12.6312C33.9457 12.6312 33.391 12.5179 32.9378 12.2913C32.4846 12.0648 32.1148 11.7545 31.8285 11.361C31.5423 10.9673 31.3306 10.5051 31.1935 9.97434C31.0562 9.44365 30.9817 8.86808 30.9698 8.24784ZM38.3052 7.89004H30.9699C31.0055 7.24596 31.1248 6.66749 31.3276 6.15463C31.5304 5.64166 31.7958 5.20333 32.1238 4.83962C32.4518 4.47581 32.8335 4.19855 33.2688 4.00762C33.7042 3.81681 34.1723 3.72134 34.6733 3.72134C35.2697 3.72134 35.7944 3.83173 36.2477 4.0524C36.7009 4.27307 37.0796 4.57428 37.3838 4.95592C37.6879 5.33756 37.9175 5.78191 38.0726 6.28875C38.2276 6.7957 38.3052 7.3295 38.3052 7.89004ZM46.0879 6.29777H46.4457C46.4457 5.27195 46.1475 4.5265 45.5513 4.06132C44.9547 3.59613 44.1437 3.36354 43.118 3.36354C42.5454 3.36354 42.0624 3.43517 41.6687 3.57831C41.2752 3.72134 40.9531 3.90626 40.7026 4.13283C40.4522 4.35941 40.2733 4.60993 40.1659 4.8843C40.0585 5.15866 40.0048 5.4211 40.0048 5.67152C40.0048 6.17246 40.0943 6.57203 40.2733 6.87023C40.4522 7.16843 40.7325 7.40102 41.1141 7.568C41.3765 7.68719 41.6746 7.79458 42.0087 7.89015C42.3427 7.9855 42.7303 8.08687 43.1717 8.19415C43.5652 8.28972 43.9529 8.38507 44.3346 8.48043C44.7162 8.57589 45.0532 8.70411 45.3454 8.86507C45.6377 9.02615 45.8762 9.23189 46.0611 9.48242C46.2459 9.73283 46.3384 10.0609 46.3384 10.4664C46.3384 10.86 46.246 11.194 46.0611 11.4682C45.8778 11.7412 45.6365 11.9703 45.3544 12.1393C45.0681 12.3122 44.749 12.4374 44.3972 12.5149C44.0453 12.5924 43.7024 12.6312 43.3685 12.6312C42.2831 12.6312 41.4511 12.3897 40.8726 11.9067C40.2941 11.4236 40.0049 10.6632 40.0049 9.62545H39.647C39.647 10.7825 39.9602 11.6293 40.5863 12.1661C41.2126 12.7028 42.1399 12.9712 43.3685 12.9712C43.762 12.9712 44.1586 12.9264 44.5583 12.8369C44.9577 12.7475 45.3157 12.6014 45.6317 12.3986C45.945 12.1986 46.2082 11.9293 46.401 11.6115C46.5978 11.2893 46.6963 10.8958 46.6963 10.4306C46.6963 9.98926 46.6097 9.63146 46.4368 9.3571C46.2638 9.08285 46.0373 8.85616 45.7569 8.67726C45.4766 8.49836 45.1606 8.35823 44.8087 8.25686C44.4548 8.15489 44.0999 8.05645 43.7441 7.96156C43.3062 7.84666 42.8679 7.73337 42.4291 7.62169C42.0535 7.52623 41.7046 7.41294 41.3825 7.28172C41.0724 7.1505 40.8249 6.96268 40.64 6.71817C40.4551 6.47366 40.3627 6.12478 40.3627 5.67152C40.3627 5.58808 40.3866 5.43893 40.4343 5.22427C40.4819 5.0095 40.5953 4.79184 40.7742 4.57117C40.9531 4.3506 41.2274 4.15377 41.5972 3.98078C41.9669 3.80789 42.4739 3.72134 43.118 3.72134C43.5593 3.72134 43.9618 3.76913 44.3256 3.86448C44.6894 3.95995 45.0025 4.112 45.2649 4.32075C45.5273 4.5295 45.73 4.79485 45.8732 5.11689C46.0163 5.43903 46.0879 5.83259 46.0879 6.29777ZM54.3715 6.29777H54.7293C54.7293 5.27195 54.4312 4.5265 53.8348 4.06132C53.2384 3.59613 52.4274 3.36354 51.4016 3.36354C50.8291 3.36354 50.346 3.43517 49.9524 3.57831C49.5588 3.72134 49.2367 3.90626 48.9863 4.13283C48.7358 4.35941 48.5569 4.60993 48.4495 4.8843C48.3421 5.15866 48.2885 5.4211 48.2885 5.67152C48.2885 6.17246 48.378 6.57203 48.557 6.87023C48.7358 7.16843 49.0162 7.40102 49.3978 7.568C49.6602 7.68719 49.9583 7.79458 50.2923 7.89015C50.6263 7.9855 51.0139 8.08687 51.4552 8.19415C51.8489 8.28972 52.2366 8.38507 52.6182 8.48043C52.9999 8.57589 53.3368 8.70411 53.6291 8.86507C53.9213 9.02615 54.1599 9.23189 54.3447 9.48242C54.5296 9.73283 54.6221 10.0609 54.6221 10.4664C54.6221 10.86 54.5296 11.194 54.3447 11.4682C54.1614 11.7412 53.9201 11.9703 53.6381 12.1393C53.3517 12.3122 53.0327 12.4374 52.6808 12.5149C52.329 12.5924 51.986 12.6312 51.6521 12.6312C50.5667 12.6312 49.7348 12.3897 49.1563 11.9067C48.5777 11.4236 48.2885 10.6632 48.2885 9.62545H47.9307C47.9307 10.7825 48.2438 11.6293 48.87 12.1661C49.4962 12.7028 50.4235 12.9712 51.6521 12.9712C52.0457 12.9712 52.4423 12.9264 52.8419 12.8369C53.2413 12.7475 53.5993 12.6014 53.9154 12.3986C54.2287 12.1986 54.4919 11.9293 54.6847 11.6115C54.8815 11.2893 54.9799 10.8958 54.9799 10.4306C54.9799 9.98926 54.8934 9.63146 54.7204 9.3571C54.5475 9.08285 54.321 8.85616 54.0406 8.67726C53.7603 8.49836 53.4442 8.35823 53.0924 8.25686C52.7385 8.15489 52.3836 8.05645 52.0278 7.96156C51.5899 7.84666 51.1516 7.73337 50.7128 7.62169C50.3371 7.52623 49.9882 7.41294 49.6661 7.28172C49.356 7.1505 49.1085 6.96268 48.9237 6.71817C48.7388 6.47366 48.6463 6.12478 48.6463 5.67152C48.6463 5.58808 48.6702 5.43893 48.718 5.22427C48.7656 5.0095 48.879 4.79184 49.0578 4.57117C49.2367 4.3506 49.5111 4.15377 49.8808 3.98078C50.2506 3.80789 50.7575 3.72134 51.4017 3.72134C51.843 3.72134 52.2455 3.76913 52.6093 3.86448C52.9731 3.95995 53.2861 4.112 53.5486 4.32075C53.811 4.5295 54.0137 4.79485 54.1569 5.11689C54.3 5.43903 54.3717 5.83259 54.3717 6.29777H54.3715Z"
          fill={iconColor}
        />
      </g>
    </Svg>
  )
}

export default ExpressIcon