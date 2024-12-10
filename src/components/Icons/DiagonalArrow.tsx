import { IconType } from "./IconsType";

export const DiagonalArrowIcon = ({ className }: IconType) => (
     <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="1.5"
          stroke="currentColor"
          className={className}
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
     </svg>
);
