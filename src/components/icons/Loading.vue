<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;" width="200px"
            height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="84" cy="50" r="10" fill="#334155">
                <animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1"
                    values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                <animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1" values="#334155;#334155;#cbd5e1;#64748b;#334155" begin="0s"></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#334155">
                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s">
                </animate>
            </circle>
            <circle cx="50" cy="50" r="10" fill="#64748b">
                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s">
                </animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s">
            </animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#cbd5e1">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s">
            </animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s">
            </animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#334155">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s">
            </animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s">
            </animate>
        </circle>
        <!-- [ldio] generated by https://loading.io/ -->
    </svg>
</div>
</template>