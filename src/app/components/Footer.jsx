const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex items-center justify-between py-8">
      <p className="label">© {new Date().getFullYear()} Mkhanyisi Gamedze</p>
      <a href="#top" className="label transition-colors hover:text-accent">
        <span className="text-accent" aria-hidden="true">
          ✦{' '}
        </span>
        Back to top
      </a>
    </div>
  </footer>
);

export default Footer;
