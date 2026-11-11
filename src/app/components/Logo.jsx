import Image from 'next/image';

// Organization mark in black and white: the logo when we have one,
// otherwise a monogram.
const Logo = ({ src, name, size = 32 }) => (
  <span
    className="flex flex-none items-center justify-center overflow-hidden rounded-full bg-white"
    style={{ width: size, height: size }}
  >
    {src ? (
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain p-1 grayscale"
      />
    ) : (
      <span aria-hidden="true" className="font-serif text-base text-black">
        {name.charAt(0)}
      </span>
    )}
  </span>
);

export default Logo;
