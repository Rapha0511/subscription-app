import React from "react";
import { Link } from "react-router-dom"; // Si vous utilisez des liens vers d'autres pages

function Header() {
    return (
        <div className="navigation">
            <Link to="/">
                {" "}
                {/* Lien vers la page d'accueil */}
                <svg
                    width="96"
                    height="20"
                    viewBox="0 0 96 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27.7494 6.85227C27.7115 6.43561 27.543 6.11174 27.2437 5.88068C26.9483 5.64583 26.5259 5.52841 25.9767 5.52841C25.613 5.52841 25.31 5.57576 25.0676 5.67045C24.8252 5.76515 24.6433 5.89583 24.5221 6.0625C24.4009 6.22538 24.3384 6.41288 24.3346 6.625C24.3271 6.79924 24.3611 6.95265 24.4369 7.08523C24.5164 7.2178 24.6301 7.33523 24.7778 7.4375C24.9293 7.53598 25.1111 7.62311 25.3233 7.69886C25.5354 7.77462 25.774 7.84091 26.0392 7.89773L27.0392 8.125C27.6149 8.25 28.1225 8.41667 28.5619 8.625C29.0051 8.83333 29.3763 9.08144 29.6755 9.36932C29.9786 9.6572 30.2077 9.98864 30.363 10.3636C30.5183 10.7386 30.5979 11.1591 30.6017 11.625C30.5979 12.3598 30.4123 12.9905 30.0449 13.517C29.6774 14.0436 29.149 14.447 28.4596 14.7273C27.774 15.0076 26.9464 15.1477 25.9767 15.1477C25.0032 15.1477 24.1547 15.0019 23.4312 14.7102C22.7077 14.4186 22.1452 13.9754 21.7437 13.3807C21.3422 12.786 21.1358 12.0341 21.1244 11.125H23.8176C23.8403 11.5 23.9407 11.8125 24.1187 12.0625C24.2968 12.3125 24.5411 12.5019 24.8517 12.6307C25.1661 12.7595 25.5297 12.8239 25.9426 12.8239C26.3214 12.8239 26.6433 12.7727 26.9085 12.6705C27.1774 12.5682 27.3839 12.4261 27.5278 12.2443C27.6718 12.0625 27.7456 11.8542 27.7494 11.6193C27.7456 11.3996 27.6774 11.2121 27.5449 11.0568C27.4123 10.8977 27.2077 10.7614 26.9312 10.6477C26.6585 10.5303 26.31 10.4223 25.8858 10.3239L24.6699 10.0398C23.6623 9.80871 22.8687 9.43561 22.2892 8.92045C21.7096 8.40151 21.4218 7.70076 21.4255 6.81818C21.4218 6.09848 21.6149 5.4678 22.0051 4.92614C22.3952 4.38447 22.935 3.96212 23.6244 3.65909C24.3138 3.35606 25.0998 3.20455 25.9824 3.20455C26.8839 3.20455 27.6661 3.35795 28.3289 3.66477C28.9956 3.9678 29.5127 4.39394 29.8801 4.94318C30.2475 5.49242 30.435 6.12879 30.4426 6.85227H27.7494ZM34.5278 12.7102L34.5392 9.39773H34.9255L37.3801 6.27273H40.5278L36.8801 10.75H36.1471L34.5278 12.7102ZM32.0221 15V3.36364H34.8005V15H32.0221ZM37.4426 15L35.1585 11.375L36.988 9.40341L40.6528 15H37.4426ZM41.5221 15V6.27273H44.221V7.86364H44.3119C44.471 7.28788 44.7305 6.85985 45.0903 6.57955C45.4502 6.29545 45.8687 6.15341 46.346 6.15341C46.4748 6.15341 46.6074 6.16288 46.7437 6.18182C46.8801 6.19697 47.007 6.22159 47.1244 6.25568V8.67045C46.9918 8.625 46.8176 8.58902 46.6017 8.5625C46.3896 8.53598 46.2002 8.52273 46.0335 8.52273C45.7039 8.52273 45.4066 8.59659 45.1414 8.74432C44.8801 8.88826 44.6736 9.09091 44.5221 9.35227C44.3744 9.60985 44.3005 9.91288 44.3005 10.2614V15H41.5221ZM48.2565 15V6.27273H51.0349V15H48.2565ZM49.6486 5.25568C49.2584 5.25568 48.9232 5.12689 48.6429 4.86932C48.3626 4.60795 48.2224 4.29356 48.2224 3.92614C48.2224 3.5625 48.3626 3.25189 48.6429 2.99432C48.9232 2.73295 49.2584 2.60227 49.6486 2.60227C50.0425 2.60227 50.3777 2.73295 50.6542 2.99432C50.9345 3.25189 51.0747 3.5625 51.0747 3.92614C51.0747 4.29356 50.9345 4.60795 50.6542 4.86932C50.3777 5.12689 50.0425 5.25568 49.6486 5.25568ZM52.8034 15V3.36364H55.5818V7.76705H55.6386C55.7522 7.50189 55.9132 7.24621 56.1216 7C56.3337 6.75379 56.6026 6.55303 56.9284 6.39773C57.2579 6.23864 57.6519 6.15909 58.1102 6.15909C58.7163 6.15909 59.2825 6.31818 59.8091 6.63636C60.3394 6.95455 60.7674 7.44508 61.0932 8.10795C61.4189 8.77083 61.5818 9.61553 61.5818 10.642C61.5818 11.6307 61.4246 12.4583 61.1102 13.125C60.7996 13.7917 60.3791 14.2917 59.8488 14.625C59.3223 14.9583 58.7371 15.125 58.0932 15.125C57.6538 15.125 57.2731 15.053 56.9511 14.9091C56.6291 14.7652 56.3583 14.5758 56.1386 14.3409C55.9227 14.1061 55.756 13.8542 55.6386 13.5852H55.5534V15H52.8034ZM55.525 10.6364C55.525 11.1061 55.5875 11.5152 55.7125 11.8636C55.8413 12.2121 56.025 12.483 56.2636 12.6761C56.506 12.8655 56.7958 12.9602 57.1329 12.9602C57.4738 12.9602 57.7636 12.8655 58.0022 12.6761C58.2409 12.483 58.4208 12.2121 58.542 11.8636C58.667 11.5152 58.7295 11.1061 58.7295 10.6364C58.7295 10.1667 58.667 9.75947 58.542 9.41477C58.4208 9.07008 58.2409 8.80303 58.0022 8.61364C57.7674 8.42424 57.4776 8.32955 57.1329 8.32955C56.792 8.32955 56.5022 8.42235 56.2636 8.60795C56.025 8.79356 55.8413 9.05871 55.7125 9.40341C55.5875 9.74811 55.525 10.1591 55.525 10.6364ZM67.1173 15.1648C66.2044 15.1648 65.4165 14.9848 64.7537 14.625C64.0946 14.2614 63.587 13.7443 63.2309 13.0739C62.8787 12.3996 62.7025 11.5985 62.7025 10.6705C62.7025 9.76894 62.8806 8.98106 63.2366 8.30682C63.5927 7.62879 64.0946 7.10227 64.7423 6.72727C65.39 6.34848 66.1533 6.15909 67.0321 6.15909C67.6533 6.15909 68.2215 6.25568 68.7366 6.44886C69.2518 6.64205 69.6968 6.92803 70.0718 7.30682C70.4468 7.68561 70.7385 8.15341 70.9468 8.71023C71.1552 9.26326 71.2593 9.89773 71.2593 10.6136V11.3068H63.6741V9.69318H68.6741C68.6703 9.39773 68.6003 9.13447 68.4639 8.90341C68.3275 8.67235 68.14 8.49242 67.9014 8.36364C67.6665 8.23106 67.3957 8.16477 67.0889 8.16477C66.7783 8.16477 66.4999 8.23485 66.2537 8.375C66.0075 8.51136 65.8124 8.69886 65.6684 8.9375C65.5245 9.17235 65.4487 9.43939 65.4412 9.73864V11.3807C65.4412 11.7367 65.5112 12.0492 65.6514 12.3182C65.7915 12.5833 65.9904 12.7898 66.248 12.9375C66.5056 13.0852 66.8124 13.1591 67.1684 13.1591C67.4146 13.1591 67.6381 13.125 67.8389 13.0568C68.0396 12.9886 68.212 12.8883 68.3559 12.7557C68.4999 12.6231 68.6078 12.4602 68.6798 12.267L71.2309 12.3409C71.1249 12.9129 70.8919 13.411 70.5321 13.8352C70.176 14.2557 69.7082 14.5833 69.1287 14.8182C68.5491 15.0492 67.8787 15.1648 67.1173 15.1648ZM76.7522 15.1648C75.8318 15.1648 75.042 14.9754 74.3829 14.5966C73.7276 14.2178 73.2238 13.6913 72.8716 13.017C72.5193 12.339 72.3432 11.5549 72.3432 10.6648C72.3432 9.77083 72.5193 8.98674 72.8716 8.3125C73.2276 7.63447 73.7333 7.10606 74.3886 6.72727C75.0477 6.34848 75.8337 6.15909 76.7466 6.15909C77.5534 6.15909 78.256 6.30492 78.8545 6.59659C79.4568 6.88826 79.9265 7.30114 80.2636 7.83523C80.6045 8.36553 80.7844 8.98864 80.8034 9.70455H78.2068C78.1538 9.25758 78.0022 8.9072 77.7522 8.65341C77.506 8.39962 77.1841 8.27273 76.7863 8.27273C76.4644 8.27273 76.1822 8.36364 75.9397 8.54545C75.6973 8.72348 75.5079 8.98864 75.3716 9.34091C75.239 9.68939 75.1727 10.1212 75.1727 10.6364C75.1727 11.1515 75.239 11.5871 75.3716 11.9432C75.5079 12.2955 75.6973 12.5625 75.9397 12.7443C76.1822 12.9223 76.4644 13.0114 76.7863 13.0114C77.0439 13.0114 77.2712 12.9564 77.4682 12.8466C77.6689 12.7367 77.8337 12.5758 77.9625 12.3636C78.0913 12.1477 78.1727 11.8864 78.2068 11.5795H80.8034C80.7769 12.2992 80.5969 12.928 80.2636 13.4659C79.9341 14.0038 79.47 14.4223 78.8716 14.7216C78.2769 15.017 77.5704 15.1648 76.7522 15.1648ZM86.2991 15.1648C85.3825 15.1648 84.5946 14.9773 83.9355 14.6023C83.2802 14.2235 82.7745 13.697 82.4184 13.0227C82.0662 12.3447 81.89 11.5587 81.89 10.6648C81.89 9.76705 82.0662 8.98106 82.4184 8.30682C82.7745 7.62879 83.2802 7.10227 83.9355 6.72727C84.5946 6.34848 85.3825 6.15909 86.2991 6.15909C87.2158 6.15909 88.0018 6.34848 88.6571 6.72727C89.3162 7.10227 89.8218 7.62879 90.1741 8.30682C90.5302 8.98106 90.7082 9.76705 90.7082 10.6648C90.7082 11.5587 90.5302 12.3447 90.1741 13.0227C89.8218 13.697 89.3162 14.2235 88.6571 14.6023C88.0018 14.9773 87.2158 15.1648 86.2991 15.1648ZM86.3162 13.0682C86.6495 13.0682 86.9317 12.9659 87.1628 12.7614C87.3938 12.5568 87.57 12.2727 87.6912 11.9091C87.8162 11.5455 87.8787 11.125 87.8787 10.6477C87.8787 10.1629 87.8162 9.73864 87.6912 9.375C87.57 9.01136 87.3938 8.72727 87.1628 8.52273C86.9317 8.31818 86.6495 8.21591 86.3162 8.21591C85.9715 8.21591 85.6798 8.31818 85.4412 8.52273C85.2063 8.72727 85.0264 9.01136 84.9014 9.375C84.7802 9.73864 84.7196 10.1629 84.7196 10.6477C84.7196 11.125 84.7802 11.5455 84.9014 11.9091C85.0264 12.2727 85.2063 12.5568 85.4412 12.7614C85.6798 12.9659 85.9715 13.0682 86.3162 13.0682Z"
                        fill="#1F2024"
                    />
                    <path
                        d="M3.24505 14.5976C0.158106 9.54758 1.95415 3.99259 13.6284 4.21703C13.722 9.54759 11.7762 19.0865 3.24505 14.5976Z"
                        fill="#006FFD"
                    />
                    <path
                        d="M1 16.842L3.24505 14.5976M3.24505 14.5976C0.158106 9.54758 1.95415 3.99259 13.6284 4.21703C13.722 9.54759 11.7762 19.0865 3.24505 14.5976Z"
                        stroke="#006FFD"
                    />
                    <path d="M10.4737 6.31567L3.10527 14.7367" stroke="white" />
                </svg>
            </Link>
            <div className="navigation__user">
                <svg
                    className="navigation__notification"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="solar:bell-bold">
                        <path
                            id="Vector"
                            d="M8.352 20.242C8.78715 20.7922 9.34165 21.2364 9.97361 21.541C10.6056 21.8455 11.2985 22.0025 12 22C12.7015 22.0025 13.3944 21.8455 14.0264 21.541C14.6584 21.2364 15.2129 20.7922 15.648 20.242C13.2271 20.5702 10.7729 20.5702 8.352 20.242ZM18.75 9V9.704C18.75 10.549 18.99 11.375 19.442 12.078L20.55 13.801C21.561 15.375 20.789 17.514 19.03 18.011C14.4338 19.313 9.56625 19.313 4.97 18.011C3.211 17.514 2.439 15.375 3.45 13.801L4.558 12.078C5.01158 11.3694 5.25211 10.5454 5.251 9.704V9C5.251 5.134 8.273 2 12 2C15.727 2 18.75 5.134 18.75 9Z"
                            fill="#B4DBFF"
                        />
                    </g>
                </svg>
                <svg
                    className="navigation__account"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_55_8024)">
                        <rect width="24" height="24" rx="12" fill="#EAF2FF" />
                        <path
                            d="M4.79999 20.4001C4.79999 17.7491 6.94902 15.6001 9.59999 15.6001H14.4C17.051 15.6001 19.2 17.7491 19.2 20.4001V25.2001C19.2 27.8511 17.051 30.0001 14.4 30.0001H9.59999C6.94902 30.0001 4.79999 27.8511 4.79999 25.2001V20.4001Z"
                            fill="#B4DBFF"
                        />
                        <ellipse
                            cx="12.217"
                            cy="9.60005"
                            rx="4.8"
                            ry="4.8"
                            fill="#B4DBFF"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_55_8024">
                            <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Header;
