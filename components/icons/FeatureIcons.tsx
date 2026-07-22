import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconShield(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3.75 18.75 6v5.25c0 4.556-2.906 8.284-6.75 9.75-3.844-1.466-6.75-5.194-6.75-9.75V6L12 3.75Z" />
      <path d="m9 12.25 2 2 4-4.25" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M9.75 3 11 7l4 1.25L11 9.5 9.75 13.5 8.5 9.5 4.5 8.25 8.5 7 9.75 3Z" />
      <path d="M17.5 13.5 18.3 16l2.45.8-2.45.8-.8 2.4-.8-2.4-2.45-.8 2.45-.8.8-2.4Z" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 20.25 10.94 19.28C7.14 15.86 4.5 13.44 4.5 10.44 4.5 8 6.5 6 8.94 6c1.36 0 2.68.63 3.56 1.62C13.38 6.63 14.7 6 16.06 6c2.44 0 4.44 2 4.44 4.44 0 3-2.64 5.42-6.44 8.84L12 20.25Z" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3.5c-4.2 1.7-7 5.4-7 9.75a6.25 6.25 0 0 0 12.5 0c0-4.35-2.8-8.05-5.5-9.75Z" />
      <path d="M12 13.25V21" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M3.75 6.75h16.5v10.5H3.75V6.75Z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m14.5 9.5-2 5-3-1.5 2-5 3 1.5Z" />
    </svg>
  );
}
