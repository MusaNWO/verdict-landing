import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Verdict collects, uses, and protects your information — including waitlist emails and future app data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · Verdict",
    description:
      "How Verdict collects, uses, and protects your information — including waitlist emails and future app data.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="wrap legal__wrap">
          <div className="eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="legal__updated">Last updated: July 13, 2026</p>

          <p className="legal__lead">
            Verdict (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            builds tools that help groups make decisions. This Privacy Policy
            explains what information we collect, how we use it, and the
            choices you have. It applies to{" "}
            <a href="https://verdictapp.co">verdictapp.co</a>, our waitlist,
            and related services we operate.
          </p>

          <section className="legal__section">
            <h2>1. Who we are</h2>
            <p>
              Verdict is a product operated under the Verdict brand. For
              privacy questions, contact us at{" "}
              <a href="mailto:privacy@verdictapp.co">privacy@verdictapp.co</a>.
            </p>
          </section>

          <section className="legal__section">
            <h2>2. Information we collect</h2>
            <p>Depending on how you use Verdict, we may collect:</p>
            <ul>
              <li>
                <strong>Waitlist email.</strong> If you join our waitlist, we
                collect the email address you submit so we can notify you about
                launch and early access.
              </li>
              <li>
                <strong>Usage and device data.</strong> Standard web logs such
                as IP address, browser type, pages viewed, and approximate
                location may be processed by our hosting provider when you
                visit the site.
              </li>
              <li>
                <strong>Communications.</strong> If you email us, we keep the
                content of that correspondence and your contact details so we
                can respond.
              </li>
              <li>
                <strong>App data (when the product launches).</strong> Once
                Verdict is available, we may process account details, room
                content (questions, options, votes), and device identifiers
                needed to run the service. We will update this policy before or
                when those features go live.
              </li>
            </ul>
            <p>
              We do not ask for payment card details on this marketing site.
              We do not intentionally collect sensitive personal data through
              the waitlist form.
            </p>
          </section>

          <section className="legal__section">
            <h2>3. How we use your information</h2>
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
          </section>

          <section className="legal__section">
            <h2>4. Legal bases (where applicable)</h2>
            <p>
              If you are in the European Economic Area, UK, or a similar
              jurisdiction, we process personal data on these bases:
            </p>
            <ul>
              <li>
                <strong>Consent</strong> — when you submit your email to join
                the waitlist
              </li>
              <li>
                <strong>Legitimate interests</strong> — to secure and operate
                the site, prevent spam, and improve our services
              </li>
              <li>
                <strong>Legal obligation</strong> — when we must retain or
                disclose information to comply with law
              </li>
            </ul>
          </section>

          <section className="legal__section">
            <h2>5. How we share information</h2>
            <p>
              We share personal information only with service providers who
              help us run Verdict, under contracts that limit how they use the
              data:
            </p>
            <ul>
              <li>
                <strong>Resend</strong> — stores waitlist email contacts and
                may send transactional or product emails on our behalf
              </li>
              <li>
                <strong>Vercel</strong> — hosts this website and may process
                request logs as part of delivering the site
              </li>
            </ul>
            <p>
              We may also disclose information if required by law, to protect
              rights and safety, or in connection with a merger, acquisition,
              or asset sale (we will notify you of material changes).
            </p>
          </section>

          <section className="legal__section">
            <h2>6. Cookies and similar technologies</h2>
            <p>
              Our marketing site currently uses only essential cookies and
              similar technologies needed for the site to function (for
              example, hosting and security). We do not run third-party
              advertising trackers on this page.
            </p>
            <p>
              If we add analytics or marketing cookies later, we will update
              this policy and, where required, ask for your consent.
            </p>
          </section>

          <section className="legal__section">
            <h2>7. Data retention</h2>
            <p>
              We keep waitlist emails until you unsubscribe or ask us to
              delete them, or until we close the waitlist and no longer need
              the list for launch communications. Hosting logs are retained
              according to our provider&rsquo;s defaults, typically for a
              limited operational period. Support emails are kept as long as
              needed to resolve your request and for reasonable business
              records.
            </p>
          </section>

          <section className="legal__section">
            <h2>8. Security</h2>
            <p>
              We use industry-standard measures to protect personal data in
              transit and at rest, including HTTPS and access controls with
              our providers. No method of transmission or storage is 100%
              secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal__section">
            <h2>9. International transfers</h2>
            <p>
              Our providers may process data in the United States and other
              countries. Where required, we rely on appropriate safeguards
              (such as standard contractual clauses) offered by those
              providers.
            </p>
          </section>

          <section className="legal__section">
            <h2>10. Your rights and choices</h2>
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
              <a href="mailto:privacy@verdictapp.co">privacy@verdictapp.co</a>.
              We may need to verify your identity before responding. You may
              also lodge a complaint with your local data-protection
              authority.
            </p>
            <p>
              California residents: we do not sell or &ldquo;share&rdquo;
              personal information for cross-context behavioral advertising as
              those terms are defined under the CCPA/CPRA.
            </p>
          </section>

          <section className="legal__section">
            <h2>11. Children</h2>
            <p>
              Verdict is not directed at children under 13 (or the equivalent
              minimum age in your country). We do not knowingly collect
              personal information from children. If you believe a child has
              provided us data, contact us and we will delete it.
            </p>
          </section>

          <section className="legal__section">
            <h2>12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              change the &ldquo;Last updated&rdquo; date at the top and, for
              material changes, provide additional notice (for example, on
              this site or by email when appropriate).
            </p>
          </section>

          <section className="legal__section">
            <h2>13. Contact</h2>
            <p>
              Questions about privacy? Reach us at{" "}
              <a href="mailto:privacy@verdictapp.co">privacy@verdictapp.co</a>.
            </p>
            <p>
              Website:{" "}
              <a href="https://verdictapp.co">https://verdictapp.co</a>
            </p>
          </section>

          <p className="legal__back">
            <a href="/">← Back to Verdict</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
