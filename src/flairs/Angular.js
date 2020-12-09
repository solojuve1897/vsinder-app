import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAngular(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <Path
        fill="#77B255"
        d="M31.096 8.933c3.535-2.122 4.408-8.32 3.701-7.613.707-.707-5.657 0-7.778 3.536 0-1.414-1.414-7.071-3.535-2.121-2.122 4.95-1.415 5.657-1.415 7.071 0 1.414 2.829 1.414 2.829 1.414s-.125 2.704 1.29 2.704c1.414 0 1.997.583 6.946-1.538 4.95-2.122-.624-3.453-2.038-3.453z"
      />
      <Path
        fill="#F4900C"
        d="M22.422 23.594C14.807 31.209 2.27 36.675.502 34.907c-1.768-1.768 3.699-14.305 11.313-21.92 7.615-7.615 11.53-7.562 14.85-4.243 3.319 3.32 3.372 7.235-4.243 14.85z"
      />
      <Path
        d="M21.875 14.56c-.972-.972-2.77-2.785-4.692-6.106a25.419 25.419 0 00-2.409 1.808c2.803 3.613 8.121 5.317 7.101 4.298zm-7.485 8.072c-1.041-1.041-3.03-3.05-5.105-6.846a48.86 48.86 0 00-1.98 2.57c2.807 3.597 8.101 5.292 7.085 4.276zm9.301-.351c-3.581-2.008-5.49-3.91-6.502-4.921-1.02-1.022.692 4.315 4.317 7.114a94.795 94.795 0 002.185-2.193zm-12.183 9.324a54.359 54.359 0 002.715-1.597c-3.273-1.905-5.069-3.683-6.034-4.648-.922-.923.386 3.347 3.319 6.245z"
        fill="#D67503"
      />
    </Svg>
  );
}

export default SvgAngular;
