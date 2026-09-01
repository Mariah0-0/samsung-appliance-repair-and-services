import { IconProps } from "@/types/icon";

export default function Facebook({
  color = "currentColor",
  height = 24,
}: IconProps) {
  const aspectRatio = 13 / 28;
  const width = height * aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_63_475)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.65078 14.102V25.9285C2.65078 26.1324 2.75273 26.2344 2.95664 26.2344H7.64648C7.85039 26.2344 7.95234 26.1324 7.95234 25.9285V13.898H11.4188C11.6227 13.898 11.7246 13.7961 11.7246 13.5922L12.0305 9.92188C12.0305 9.71797 11.9285 9.61602 11.7246 9.61602H7.95234V7.06719C7.95234 6.45547 8.46211 5.9457 9.17578 5.9457H11.8266C12.1324 5.9457 12.2344 5.84375 12.2344 5.63984V2.07148C12.2344 1.86758 12.1324 1.76562 11.9285 1.76562H7.44258C4.7918 1.76562 2.65078 3.70273 2.65078 6.14961V9.61602H0.30586C0.101953 9.61602 0 9.71797 0 9.92188V13.5922C0 13.7961 0.101953 13.898 0.30586 13.898H2.65078V14.102Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_63_475">
          <rect width="12.2344" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
