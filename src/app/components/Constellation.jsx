// A small decorative constellation for the hero. Purely ornamental.
const STARS = [
  [12, 30, 2.2],
  [58, 14, 1.6],
  [96, 42, 2.6],
  [140, 26, 1.4],
  [176, 70, 2],
  [130, 104, 1.6],
  [84, 92, 1.4],
];
const LINES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 2],
];

const Constellation = ({ className = '' }) => (
  <svg
    viewBox="0 0 190 120"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <g stroke="var(--accent)" strokeWidth="0.6" opacity="0.45">
      {LINES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={STARS[a][0]}
          y1={STARS[a][1]}
          x2={STARS[b][0]}
          y2={STARS[b][1]}
        />
      ))}
    </g>
    <g fill="var(--accent)">
      {STARS.map(([x, y, r]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
      ))}
    </g>
  </svg>
);

export default Constellation;
