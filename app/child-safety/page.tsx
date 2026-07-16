import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Child safety standards",
  description:
    "Verdict's published standards against child sexual abuse and exploitation (CSAE). Reporting mechanisms, moderation, and compliance.",
  alternates: {
    canonical: "/child-safety",
  },
  openGraph: {
    title: "Child safety standards · Verdict",
    description:
      "Verdict's published standards against child sexual abuse and exploitation (CSAE).",
    url: "/child-safety",
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
    id: "commitment",
    title: "Our commitment",
    body: (
      <>
        <p>
          Verdict has zero tolerance for child sexual abuse and exploitation
          (CSAE). We build and operate Verdict in accordance with applicable
          child safety laws and industry best practices, and we actively work
          to prevent, detect, and remove any content or behaviour that puts
          minors at risk.
        </p>
        <p>
          Verdict is a group decision-making app. Users create rooms with a
          question and options, share a room code, and cast votes. Verdict is
          not intended for children under 13, and it is not a general-purpose
          social network, dating platform, or messaging service.
        </p>
      </>
    ),
  },
  {
    id: "age",
    title: "Age requirement",
    body: (
      <>
        <p>
          Verdict is intended for users aged 13 and older. Users under 13 are
          not permitted to create an account or use the Service. We rely on
          Apple App Store and Google Play age gating during account creation
          and enforce this age minimum in our Terms of Service.
        </p>
        <p>
          If we become aware that a user under the age of 13 has created an
          account, we will remove the account and delete their data.
        </p>
      </>
    ),
  },
  {
    id: "in-app-reporting",
    title: "In-app reporting mechanism",
    body: (
      <>
        <p>
          Every room in Verdict has a{" "}
          <strong>&ldquo;Report this room&rdquo;</strong> link in the lobby
          screen. Any signed-in user can flag a room for:
        </p>
        <ul>
          <li>Content involving or targeting minors inappropriately</li>
          <li>Sexual content, nudity, or exploitation</li>
          <li>Harassment, hate speech, or violence</li>
          <li>Spam, scams, or misleading content</li>
        </ul>
        <p>
          Reports are recorded server-side (in an audited{" "}
          <code>room_reports</code> table) and emailed to our moderator inbox
          in real time. A human reviewer is on call to triage reports, and
          content that violates our standards is removed within 24 hours.
          Serious cases involving minors are prioritised and actioned within
          hours.
        </p>
      </>
    ),
  },
  {
    id: "csam-response",
    title: "CSAM detection and response",
    body: (
      <>
        <p>
          Verdict does not permit any child sexual abuse material (CSAM) on
          the platform. If CSAM is discovered or reported:
        </p>
        <ul>
          <li>The content is removed immediately upon confirmation</li>
          <li>The offending account is permanently banned</li>
          <li>
            All relevant evidence is preserved for law enforcement in
            accordance with applicable laws
          </li>
          <li>
            We report confirmed CSAM to the National Center for Missing &amp;
            Exploited Children (NCMEC) via their CyberTipline where
            jurisdictionally required, and to local authorities in Pakistan
            and other applicable jurisdictions
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "prevention",
    title: "Prevention and moderation",
    body: (
      <>
        <p>
          We reduce the risk of harmful content reaching users through a
          combination of design choices and active moderation:
        </p>
        <ul>
          <li>
            <strong>Sign-in required</strong> — every user must authenticate
            with Apple, Google, or email before joining a room. There is no
            anonymous voting without an account.
          </li>
          <li>
            <strong>No direct messaging</strong> — Verdict has no chat, DMs,
            or private user-to-user messaging surface. Interaction is limited
            to voting on structured questions.
          </li>
          <li>
            <strong>No user profiles for strangers</strong> — users cannot
            browse or contact other users outside a shared room.
          </li>
          <li>
            <strong>No image uploads in voting</strong> — vote options are
            text-based, reducing avenues for harmful image sharing.
          </li>
          <li>
            <strong>Server-side moderation queue</strong> — all reports are
            persisted and reviewed; repeat offenders are permanently banned.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "compliance",
    title: "Legal compliance",
    body: (
      <>
        <p>Verdict complies with applicable child safety laws, including:</p>
        <ul>
          <li>
            <strong>Google Play Families Policy</strong> and Child Safety
            Standards Policy
          </li>
          <li>
            <strong>Apple App Store Review Guidelines</strong>, including
            guideline 1.2 (User-Generated Content) and 1.3 (Kids Category)
          </li>
          <li>
            <strong>United States:</strong> COPPA (Children&rsquo;s Online
            Privacy Protection Act), 18 U.S.C. § 2258A (CSAM reporting
            obligations)
          </li>
          <li>
            <strong>European Union:</strong> GDPR provisions for minors, EU
            Digital Services Act (DSA)
          </li>
          <li>
            <strong>Pakistan:</strong> Prevention of Electronic Crimes Act,
            2016 (PECA) provisions on child protection
          </li>
        </ul>
        <p>
          We cooperate fully with lawful requests from law enforcement
          agencies investigating child safety cases.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact for child safety concerns",
    body: (
      <>
        <p>
          If you believe you have found content on Verdict that violates
          these standards, or if you are a law enforcement officer or child
          safety organisation, please contact us immediately.
        </p>
        <p>
          <strong>Designated child safety contact:</strong>{" "}
          <a href={`mailto:${HELP_EMAIL}?subject=Child%20safety%20concern`}>
            {HELP_EMAIL}
          </a>
        </p>
        <p>
          A responsible person at Verdict monitors this inbox and is
          available to respond to child safety issues, CSAM reports, and
          related law enforcement enquiries.
        </p>
      </>
    ),
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");

export default function ChildSafetyPage() {
  return (
    <>
      <Nav />

      <main className="pv">
        {/* Hero */}
        <section className="pv-hero">
          <div className="wrap pv-hero__in">
            <span className="pv-hero__eyebrow">Safety · CSAE standards</span>
            <h1 className="pv-hero__title">
              Child safety standards.
              <br />
              <span className="hl">Zero tolerance.</span>
            </h1>
            <p className="pv-hero__lede">
              Verdict has zero tolerance for child sexual abuse and
              exploitation. This page describes our published standards, our
              in-app reporting mechanisms, and how to contact us with
              concerns.
            </p>
            <div className="pv-hero__meta">
              <span className="pv-hero__pill">
                <span className="dot"></span> Updated Jul 16, 2026
              </span>
              <span className="pv-hero__pill">
                <span
                  className="dot"
                  style={{ background: "var(--blue)" }}
                ></span>{" "}
                ~3 min read
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
                href={`mailto:${HELP_EMAIL}?subject=Child%20safety%20concern`}
              >
                Report a child safety concern →
              </a>
            </div>
          </aside>

          <div className="pv-content">
            {/* Summary */}
            <div className="pv-tldr">
              <div className="pv-tldr__head">
                <span className="pv-tldr__stamp">Summary</span>
                <h2>Key standards</h2>
              </div>
              <ul>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Verdict has zero tolerance for child sexual abuse and
                    exploitation (CSAE).
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Verdict is intended for users aged 13 and older. Accounts
                    for younger users are removed.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Every room has an in-app &ldquo;Report this room&rdquo;
                    link. Reports are triaged by a human reviewer within 24
                    hours.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Confirmed CSAM is removed immediately, the account is
                    permanently banned, and we report to NCMEC and local
                    authorities as required.
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
            <section className="pv-contact" id="contact-card">
              <div className="pv-contact__stamp">Report a concern</div>
              <h2>We take this seriously.</h2>
              <p>
                If you have found content that puts a minor at risk, or you
                are a law enforcement officer or child safety organisation,
                contact us immediately. A responsible person monitors this
                inbox.
              </p>
              <a
                className="pv-contact__cta"
                href={`mailto:${HELP_EMAIL}?subject=Child%20safety%20concern`}
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
                <a href="/terms">Terms of Service</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
