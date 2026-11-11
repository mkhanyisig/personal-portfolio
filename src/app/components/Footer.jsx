import { GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Mkhanyisi Gamedze</p>
      <ul className="flex gap-6">
        <li>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#top" className="hover:text-fg">
            Back to top ↑
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
