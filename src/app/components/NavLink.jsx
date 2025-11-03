import Link from 'next/link';

const NavLink = ({ href, title, colorOptions }) => {
  return (
    <Link
      href={href}
      className={`block py-3 pl-3 pr-4  sm:text-xl rounded md:p-0 ${colorOptions} `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
