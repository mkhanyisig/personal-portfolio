import Image from 'next/image';

// Organization mark: the logo image when we have one, otherwise a monogram.
const Logo = ({ src, name, size = 40 }) => (
  <span
    className="flex flex-none items-center justify-center overflow-hidden rounded-full border border-line bg-white"
    style={{ width: size, height: size }}
  >
    {src ? (
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain p-1"
      />
    ) : (
      <span aria-hidden="true" className="font-serif text-lg text-neutral-800">
        {name.charAt(0)}
      </span>
    )}
  </span>
);

export default Logo;
