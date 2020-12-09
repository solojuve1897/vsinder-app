import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgSwift(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 172 172"
      {...props}
    >
      <G
        strokeMiterlimit={10}
        style={{
          mixBlendMode: "normal",
        }}
      >
        <Path d="M0 172V0h172v172z" />
        <Path
          d="M21.5 35.833c0-7.915 6.418-14.333 14.333-14.333h100.334c7.915 0 14.333 6.418 14.333 14.333v100.334c0 7.912-6.418 14.333-14.333 14.333H35.833c-7.915 0-14.333-6.421-14.333-14.333z"
          fill="#ff6d00"
        />
        <Path
          d="M21.5 35.833v42.882l14.333 14.333S75.798 139.205 107.5 107.5c31.702-31.705-14.265-68.083-14.265-68.083L75.3 21.5H35.833c-7.915 0-14.333 6.414-14.333 14.333z"
          fill="#e64a19"
        />
        <Path
          d="M93.235 39.417C134.189 67 120.94 97.42 120.94 97.42s11.646 13.022 6.937 24.413c0 0-4.801-7.976-12.857-7.976-7.761 0-12.326 7.976-27.95 7.976-34.787 0-51.238-28.785-51.238-28.785 31.344 20.425 52.743 5.96 52.743 5.96C74.454 90.888 43 50.167 43 50.167c26.155 22.055 39.417 28.666 39.417 28.666-6.744-5.525-28.667-32.25-28.667-32.25 15.136 15.187 47.683 37.188 47.683 37.188 8.543-23.45-8.198-44.354-8.198-44.354z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgSwift;
