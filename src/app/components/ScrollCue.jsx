import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Small "more below" arrow pinned to the bottom of a full-height section.
// It links to the next section and bobs gently (only without reduced motion).
const ScrollCue = ({ href, label = 'Next section' }) => (
  <a
    href={href}
    aria-label={label}
    className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-fg"
  >
    <span className="label text-[10px]">More</span>
    <ChevronDownIcon className="nudge h-5 w-5" aria-hidden="true" />
  </a>
);

export default ScrollCue;
