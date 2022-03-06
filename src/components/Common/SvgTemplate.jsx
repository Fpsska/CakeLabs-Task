import React from "react";

const SvgTemplate = (props) => {
    switch (props.id) {
        case "logo-main":
            return (
                <span className="icon">
                    <svg className="icon__logo-main" width="195" height="37" viewBox="0 0 195 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.0047 6.77832V18.6042H58.5414L53.8017 13.2325V18.6042H49.6943V6.77832H53.1577L57.9032 12.15V6.77832H62.0047Z" fill="#121327" />
                        <path d="M72.0058 15.2874C72.4311 15.0435 72.7805 14.6869 73.0152 14.257C73.272 13.7768 73.3999 13.2384 73.3865 12.6942C73.3999 12.15 73.272 11.6115 73.0152 11.1313C72.782 10.7003 72.4323 10.3433 72.0058 10.1009C71.5714 9.86173 71.0834 9.73628 70.5874 9.73628C70.0913 9.73628 69.6033 9.86173 69.1689 10.1009C68.7424 10.3433 68.3927 10.7003 68.1595 11.1313C67.9007 11.611 67.7707 12.1494 67.7824 12.6942C67.7707 13.2389 67.9007 13.7773 68.1595 14.257C68.3942 14.6869 68.7436 15.0435 69.1689 15.2874C69.6033 15.5266 70.0913 15.652 70.5874 15.652C71.0834 15.652 71.5714 15.5266 72.0058 15.2874ZM66.9644 18.0832C65.9374 17.5962 65.0673 16.8323 64.4525 15.8778C63.8425 14.9287 63.5257 13.8215 63.5416 12.6942C63.5249 11.5648 63.8417 10.4556 64.4525 9.5047C65.0705 8.55302 65.9397 7.7899 66.9644 7.29929C68.1005 6.77687 69.3365 6.50635 70.5874 6.50635C71.8382 6.50635 73.0742 6.77687 74.2103 7.29929C75.2328 7.79313 76.1012 8.55556 76.7222 9.5047C77.333 10.4556 77.6498 11.5648 77.6331 12.6942C77.649 13.8215 77.3322 14.9287 76.7222 15.8778C76.1046 16.8299 75.2353 17.5931 74.2103 18.0832C73.0742 18.6056 71.8382 18.8762 70.5874 18.8762C69.3365 18.8762 68.1005 18.6056 66.9644 18.0832Z" fill="#121327" />
                        <path d="M92.0668 6.77832L86.7818 18.6042H82.6455L77.3663 6.77832H81.8971L84.8732 13.6898L87.9247 6.77832H92.0668Z" fill="#121327" />
                        <path d="M100.264 15.2874C100.69 15.0435 101.039 14.6869 101.274 14.257C101.53 13.7767 101.658 13.2383 101.645 12.6941C101.658 12.1499 101.53 11.6115 101.274 11.1312C101.04 10.7003 100.691 10.3433 100.264 10.1009C99.8299 9.86169 99.3419 9.73624 98.8458 9.73624C98.3497 9.73624 97.8617 9.86169 97.4274 10.1009C97.0009 10.3433 96.6512 10.7003 96.418 11.1312C96.1591 11.611 96.0292 12.1494 96.0409 12.6941C96.0292 13.2388 96.1591 13.7773 96.418 14.257C96.6527 14.6869 97.002 15.0435 97.4274 15.2874C97.8617 15.5265 98.3497 15.652 98.8458 15.652C99.3419 15.652 99.8299 15.5265 100.264 15.2874ZM95.2229 18.0832C94.1962 17.5932 93.325 16.8301 92.7051 15.8778C92.0973 14.9277 91.7808 13.8212 91.7943 12.6941C91.7797 11.5651 92.0963 10.4564 92.7051 9.50466C93.3284 8.5553 94.1987 7.79296 95.2229 7.29925C96.3579 6.77694 97.593 6.50647 98.8429 6.50647C100.093 6.50647 101.328 6.77694 102.463 7.29925C103.498 7.78619 104.377 8.54953 105.004 9.50466C105.615 10.4556 105.931 11.5648 105.915 12.6941C105.931 13.8215 105.614 14.9287 105.004 15.8778C104.387 16.8325 103.515 17.5963 102.486 18.0832C101.351 18.6055 100.116 18.876 98.8661 18.876C97.6162 18.876 96.3811 18.6055 95.2461 18.0832" fill="#121327" />
                        <path d="M109.066 18.5232C108.218 18.3539 107.402 18.0552 106.646 17.6375L108.004 14.7433C108.635 15.0846 109.305 15.349 110 15.5305C110.691 15.7212 111.405 15.8204 112.123 15.8257C112.545 15.8477 112.968 15.7928 113.37 15.6637C113.476 15.6333 113.569 15.5705 113.637 15.4843C113.704 15.398 113.743 15.2927 113.747 15.1832C113.747 14.9343 113.585 14.7491 113.254 14.6044C112.727 14.4317 112.188 14.2963 111.641 14.1992C110.826 14.0478 110.022 13.8428 109.234 13.5856C108.593 13.3696 108.017 12.9976 107.557 12.5031C107.061 11.9437 106.804 11.2119 106.844 10.4656C106.84 9.73679 107.072 9.02615 107.505 8.43962C108.01 7.78351 108.692 7.28535 109.472 7.00408C110.491 6.63008 111.571 6.45137 112.657 6.47733C113.505 6.47628 114.35 6.56358 115.18 6.73781C115.94 6.89867 116.674 7.16359 117.362 7.52504L116.097 10.4193C115.018 9.86662 113.828 9.56576 112.616 9.53943C111.531 9.53943 110.992 9.78834 110.992 10.2804C110.992 10.5177 111.154 10.6913 111.473 10.8129C111.993 10.98 112.524 11.1077 113.063 11.1949C113.879 11.326 114.684 11.5195 115.47 11.7738C116.125 11.9878 116.715 12.3619 117.187 12.862C117.437 13.135 117.629 13.4547 117.754 13.8025C117.878 14.1502 117.932 14.5192 117.913 14.888C117.916 15.6149 117.684 16.3234 117.251 16.9082C116.742 17.5624 116.059 18.06 115.279 18.3437C114.261 18.7226 113.18 18.9033 112.094 18.8763C111.074 18.8709 110.059 18.7525 109.066 18.5232Z" fill="#121327" />
                        <path d="M129.526 15.6V18.6042H119.142V6.77832H129.294V9.78833H123.284V11.1718H128.563V14.0429H123.284V15.6H129.526Z" fill="#121327" />
                        <path d="M131.15 6.77832H135.362V15.5131H141.001V18.6042H131.15V6.77832Z" fill="#121327" />
                        <path d="M146.374 6.77832H142.162V18.6042H146.374V6.77832Z" fill="#121327" />
                        <path d="M158.782 15.6V18.6042H148.403V6.77832H158.55V9.78833H152.54V11.1718H157.819V14.0429H152.54V15.6H158.782Z" fill="#121327" />
                        <path d="M55.6929 32.4155C56.4839 32.4574 57.2607 32.1942 57.8626 31.6804C58.1396 31.415 58.3557 31.0928 58.4959 30.7361C58.6361 30.3793 58.6971 29.9965 58.6748 29.6139C58.6972 29.2305 58.6362 28.8468 58.496 28.4891C58.3558 28.1314 58.1398 27.8082 57.8626 27.5416C57.263 27.0216 56.4867 26.7503 55.6929 26.7833H53.9525V32.4155H55.6929ZM49.6943 23.6749H55.8495C57.1148 23.6484 58.3711 23.8931 59.5334 24.3927C60.5598 24.8253 61.4357 25.5502 62.0515 26.4768C62.6674 27.4034 62.9958 28.4905 62.9958 29.6023C62.9958 30.7141 62.6674 31.8013 62.0515 32.7279C61.4357 33.6544 60.5598 34.3793 59.5334 34.812C58.3702 35.3088 57.1146 35.5535 55.8495 35.5297H49.6943V23.6749Z" fill="#121327" />
                        <path d="M74.8141 32.4966V35.5066H64.4297V23.6749H74.582V26.6849H68.5718V28.0684H73.851V30.9395H68.5718V32.4966H74.8141Z" fill="#121327" />
                        <path d="M89.6009 23.6749L84.3217 35.5066H80.1854L74.9004 23.6749H79.437L82.4131 30.5864L85.4646 23.6749H89.6009Z" fill="#121327" />
                        <path d="M100.398 32.4966V35.5066H90.0137V23.6749H100.166V26.6849H94.15V28.0684H99.435V30.9395H94.15V32.4966H100.398Z" fill="#121327" />
                        <path d="M102.017 23.6749H106.228V32.4098H111.867V35.5066H102.017V23.6749Z" fill="#121327" />
                        <path d="M120.813 32.184C121.24 31.9409 121.592 31.5842 121.828 31.1536C122.076 30.6698 122.205 30.1341 122.205 29.5907C122.205 29.0473 122.076 28.5116 121.828 28.0278C121.595 27.5969 121.245 27.2399 120.818 26.9975C120.384 26.7583 119.896 26.6328 119.4 26.6328C118.904 26.6328 118.416 26.7583 117.982 26.9975C117.556 27.2414 117.207 27.598 116.972 28.0278C116.727 28.5126 116.6 29.0479 116.6 29.5907C116.6 30.1336 116.727 30.6688 116.972 31.1536C117.209 31.5822 117.558 31.9384 117.982 32.184C118.416 32.4231 118.904 32.5486 119.4 32.5486C119.896 32.5486 120.384 32.4231 120.818 32.184H120.813ZM115.777 34.9798C114.751 34.4912 113.881 33.7276 113.265 32.7744C112.671 31.8182 112.357 30.7156 112.357 29.5907C112.357 28.4658 112.671 27.3632 113.265 26.407C113.885 25.4565 114.753 24.6937 115.777 24.2016C116.913 23.6792 118.149 23.4087 119.4 23.4087C120.651 23.4087 121.887 23.6792 123.023 24.2016C124.047 24.6953 124.917 25.4577 125.541 26.407C126.135 27.3632 126.449 28.4658 126.449 29.5907C126.449 30.7156 126.135 31.8182 125.541 32.7744C124.921 33.7267 124.05 34.4898 123.023 34.9798C121.887 35.5022 120.651 35.7727 119.4 35.7727C118.149 35.7727 116.913 35.5022 115.777 34.9798Z" fill="#121327" />
                        <path d="M135.002 29.1566C135.148 29.0316 135.262 28.8744 135.337 28.6976C135.411 28.5209 135.444 28.3292 135.431 28.1378C135.443 27.9457 135.41 27.7535 135.336 27.5759C135.261 27.3983 135.147 27.2401 135.002 27.1133C134.632 26.8438 134.177 26.7145 133.72 26.7486H132.188V29.5213H133.72C134.177 29.5554 134.632 29.4261 135.002 29.1566ZM137.003 24.2133C137.8 24.5304 138.487 25.0713 138.982 25.7704C139.436 26.4756 139.678 27.2964 139.678 28.135C139.678 28.9735 139.436 29.7943 138.982 30.4995C138.489 31.2 137.801 31.7413 137.003 32.0567C136.045 32.4392 135.019 32.6243 133.987 32.6008H132.188V35.495H127.977V23.6749H134.01C135.041 23.6526 136.067 23.8356 137.027 24.2133" fill="#121327" />
                        <path d="M152.203 35.5066L152.168 30.1117L149.453 34.4415H147.597L144.887 30.297V35.5066H141.053V23.6749H144.51L148.577 29.9786L152.539 23.6749H156.003L156.038 35.5066H152.203Z" fill="#121327" />
                        <path d="M168.453 32.4966V35.5066H158.074V23.6749H168.221V26.6849H162.211V28.0684H167.49V30.9395H162.211V32.4966H168.453Z" fill="#121327" />
                        <path d="M182.383 23.6749V35.5066H178.925L174.18 30.1291V35.5066H170.078V23.6749H173.536L178.281 29.0524V23.6749H182.383Z" fill="#121327" />
                        <path d="M187.133 26.766H183.473V23.6749H195V26.766H191.345V35.5066H187.133V26.766Z" fill="#121327" />
                        <path d="M28.27 3.90723V21.9268L26.3266 21.7358V3.27049L13.0009 0V36.2764C15.188 36.2301 17.4737 36.2012 19.8349 36.2012C22.08 36.2012 24.2439 36.2301 26.3266 36.2707V22.3783L28.27 22.5693V36.3112C33.1431 36.4443 37.4129 36.6874 40.6268 37V6.82463L28.27 3.90723Z" fill="#5E6076" />
                        <path d="M7.19944 2.89424V21.7589L5.256 22.0599V10.8708H5.22119V3.8725L0 6.56993V36.9132C1.55475 36.7743 3.30675 36.6585 5.22119 36.5543V33.5095V22.6793L7.16464 22.3783V36.4675C8.99205 36.3922 10.9181 36.3285 12.966 36.2822V0L7.19944 2.89424Z" fill="#121327" />
                    </svg>
                </span>
            );
        case "heart":
            return (
                <span className="icon">
                    <svg className="icon__heart" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6214 0C12.0554 0 10.5524 0.750409 9.57141 1.93624C8.59041 0.750409 7.08741 0 5.52141 0C2.74941 0 0.571411 2.24196 0.571411 5.09537C0.571411 8.59727 3.63141 11.4507 8.26641 15.7864L9.57141 17L10.8764 15.7771C15.5114 11.4507 18.5714 8.59727 18.5714 5.09537C18.5714 2.24196 16.3934 0 13.6214 0ZM9.66141 14.406L9.57141 14.4986L9.48141 14.406C5.19741 10.4131 2.37141 7.77275 2.37141 5.09537C2.37141 3.24251 3.72141 1.85286 5.52141 1.85286C6.90741 1.85286 8.25741 2.77003 8.73441 4.03924H10.4174C10.8854 2.77003 12.2354 1.85286 13.6214 1.85286C15.4214 1.85286 16.7714 3.24251 16.7714 5.09537C16.7714 7.77275 13.9454 10.4131 9.66141 14.406Z" fill="" />
                    </svg>
                </span>
            );
        case "search":
            return (
                <span className="icon">
                    <svg className="icon__search" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4354 10.6918H11.6676L11.3954 10.4294C12.348 9.32133 12.9214 7.88279 12.9214 6.3179C12.9214 2.82847 10.093 0 6.60354 0C3.11412 0 0.285645 2.82847 0.285645 6.3179C0.285645 9.80732 3.11412 12.6358 6.60354 12.6358C8.16844 12.6358 9.60697 12.0623 10.715 11.1098L10.9775 11.3819V12.1498L15.8374 17L17.2856 15.5517L12.4354 10.6918ZM6.60354 10.6918C4.1833 10.6918 2.22961 8.73814 2.22961 6.3179C2.22961 3.89766 4.1833 1.94397 6.60354 1.94397C9.02378 1.94397 10.9775 3.89766 10.9775 6.3179C10.9775 8.73814 9.02378 10.6918 6.60354 10.6918Z" fill="" />
                    </svg>
                </span>
            );
        case "burger":
            return (
                <span className="icon">
                    <svg className="icon__burger" width="23" height="11" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0C0.723858 0 0.5 0.223858 0.5 0.5C0.5 0.776142 0.723858 1 1 1V0ZM22 1C22.2761 1 22.5 0.776142 22.5 0.5C22.5 0.223858 22.2761 0 22 0V1ZM1 1H22V0H1V1Z" fill="#DA552F" />
                        <path d="M1 5C0.723858 5 0.5 5.22386 0.5 5.5C0.5 5.77614 0.723858 6 1 6V5ZM22 6C22.2761 6 22.5 5.77614 22.5 5.5C22.5 5.22386 22.2761 5 22 5V6ZM1 6H22V5H1V6Z" fill="#DA552F" />
                        <path d="M1 10C0.723858 10 0.5 10.2239 0.5 10.5C0.5 10.7761 0.723858 11 1 11V10ZM22 11C22.2761 11 22.5 10.7761 22.5 10.5C22.5 10.2239 22.2761 10 22 10V11ZM1 11H22V10H1V11Z" fill="#DA552F" />
                    </svg>
                </span>
            );
        case "walk":
            return (
                <span className="icon">
                    <svg className="icon__walk" width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.90344 2.228C5.7987 3.07104 5.03002 3.66961 4.18651 3.56493C3.34292 3.46024 2.74403 2.69197 2.84876 1.84891C2.9535 1.00578 3.72218 0.407204 4.56577 0.511882C5.40926 0.616567 6.00815 1.38484 5.90342 2.22797" fill="#B4B4B4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.25651 3.81441L5.06442 4.05536C5.42603 4.05536 5.66703 4.41678 5.66703 4.77812C5.48622 6.22365 5.54649 7.12712 6.7518 8.0305C7.35441 8.51231 6.69152 9.41578 6.08891 8.93397C5.7273 8.69302 5.4863 8.39191 5.24523 8.09073C5.18496 8.45215 5.12469 8.81349 4.70288 8.93397C5.90818 10.259 6.75187 11.9455 6.99287 13.6923C7.11341 14.5957 5.66711 14.7764 5.54657 13.873C5.42603 12.6081 4.88369 11.4035 4.10027 10.3795C3.55793 11.7648 2.8347 13.0298 1.87055 14.2343C1.26794 14.957 0.183179 14.0536 0.785791 13.3308C1.81028 12.0659 2.47317 10.6806 3.01551 9.23503C2.6539 8.87361 1.99102 8.45203 2.05128 7.97014L2.35263 5.5609C1.62948 6.16319 1.2076 6.88596 1.14733 7.9099C1.08706 8.6929 -0.0579714 8.63267 0.00229735 7.84966C0.122837 5.92225 1.2076 4.71756 2.83473 3.8744C2.95527 3.81416 3.07581 3.75393 3.25661 3.81416L3.25651 3.81441Z" fill="#B4B4B4" />
                    </svg>
                </span>
            );
        case "car":
            return (
                <span className="icon">
                    <svg className="icon__car" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.31189 0.633895C10.954 1.01935 12.6548 1.91881 14.414 3.46059C15.5284 3.71759 16.5253 4.16732 17.4637 4.74551C18.0502 6.3517 18.1675 7.5722 17.757 8.53613H16.8187C16.9359 8.34341 16.9946 8.0864 16.9946 7.8294C16.9946 6.73721 16.1736 5.83775 15.1766 5.83775C14.1796 5.83775 13.3586 6.73721 13.3586 7.8294C13.3586 8.0864 13.3586 8.3434 13.4758 8.53613H4.26843C4.3271 8.34341 4.38568 8.0864 4.38568 7.8294C4.38568 6.73721 3.56463 5.83775 2.56766 5.83775C1.57068 5.83775 0.749638 6.73721 0.749638 7.8294C0.749638 8.0864 0.808311 8.3434 0.866886 8.53613H0.456364C-0.0714188 7.70094 -0.130087 6.80151 0.221766 5.77348C0.339014 3.71756 0.984144 2.23983 2.21569 1.34043V0.890698C4.7375 0.50524 7.08328 0.376697 9.31169 0.633694L9.31189 0.633895ZM2.80231 1.66178C2.91956 2.36851 3.09557 2.88251 3.33009 3.07524C6.73161 3.84625 10.2502 3.9747 13.769 3.65343C10.5434 1.21205 6.90754 0.505239 2.80231 1.66178ZM15.1767 4.2317C16.7601 4.48871 17.5225 5.19543 17.4639 6.22335C16.9361 5.96635 16.2323 5.32389 15.1767 4.2317Z" fill="#B4B4B4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.56748 6.15908C1.68777 6.15908 1.04265 6.86581 1.04265 7.82954C1.04265 8.729 1.68777 9.5 2.56748 9.5C3.38853 9.5 4.09232 8.729 4.09232 7.82954C4.09232 6.86581 3.38853 6.15908 2.56748 6.15908ZM2.56748 6.73727C2.0397 6.73727 1.57051 7.25127 1.57051 7.82945C1.57051 8.40764 2.0397 8.85734 2.56748 8.85734C3.09527 8.85734 3.50576 8.40761 3.50576 7.82945C3.50576 7.2513 3.09524 6.73727 2.56748 6.73727Z" fill="#B4B4B4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.1764 6.15908C14.2967 6.15908 13.6516 6.86581 13.6516 7.82954C13.6516 8.729 14.2967 9.5 15.1764 9.5C15.9974 9.5 16.7012 8.729 16.7012 7.82954C16.7012 6.86581 15.9974 6.15908 15.1764 6.15908ZM15.1764 6.73727C14.6486 6.73727 14.1794 7.25127 14.1794 7.82945C14.1794 8.40764 14.6486 8.85734 15.1764 8.85734C15.7042 8.85734 16.1147 8.40761 16.1147 7.82945C16.1147 7.2513 15.7041 6.73727 15.1764 6.73727Z" fill="#B4B4B4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.20076 0.890867H6.73157V4.1033H7.55262L7.20076 0.890867Z" fill="#B4B4B4" />
                    </svg>
                </span>
            );
        case "arrow-drop":
            return (
                <span className="icon">
                    <svg className="icon__arrow-drop" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0.5L5 4.5L1 0.5" stroke="#DA552F" />
                    </svg>
                </span>
            );
        default:
            return <svg className="empty"></svg>;
    }
};

export default SvgTemplate;