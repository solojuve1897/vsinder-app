import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgC(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 226 226"
      {...props}
    >
      <G
        strokeMiterlimit={10}
        style={{
          mixBlendMode: "normal",
        }}
      >
        <Path d="M0 226V0h226v226z" />
        <G fillRule="evenodd">
          <Path
            d="M107.835 15.472a10.578 10.578 0 0110.325 0c15.797 8.865 63.332 35.552 79.133 44.418 3.197 1.79 5.165 5.104 5.165 8.692v88.832c0 3.587-1.968 6.902-5.165 8.696-15.796 8.866-63.331 35.553-79.133 44.418a10.578 10.578 0 01-10.325 0c-15.796-8.865-63.332-35.552-79.133-44.418-3.192-1.794-5.16-5.104-5.16-8.692V68.586c0-3.587 1.968-6.902 5.165-8.696 15.791-8.866 63.336-35.553 79.128-44.418z"
            fill="#283593"
          />
          <Path
            d="M24.973 161.986c-1.252-1.677-1.431-3.268-1.431-5.41V68.252c0-3.569 1.963-6.865 5.15-8.644 15.74-8.814 63.116-35.346 78.856-44.165 3.187-1.784 7.505-1.746 10.692.038 15.74 8.814 62.956 35.12 78.695 43.933a9.853 9.853 0 013.108 2.712z"
            fill="#5c6bc0"
          />
          <Path
            d="M113 47.083c36.381 0 65.917 29.536 65.917 65.917S149.38 178.917 113 178.917 47.083 149.38 47.083 113 76.62 47.083 113 47.083zm0 32.959c18.188 0 32.958 14.765 32.958 32.958 0 18.188-14.77 32.958-32.958 32.958S80.042 131.188 80.042 113c0-18.193 14.765-32.958 32.958-32.958z"
            fill="#fff"
          />
          <Path
            d="M200.034 62.174c2.429 2.274 2.382 5.701 2.382 8.4 0 17.867-.15 68.69.042 86.557.02 1.865-.598 3.828-1.52 5.307L111.084 113z"
            fill="#3949ab"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgC;
