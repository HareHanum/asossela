import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

interface Props {
    style: StyleProp<ViewStyle>;
    size: number;
    color: string;
    opacity: number;
}

const Support: React.FC<Props> = ({ style, size, color, opacity }) => (
    <Svg
        style={style}
        height={size}
        width={size}
        viewBox="0 0 508 508"
        fill={color}
        opacity={opacity}
    >
        <Circle cx={254} cy={254} r={254} fill="#000" />
        <Path
            d="M303.7 303.3c30.5-17.3 51-50.1 51-87.6 0-55.7-45.1-100.8-100.8-100.8S153.2 160 153.2 215.6c0 37.6 20.6 70.3 51 87.6C141 319.3 89.7 365 66 424.8c46.5 51.1 113.5 83.2 188 83.2s141.5-32.1 188-83.2c-23.7-59.8-75-105.5-138.3-121.5z"
            fill="#fff"
        />
        <Path
            d="M401.6 182.3h-15.8C370.9 123.4 317.5 79.6 254 79.6s-116.9 43.7-131.8 102.7h-15.8c-5.4 0-9.8 4.4-9.8 9.8V240c0 5.4 4.4 9.8 9.8 9.8h20c6.1 0 10.8-5.5 9.7-11.4-2-10.4-2.7-21.3-1.8-32.5 4.8-59.3 53.6-106.9 113.1-110.1 69.2-3.8 126.8 51.5 126.8 119.9 0 7.8-.8 15.3-2.2 22.7-1.2 6 3.6 11.5 9.6 11.5h1.8c-4.2 13-14.9 37.2-38.3 50.2-19.6 10.9-44.3 11.9-73.4 2.8-1.5-6.7-8.9-14.6-16.5-18.3-9.8-4.9-15.9-.8-19.4 6.2s-3 14.3 6.7 19.2c8.6 4.3 21.6 5.2 27 .5 13.9 4.3 26.9 6.5 39 6.5 15 0 28.5-3.3 40.4-10 27.5-15.3 38.8-43.7 42.8-57.2h9.9c5.4 0 9.8-4.4 9.8-9.8v-47.9c0-5.4-4.4-9.8-9.8-9.8z"
            fill="#fff"
        />
    </Svg>
);

export default Support;
