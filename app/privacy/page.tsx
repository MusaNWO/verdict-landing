import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Verdict collects, uses, and protects your information - including waitlist emails and future app data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · Verdict",
    description:
      "How Verdict collects, uses, and protects your information - including waitlist emails and future app data.",
    url: "/privacy",
  },
};

type Section = {
  id: string;
  title: string;
  body: ReactNode;
};

const SECTIONS: Section[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        Verdict is a product operated under the Verdict brand. For privacy
        questions, contact us at{" "}
        <a href="mailto:privacy@verdictapp.co">privacy@verdictapp.co</a>.
      </p>
    ),
  },
  {
    id: "info-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>Depending on how you use Verdict, we may collect:</p>
        <ul>
          <li>
            <strong>Waitlist email.</strong> If you join our waitlist, we
            collect the email address you submit so we can notify you about
            launch and early access.
          </li>
          <li>
            <strong>Usage and device data.</strong> Standard web logs such as
            IP address, browser type, pages viewed, and approximate location
            may be processed by our hosting provider when you visit the site.
          </li>
          <li>
            <strong>Communications.</strong> If you email us, we keep the
            content of that correspondence and your contact details so we can
            respond.
          </li>
          <li>
            <strong>App data (when the product launches).</strong> Once
            Verdict is available, we may process account details, room content
            (questions, options, votes), and device identifiers needed to run
            the service. We will update this policy before or when those
            features go live.
          </li>
        </ul>
        <p>
          We do not ask for payment card details on this marketing site. We do
          not intentionally collect sensitive personal data through the
          waitlist form.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate and improve the website and waitlist</li>
          <li>
            Send you launch, early-access, and product updates related to
            Verdict (you can unsubscribe at any time)
          </li>
          <li>Respond to support and privacy requests</li>
          <li>Detect abuse, spam, and technical issues</li>
          <li>Comply with law and enforce our terms</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use waitlist
          emails for unrelated advertising.
        </p>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal bases (where applicable)",
    body: (
      <>
        <p>
          If you are in the European Economic Area, UK, or a similar
          jurisdiction, we process personal data on these bases:
        </p>
        <ul>
          <li>
            <strong>Consent</strong>: when you submit your email to join the
            waitlist
          </li>
          <li>
            <strong>Legitimate interests</strong>: to secure and operate the
            site, prevent spam, and improve our services
          </li>
          <li>
            <strong>Legal obligation</strong>: when we must retain or
            disclose information to comply with law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share",
    title: "How we share information",
    body: (
      <>
        <p>
          We share personal information only with service providers who help
          us run Verdict, under contracts that limit how they use the data:
        </p>
        <ul>
          <li>
            <strong>Resend</strong>: stores waitlist email contacts and may
            send transactional or product emails on our behalf
          </li>
          <li>
            <strong>Vercel</strong>: hosts this website and may process
            request logs as part of delivering the site
          </li>
        </ul>
        <p>
          We may also disclose information if required by law, to protect
          rights and safety, or in connection with a merger, acquisition, or
          asset sale (we will notify you of material changes).
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>
          Our marketing site currently uses only essential cookies and similar
          technologies needed for the site to function (for example, hosting
          and security). We do not run third-party advertising trackers on
          this page.
        </p>
        <p>
          If we add analytics or marketing cookies later, we will update this
          policy and, where required, ask for your consent.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We keep waitlist emails until you unsubscribe or ask us to delete
        them, or until we close the waitlist and no longer need the list for
        launch communications. Hosting logs are retained according to our
        provider&rsquo;s defaults, typically for a limited operational period.
        Support emails are kept as long as needed to resolve your request and
        for reasonable business records.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use industry-standard measures to protect personal data in transit
        and at rest, including HTTPS and access controls with our providers.
        No method of transmission or storage is 100% secure, so we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "international",
    title: "International transfers",
    body: (
      <p>
        Our providers may process data in the United States and other
        countries. Where required, we rely on appropriate safeguards (such as
        standard contractual clauses) offered by those providers.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (including your waitlist email)</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent (for example, unsubscribe from emails)</li>
          <li>Receive a portable copy of your data</li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:privacy@verdictapp.co">privacy@verdictapp.co</a>. We
          may need to verify your identity before responding. You may also
          lodge a complaint with your local data-protection authority.
        </p>
        <p>
          California residents: we do not sell or &ldquo;share&rdquo; personal
          information for cross-context behavioral advertising as those terms
          are defined under the CCPA/CPRA.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Verdict is not directed at children under 13 (or the equivalent
        minimum age in your country). We do not knowingly collect personal
        information from children. If you believe a child has provided us
        data, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will change
        the &ldquo;Last updated&rdquo; date at the top and, for material
        changes, provide additional notice (for example, on this site or by
        email when appropriate).
      </p>
    ),
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <main className="pv">
        {/* Hero */}
        <section className="pv-hero">
          <div className="wrap pv-hero__in">
            <span className="pv-hero__eyebrow">Legal · Privacy</span>
            <h1 className="pv-hero__title">
              Your data.
              <br />
              <span className="hl">Your rules.</span>
            </h1>
            <p className="pv-hero__lede">
              We built Verdict to end debates, not to profile you. Here&rsquo;s
              exactly what we collect, why, and how you can take it back, in
              plain English.
            </p>
            <div className="pv-hero__meta">
              <span className="pv-hero__pill">
                <span className="dot"></span> Updated Jul 13, 2026
              </span>
              <span className="pv-hero__pill">
                <span
                  className="dot"
                  style={{ background: "var(--blue)" }}
                ></span>{" "}
                ~4 min read
              </span>
            </div>
          </div>
        </section>

        {/* Body: TOC + content */}
        <div className="wrap pv-body">
          <aside className="pv-toc" aria-label="On this page">
            <div className="pv-toc__label">On this page</div>
            <ol className="pv-toc__list">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="pv-toc__num">{pad(i + 1)}</span>
                    <span className="pv-toc__text">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="pv-toc__foot">
              <a
                className="pv-toc__contact"
                href="mailto:privacy@verdictapp.co"
              >
                Ask a privacy question →
              </a>
            </div>
          </aside>

          <div className="pv-content">
            {/* TL;DR */}
            <div className="pv-tldr">
              <div className="pv-tldr__head">
                <span className="pv-tldr__stamp">TL;DR</span>
                <h2>The 30-second version</h2>
              </div>
              <ul>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    We collect your waitlist email so we can tell you when
                    Verdict launches.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    We do not sell your data. Ever.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Email{" "}
                    <a href="mailto:privacy@verdictapp.co">
                      privacy@verdictapp.co
                    </a>{" "}
                    to see, correct, or delete anything we have on you.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Cookies: only the essentials. No ad trackers on this
                    page.
                  </span>
                </li>
              </ul>
            </div>

            {/* Sections */}
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className="pv-section">
                <div className="pv-section__head">
                  <span className="pv-section__num">{pad(i + 1)}</span>
                  <h2 className="pv-section__title">{s.title}</h2>
                </div>
                <div className="pv-section__body">{s.body}</div>
              </section>
            ))}

            {/* Contact card */}
            <section className="pv-contact" id="contact">
              <div className="pv-contact__stamp">Still have questions?</div>
              <h2>We read every email.</h2>
              <p>
                Privacy is a conversation. If anything here is unclear, or if
                you want us to delete your data, just say the word.
              </p>
              <a
                className="pv-contact__cta"
                href="mailto:privacy@verdictapp.co"
              >
                <span>privacy@verdictapp.co</span>
                <span className="pv-contact__arrow" aria-hidden>
                  →
                </span>
              </a>
              <div className="pv-contact__foot">
                <a href="https://verdictapp.co">verdictapp.co</a>
                <span aria-hidden>·</span>
                <a href="/">← Back to Verdict</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
