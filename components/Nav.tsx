export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="wrap nav__in">
        <a className="brand" href="#top">
          Verdict<span>.</span>
        </a>
        <div className="nav__links">
          <a href="#how">How it works</a>
          <a href="#mechanics">Ways to decide</a>
          <a href="#teams">For teams</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav__cta">
          <a className="btn btn--ghost btn--sm" href="#how">
            See how
          </a>
          <a className="btn btn--sm" href="#get">
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}
