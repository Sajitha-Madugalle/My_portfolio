export default function BackgroundDecor() {
  return (
    <div className="background-decor" aria-hidden="true">
      <div className="background-wave wave-one" />
      <div className="background-wave wave-two" />

      <svg
        className="trace trace-top"
        viewBox="0 0 900 160"
        preserveAspectRatio="none"
      >
        <path d="M0 90 L100 90 L130 65 L160 115 L195 40 L230 125 L265 85 L340 85 L375 55 L410 105 L455 85 L540 85 L575 45 L610 125 L650 85 L735 85 L770 58 L805 112 L840 85 L900 85" />
      </svg>

      <svg
        className="trace trace-bottom"
        viewBox="0 0 900 160"
        preserveAspectRatio="none"
      >
        <path d="M0 80 L110 80 L145 50 L180 110 L215 70 L285 70 L320 35 L360 125 L400 70 L485 70 L525 45 L565 105 L610 70 L700 70 L735 40 L770 112 L810 70 L900 70" />
      </svg>
    </div>
  );
}
