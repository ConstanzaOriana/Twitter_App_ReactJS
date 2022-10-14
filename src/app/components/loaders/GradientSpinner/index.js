const themes = {
  gradient: ["#fa007e", "#a900dd"],
  white: ["#fff", "#fff"],
};

const GradientSpinner = ({ size = 80, theme, marginRight }) => {
  const [color1, color2] = themes[theme] ?? themes["gradient"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ marginRight }}
    >
      <defs>
        <filter
          id="ldio-tweacg1r8a-filter"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
          <feComponentTransfer result="cutoff">
            <feFuncA type="linear" slope="60" intercept="-40"></feFuncA>
          </feComponentTransfer>
        </filter>
      </defs>
      <g filter="url(#ldio-tweacg1r8a-filter)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="3.0303030303030303s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="0"
              fill="undefined"
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.7666666666666666 0 0.6666666666666666 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="1"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.7333333333333333 0 0.6333333333333333 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="2"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.7 0 0.6 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="3"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.6666666666666666 0 0.5666666666666667 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="4"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.6333333333333333 0 0.5333333333333333 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="5"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.6 0 0.5 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="6"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.5666666666666667 0 0.4666666666666667 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="7"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.5333333333333333 0 0.43333333333333335 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="8"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.5 0 0.4 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="9"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.4666666666666667 0 0.36666666666666664 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="10"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.43333333333333335 0 0.3333333333333333 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="11"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.4 0 0.3 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="12"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.3666666666666667 0 0.26666666666666666 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="13"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.33333333333333337 0 0.23333333333333334 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="14"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.30000000000000004 0 0.2 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="15"
              fill={color1}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.26666666666666666 0 0.16666666666666666 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill={color2}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.23333333333333334 0 0.13333333333333333 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="17"
              fill={color2}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.2 0 0.1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="18"
              fill={color2}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.16666666666666669 0 0.06666666666666667 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <g transform="translate(50 20)">
            <circle
              cx="0"
              cy="0"
              r="19"
              fill={color2}
              transform="scale(0.5)"
            ></circle>
          </g>
          <animateTransform
            attributeName="transform"
            calcMode="spline"
            type="rotate"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.0101010101010102"
            keySplines="0.13333333333333333 0 0.03333333333333333 1"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </g>
    </svg>
  );
};

export default GradientSpinner;
