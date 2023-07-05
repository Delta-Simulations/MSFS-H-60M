import React, { useEffect, useState } from 'react';
import { useSimVar } from '../../Hooks/simVars';
import "../style.scss";

export const VerticalSpeed = () => {
    var [vs_raw] = useSimVar('VERTICAL SPEED', 'feet per minute');
    vs_raw= Math.floor(vs_raw)
    let needledir: number = vs_raw;
    let needleVertDir: number = 1;

    let dirVS: number = 0;
    if ( 0<vs_raw) {
        dirVS = 180
        needledir = -60
        needleVertDir = -1
    } else{
        dirVS = 0
        needledir = -120
        needleVertDir = 1
    }
    vs_raw = Math.abs(vs_raw)
    let VSBarHeight: number = vs_raw
    let indicator: number = 0;

    if ( vs_raw<=1000) {
        indicator = 23

    } else if((1000<vs_raw)&&(vs_raw<=2000)){
        indicator = 28

    } else if((2000<vs_raw)&&(vs_raw<=3000)){
        indicator = 31

    } else if((3000<vs_raw)&&(vs_raw<=4000)){
        indicator = 35
    } else{
        indicator = 25
    }

    if ( VSBarHeight>=4000) {
        VSBarHeight = 110
    } else if(VSBarHeight<=-4000){
        indicator = 110
   
    } else{ VSBarHeight = 0
        VSBarHeight = vs_raw/indicator
    }

    let vsdisparrow: number = 0;

    if ( needleVertDir>0) {
        vsdisparrow = 180
    } else{ 
        vsdisparrow = 0
    }
    return (
        <g>
            <text x={1010} y={65}  fontSize={25} className='text'>{vs_raw}</text>
            <text x={986} y={225}  fontSize={20} className='text'>0</text>
            <text x={986} y={165}  fontSize={20} className='text'>1</text>
            <text x={986} y={135}  fontSize={20} className='text'>2</text>
            <text x={986} y={115}  fontSize={20} className='text'>3</text>
            <text x={986} y={90}  fontSize={20} className='text'>4</text>

            <text x={986} y={280}  fontSize={20} className='text'>1</text>
            <text x={986} y={310}  fontSize={20} className='text'>2</text>
            <text x={986} y={335}  fontSize={20} className='text'>3</text>
            <text x={986} y={355}  fontSize={20} className='text'>4</text>
            

            <g transform={`translate(928, 42)scale(0.7)`} >
            <g transform={`rotate(${vsdisparrow},12, 19)`} >
            <path d="M13.0607 0.939339C12.4749 0.353553 11.5251 0.353553 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 39L13.5 2L10.5 2L10.5 39L13.5 39Z" fill="white"/>
            </g>
            </g>

            <g transform={`translate(22, 8)rotate(${dirVS},993, 208)`} >
            <rect x={988} y={208} width={10} height={VSBarHeight} className='VSBar'/>
            </g>
            {/* NEEDLE */}
            <g transform={`translate(0, ${VSBarHeight*needleVertDir})`} >
                <g transform={`translate(900, ${needledir*needleVertDir/5+92})scale(0.9,0.6)`} >
                <g transform={`rotate(${needledir}, 178, 217)`}>
                    <polygon points='174,217 182,217 182,150 179,140 179,125 178,120 177,125 177,140 174,150'fill='white'/>
                </g>
                </g>
            </g>
            <g transform={`translate(985, 85.3)scale(0.75)`} >
                <path d="M30 23.133L3.30233 0.363914C2.672 -0.173657 1.72523 -0.098466 1.18766 0.531859C0.650092 1.16218 0.725284 2.10895 1.35561 2.64652L30 27.0758V23.133Z" fill="white"/>
                <path d="M30 35.6014L14.9237 23.8181C14.271 23.308 13.3283 23.4236 12.8181 24.0763C12.308 24.729 12.4236 25.6717 13.0763 26.1818L30 39.409V35.6014Z" fill="white"/>
                <path d="M30 47.683L4.87071 29.7783C4.19603 29.2976 3.25939 29.4549 2.77867 30.1296C2.29795 30.8043 2.4552 31.7409 3.12989 32.2216L30 51.3666V47.683Z" fill="white"/>
                <path d="M30 59.531L14.8128 49.7393C14.1165 49.2904 13.1882 49.4909 12.7393 50.1872C12.2904 50.8834 12.4909 51.8118 13.1872 52.2607L30 63.1005V59.531Z" fill="white"/>
                <path d="M30 69.5351L4.76012 54.7067C4.04585 54.287 3.12662 54.5259 2.70698 55.2402C2.28734 55.9544 2.5262 56.8737 3.24048 57.2933L30 73.0145V69.5351Z" fill="white"/>
                <path d="M30 89.4192L14.6421 82.1444C13.8934 81.7897 12.999 82.1092 12.6444 82.8578C12.2897 83.6065 12.6092 84.5009 13.3578 84.8556L30 92.7387V89.4192Z" fill="white"/>
                <path d="M30 107.52L4.52082 98.0932C3.74387 97.8057 2.88098 98.2025 2.59351 98.9795C2.30604 99.7564 2.70284 100.619 3.47979 100.907L30 110.719V107.52Z" fill="white"/>
                <path d="M30 140.381L14.268 137.524C13.4529 137.376 12.6721 137.917 12.5241 138.732C12.3761 139.547 12.9169 140.328 13.732 140.476L30 143.43V140.381Z" fill="white"/>
                <path d="M30 172H4.0003C3.17187 172 2.5003 172.672 2.50029 173.5C2.5003 174.328 3.17187 175 4.0003 175H30V172Z" fill="white"/>
                <path d="M30 323.867L3.30231 346.636C2.67198 347.174 1.72522 347.098 1.18764 346.468C0.650073 345.838 0.725264 344.891 1.35559 344.354L30 319.924V323.867Z" fill="white"/>
                <path d="M30 311.399L14.9237 323.182C14.271 323.692 13.3283 323.576 12.8181 322.924C12.308 322.271 12.4235 321.328 13.0763 320.818L30 307.591V311.399Z" fill="white"/>
                <path d="M30 299.317L4.87069 317.222C4.19601 317.702 3.25937 317.545 2.77865 316.87C2.29794 316.196 2.45518 315.259 3.12987 314.778L30 295.633V299.317Z" fill="white"/>
                <path d="M30 287.469L14.8128 297.261C14.1165 297.71 13.1882 297.509 12.7393 296.813C12.2904 296.117 12.4909 295.188 13.1871 294.739L30 283.9V287.469Z" fill="white"/>
                <path d="M30 277.465L4.7601 292.293C4.04583 292.713 3.1266 292.474 2.70697 291.76C2.28732 291.046 2.52618 290.126 3.24046 289.707L30 273.986V277.465Z" fill="white"/>
                <path d="M30 257.581L14.6421 264.856C13.8934 265.21 12.999 264.891 12.6444 264.142C12.2897 263.393 12.6091 262.499 13.3578 262.144L30 254.261V257.581Z" fill="white"/>
                <path d="M30 239.48L4.5208 248.907C3.74385 249.194 2.88096 248.798 2.59349 248.021C2.30602 247.244 2.70282 246.381 3.47977 246.093L30 236.281V239.48Z" fill="white"/>
                <path d="M30 206.619L14.2679 209.476C13.4528 209.624 12.6721 209.083 12.5241 208.268C12.3761 207.453 12.9169 206.672 13.732 206.524L30 203.57V206.619Z" fill="white"/>
                <path d="M30 175H4.0003C3.17187 175 2.5003 174.328 2.50029 173.5C2.5003 172.672 3.17187 172 4.0003 172H30V175Z" fill="white"/>
            </g>
            <polygon points='1169,305 1169,510 1199,530 1199,530 1199,719 1165,740 1165,942 1220,942 1275,800 1275,453 1223,305' fill="#242329"/>
        </g>
    )
}
