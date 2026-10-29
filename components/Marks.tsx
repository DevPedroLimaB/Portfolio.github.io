// Qavah IO mark and the cord, shared by the whole site.

export function QMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox="60 60 280 280"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <g fill="none" strokeLinecap="butt" strokeLinejoin="round">
        <path d="M247.63,321.93 L275.66,199.87" stroke="currentColor" strokeWidth="27" />
        <path d="M219.4,271.18 L321.93,247.63" stroke="var(--mark-halo)" strokeWidth="40.5" />
        <path
          d="M275.53,200.45 A100,100 0 1 0 200.45,275.53 L321.93,247.63"
          stroke="currentColor"
          strokeWidth="27"
        />
      </g>
    </svg>
  );
}

// The cord: a straight run that ends in the same loop as the LinkedIn banner.
export function Cord() {
  return (
    <div className="cord" aria-hidden="true">
      <span className="cord-run" />
      <svg className="cord-loop" viewBox="0 0 140 120">
        <path
          pathLength={1}
          d="M0,90 L40,90 A30,30 0 1 0 24.1,85.4 C39.1,112.4 73,90 100,90 L140,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      </svg>
      <span className="cord-tail" />
    </div>
  );
}
