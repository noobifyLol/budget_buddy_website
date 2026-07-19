export default function PiggyBankIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="255" cy="90" r="72" stroke="currentColor" strokeWidth="10" />
      <path
        d="M240 55c-10 0-18 8-18 16 0 9 7 13 18 16 11 3 18 7 18 16 0 8-8 16-18 16s-16-6-18-13"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <line x1="255" y1="45" x2="255" y2="58" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <line x1="255" y1="122" x2="255" y2="135" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />

      <path
        d="M55 250c0-24 14-45 35-58-3-14 2-30 14-38 9-6 19-4 24 4 12-4 25-6 39-6 62 0 118 34 140 84 18 4 33 19 33 38 0 21-17 38-38 38h-8c-6 16-19 28-35 34v20c0 8-6 14-14 14h-16c-8 0-14-6-14-14v-12h-90v12c0 8-6 14-14 14H95c-8 0-14-6-14-14v-24c-16-10-26-27-26-46Z"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
      />

      <circle cx="255" cy="230" r="9" fill="currentColor" />
      <path d="M105 205c-8 6-14 15-14 26" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />

      <path
        d="M60 236c-10 3-18 12-18 24s10 22 22 22c6 0 11-2 15-5"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path d="M150 328v26M230 328v26" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
      <path d="M290 300c-4 12-13 22-24 28" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M290 300v22" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}
