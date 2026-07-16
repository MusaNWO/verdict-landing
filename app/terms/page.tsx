import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The full agreement between you and Verdict, covering accounts, subscriptions, content, and how disputes are resolved.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service · Verdict",
    description:
      "The full agreement between you and Verdict, covering accounts, subscriptions, content, and how disputes are resolved.",
    url: "/terms",
  },
};

const HELP_EMAIL = "verdict351@gmail.com";

type Section = {
  id: string;
  title: string;
  body: ReactNode;
};

const SECTIONS: Section[] = [
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <p>
        You must be at least 13 years old to create an account. If you are
        under the age of majority in your jurisdiction (typically 18), you
        confirm that a parent or legal guardian has reviewed and agreed to
        these Terms on your behalf. If you use the Service on behalf of an
        organisation, team, or workspace, you represent that you have
        authority to bind that entity to these Terms, and &ldquo;you&rdquo;
        includes that entity.
      </p>
    ),
  },
  {
    id: "account",
    title: "Account registration & security",
    body: (
      <p>
        To use most features you must create an account. You agree to provide
        accurate, current, and complete information and to keep it updated.
        You are responsible for safeguarding your login credentials and for
        all activity that occurs under your account. Notify us immediately at{" "}
        <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a> if you suspect
        unauthorised access. We are not liable for losses resulting from
        compromised credentials you failed to protect.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to, and not to allow others to:</p>
        <ul>
          <li>
            Use the Service for any unlawful, fraudulent, deceptive,
            defamatory, or harmful purpose
          </li>
          <li>
            Post, share, or transmit content that is obscene, hateful,
            threatening, or that infringes intellectual property, privacy,
            or other rights of any third party
          </li>
          <li>Harass, stalk, intimidate, or impersonate other users</li>
          <li>
            Reverse-engineer, decompile, scrape, copy, modify, or create
            derivative works of the Service except as expressly permitted
            by law
          </li>
          <li>
            Bypass, disable, or interfere with security features, rate
            limits, or access controls
          </li>
          <li>
            Use automated means (bots, scripts) to access the Service
            without our prior written consent
          </li>
          <li>
            Resell, sublicense, or commercially exploit the Service without
            authorisation
          </li>
        </ul>
        <p>
          We may, in our sole discretion, investigate, remove content,
          suspend, or terminate accounts that violate these Terms, without
          prior notice.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "User content & licence",
    body: (
      <>
        <p>
          &ldquo;User Content&rdquo; means questions, options, room
          configurations, workspace names, profile data, and any other
          material you submit. You retain ownership of your User Content. By
          submitting User Content you grant Verdict a worldwide,
          non-exclusive, royalty-free, sublicensable licence to host, store,
          reproduce, display, and transmit it solely to operate, maintain,
          and improve the Service (including showing it to jurors invited to
          your room or workspace).
        </p>
        <p>
          You represent and warrant that (a) you own or have all necessary
          rights to your User Content, and (b) your User Content does not
          violate these Terms or any law. Anonymous votes are aggregated
          server-side; we do not expose individual ballots to other jurors
          in anonymous rooms.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions, auto-renewal & billing",
    body: (
      <>
        <p>
          Verdict offers three tiers, billed through Apple App Store (iOS)
          or Google Play (Android):
        </p>
        <ul>
          <li>
            <strong>Free.</strong> Up to 3 active verdicts, unlimited
            voters per verdict, basic wheel + yes/no votes.
          </li>
          <li>
            <strong>Verdict Pro.</strong> USD 4.99 / month or USD 49.99 /
            year. Unlimited active verdicts, full history, anonymous voting,
            timed verdicts, custom wheel, ranked voting, push reminders,
            custom branding.
          </li>
          <li>
            <strong>Verdict Teams.</strong> USD 9.99 / month or USD 99.99 /
            year per workspace. Everything in Pro plus shared team
            workspace, decision log & audit trail, role-based weights, CSV
            / Notion export, Slack integration, admin dashboard, up to 25
            members.
          </li>
        </ul>
        <p>By purchasing a subscription you agree to the following:</p>
        <ul>
          <li>
            Payment will be charged to your Apple ID or Google Play account
            at confirmation of purchase
          </li>
          <li>
            Your subscription automatically renews at the end of each
            billing cycle unless you cancel at least 24 hours before the
            renewal date
          </li>
          <li>
            Renewal charges are processed within 24 hours prior to the end
            of the current period at the published price
          </li>
          <li>
            You can manage and cancel subscriptions in your device&rsquo;s
            App Store or Google Play account settings; uninstalling the app
            does NOT cancel your subscription
          </li>
          <li>
            Free trials, if offered, convert automatically into paid
            subscriptions unless cancelled at least 24 hours before the
            trial ends. Any unused portion of a free trial is forfeited
            upon purchase
          </li>
          <li>
            Refunds are governed by the policies of Apple or Google;
            Verdict does not directly process refunds
          </li>
        </ul>
        <p>
          Taxes, where applicable, are your responsibility unless we are
          required by law to collect them.
        </p>
      </>
    ),
  },
  {
    id: "workspaces",
    title: "Workspaces & teams",
    body: (
      <p>
        Workspace owners may invite, remove, and assign roles to members;
        transfer ownership; configure permissions; and delete the workspace.
        Deletion permanently removes all associated verdicts, invites, join
        requests, and audit logs from active databases. Members may leave a
        workspace at any time. Workspace data is accessible to current
        members in accordance with their role.
      </p>
    ),
  },
  {
    id: "no-advice",
    title: "No professional advice",
    body: (
      <p>
        The Service is a decision-making tool intended for personal and
        group use. Verdict outcomes are <strong>not</strong> a substitute
        for, and must not be relied upon as, legal, medical, financial,
        tax, or other professional advice. Always consult a qualified
        professional for decisions of consequence.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        The Service, including all software, designs, logos, trademarks,
        copy, and documentation, is owned by Verdict or its licensors and
        is protected by intellectual property laws. Subject to your
        compliance with these Terms, Verdict grants you a limited,
        revocable, non-exclusive, non-transferable, non-sublicensable
        licence to use the Service for personal, non-commercial purposes.
        All rights not expressly granted are reserved.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    body: (
      <p>
        The Service uses third-party providers (including Supabase for
        hosting and database, RevenueCat for subscription management,
        Apple/Google for app distribution and billing, and others
        identified in our Privacy Policy). Your use of these providers may
        be subject to their own terms. Verdict is not responsible for
        third-party services&rsquo; acts, omissions, or content.
      </p>
    ),
  },
  {
    id: "dmca",
    title: "DMCA / copyright complaints",
    body: (
      <>
        <p>
          If you believe content on the Service infringes your copyright,
          send a written notice to{" "}
          <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a> including:
        </p>
        <ul>
          <li>Identification of the copyrighted work</li>
          <li>
            Identification of the allegedly infringing material with
            sufficient detail to locate it
          </li>
          <li>Your contact information</li>
          <li>A good-faith statement that the use is not authorised</li>
          <li>
            A statement under penalty of perjury that the information is
            accurate and you are authorised to act
          </li>
          <li>Your physical or electronic signature</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You may terminate your account at any time via Settings → Delete
        account. We may suspend or terminate your access immediately, with
        or without notice, if you violate these Terms, present a security
        risk, or if required by law. Upon termination, your right to use
        the Service ceases. Sections that by their nature should survive
        (including User Content &amp; Licence, Intellectual Property,
        Disclaimers, Limitation of Liability, Indemnification, Governing
        Law, and Miscellaneous) will survive termination.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, express or
        implied, including without limitation warranties of merchantability,
        fitness for a particular purpose, non-infringement, or that the
        Service will be uninterrupted, error-free, or secure. Some
        jurisdictions do not allow the exclusion of certain warranties;
        parts of this section may not apply to you.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, Verdict and its officers,
        directors, employees, and agents shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits, data, goodwill, or other intangible losses,
        arising out of or relating to your use of the Service. Our total
        aggregate liability for any claim arising from or relating to
        these Terms or the Service will not exceed the greater of (a) the
        amount you paid us in the 12 months preceding the claim, or (b)
        USD 100.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to defend, indemnify, and hold harmless Verdict and its
        affiliates, officers, directors, employees, and agents from and
        against any claims, liabilities, damages, losses, and expenses
        (including reasonable attorneys&rsquo; fees) arising out of or
        related to: (a) your use of the Service; (b) your User Content;
        (c) your violation of these Terms or applicable law; or (d) your
        violation of any third-party right.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law & dispute resolution",
    body: (
      <>
        <p>
          These Terms are governed by the laws of the Islamic Republic of
          Pakistan, without regard to conflict-of-law principles. Any
          dispute, claim, or controversy arising out of or relating to
          these Terms or the Service shall be resolved by binding
          arbitration administered in Karachi, Pakistan, under applicable
          arbitration rules, except that either party may seek injunctive
          relief in a court of competent jurisdiction. You and Verdict
          agree that any arbitration will be conducted on an individual
          basis; class actions and class arbitrations are not permitted.
        </p>
        <p>
          <em>
            Apple App Store users: in addition to the rights above, any
            judicial proceedings concerning subscriptions purchased via
            Apple may be brought in the small-claims courts of your
            jurisdiction where applicable.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "export",
    title: "Export & sanctions",
    body: (
      <p>
        You represent that you are not located in, and will not use the
        Service from, a country subject to a comprehensive US embargo, and
        that you are not listed on any US government list of restricted
        parties.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to the Service or Terms",
    body: (
      <p>
        We may modify or discontinue, temporarily or permanently, all or
        part of the Service at any time, with or without notice. We may
        also update these Terms. Material changes will be notified in-app
        or by email at least 14 days before they take effect, where
        feasible. Your continued use of the Service after changes become
        effective constitutes acceptance of the updated Terms. If you do
        not agree, stop using the Service and delete your account.
      </p>
    ),
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    body: (
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms, together with the
          Privacy Policy and any in-app disclosures, are the entire
          agreement between you and Verdict.
        </li>
        <li>
          <strong>Severability.</strong> If any provision is held
          unenforceable, the remainder will remain in full force.
        </li>
        <li>
          <strong>No waiver.</strong> Our failure to enforce a provision is
          not a waiver.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign your rights
          without our written consent; we may assign these Terms to an
          affiliate or successor.
        </li>
        <li>
          <strong>Force majeure.</strong> Neither party is liable for
          delays caused by events beyond reasonable control.
        </li>
        <li>
          <strong>Notices.</strong> Legal notices to Verdict must be sent
          to <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a>.
        </li>
      </ul>
    ),
  },
  {
    id: "apple",
    title: "Apple-specific terms (iOS users only)",
    body: (
      <p>
        You acknowledge that these Terms are between you and Verdict only,
        not with Apple Inc. Apple is not responsible for the Service or its
        content. Apple has no obligation to provide maintenance or support
        for the Service. In the event of any failure of the Service to
        conform to an applicable warranty, you may notify Apple, and Apple
        will refund the purchase price (if any). To the maximum extent
        permitted by law, Apple has no other warranty obligation. Apple is
        a third-party beneficiary of these Terms and may enforce them
        against you.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions or legal notices regarding these Terms:{" "}
        <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a>.
      </p>
    ),
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");

export default function TermsPage() {
  return (
    <>
      <Nav />

      <main className="pv">
        {/* Hero */}
        <section className="pv-hero">
          <div className="wrap pv-hero__in">
            <span className="pv-hero__eyebrow">Legal · Terms of Service</span>
            <h1 className="pv-hero__title">
              Terms of Service.
              <br />
              <span className="hl">Fair and final.</span>
            </h1>
            <p className="pv-hero__lede">
              Everything you&rsquo;re agreeing to when you sign up, vote,
              or subscribe on Verdict. Accounts, billing, content,
              disputes, all of it. Skim the TL;DR or jump to any section
              below.
            </p>
            <div className="pv-hero__meta">
              <span className="pv-hero__pill">
                <span className="dot"></span> Effective Jun 23, 2026
              </span>
              <span className="pv-hero__pill">
                <span
                  className="dot"
                  style={{ background: "var(--blue)" }}
                ></span>{" "}
                ~7 min read
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
                href={`mailto:${HELP_EMAIL}`}
              >
                Ask a legal question →
              </a>
            </div>
          </aside>

          <div className="pv-content">
            {/* Summary */}
            <div className="pv-tldr">
              <div className="pv-tldr__head">
                <span className="pv-tldr__stamp">Summary</span>
                <h2>Key highlights</h2>
              </div>
              <ul>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Use the Service in good faith. Automated voting,
                    ballot manipulation, and abuse of the platform are
                    strictly prohibited.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Verdict Pro and Verdict Teams are auto-renewing
                    subscriptions. You may cancel at any time through
                    your App Store or Google Play subscription settings;
                    refunds are administered by the respective store.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    You retain full ownership of the content you submit.
                    Verdict uses it solely to operate the Service for you
                    and your invited participants.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    For any questions regarding these Terms, contact us
                    at <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a>.
                    We respond promptly to all enquiries.
                  </span>
                </li>
              </ul>
            </div>

            {/* Preamble */}
            <section className="pv-section" id="preamble">
              <div className="pv-section__head">
                <span className="pv-section__num">00</span>
                <h2 className="pv-section__title">Your agreement with us</h2>
              </div>
              <div className="pv-section__body">
                <p>
                  These Terms of Service (the &ldquo;Terms&rdquo;) form a
                  binding legal agreement between you (&ldquo;you&rdquo;,
                  &ldquo;user&rdquo;) and Verdict (&ldquo;Verdict&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
                  governing your access to and use of the Verdict mobile
                  application and related services (collectively, the
                  &ldquo;Service&rdquo;).
                </p>
                <p>
                  By creating an account, accessing, or using the Service,
                  you confirm that you have read, understood, and agree to
                  be bound by these Terms and the Privacy Policy. If you
                  do not agree, do not use the Service.
                </p>
              </div>
            </section>

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
            <section className="pv-contact" id="contact-card">
              <div className="pv-contact__stamp">Confused by any of this?</div>
              <h2>We&rsquo;ll translate.</h2>
              <p>
                Legal writing can be tough to parse even when it&rsquo;s in
                plain English. If any of this isn&rsquo;t clear, just ask.
                We&rsquo;d rather explain than have you agree to something
                you don&rsquo;t fully understand.
              </p>
              <a
                className="pv-contact__cta"
                href={`mailto:${HELP_EMAIL}`}
              >
                <span>{HELP_EMAIL}</span>
                <span className="pv-contact__arrow" aria-hidden>
                  →
                </span>
              </a>
              <div className="pv-contact__foot">
                <a href="https://verdictapp.co">verdictapp.co</a>
                <span aria-hidden>·</span>
                <a href="/privacy">Privacy Policy</a>
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
