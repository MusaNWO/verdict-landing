export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__in">
          <div className="footer__brand">
            <a className="brand" href="#top">
              Verdict<span>.</span>
            </a>
            <p>
              The group-chat debate ender. Question in, decision out — in about
              30 seconds.
            </p>
          </div>
          <div className="footer__cols">
            <div className="fcol">
              <h5>Product</h5>
              <a href="#how">How it works</a>
              <a href="#mechanics">Ways to decide</a>
              <a href="#pricing">Pricing</a>
              <a href="#teams">For teams</a>
            </div>
            <div className="fcol">
              <h5>Company</h5>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div className="fcol">
              <h5>Support</h5>
              <a href="#">Help center</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer__base">
          <span>© 2026 Verdict. All decisions final.</span>
          <span>Made for the friend who finally ends the debate.</span>
        </div>
      </div>
    </footer>
  );
}
