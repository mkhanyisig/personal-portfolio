import Image from 'next/image';

// Organization mark: the logo when we have one, otherwise a monogram.
// By default it's black and white with a little padding (matches the noir
// theme). `fill` makes the image cover the whole circle; `color` keeps the
// original colours.
const Logo = ({ src, name, size = 32, fill = false, color = false }) => (
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
        className={`h-full w-full ${fill ? 'object-cover' : 'object-contain p-1'} ${color ? '' : 'grayscale'}`}
      />
    ) : (
      <span aria-hidden="true" className="font-serif text-base text-black">
        {name.charAt(0)}
      </span>
    )}
  </span>
);

export default Logo;
