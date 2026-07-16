import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to permanently delete your Verdict account and associated data. Step-by-step instructions and what happens to your data.",
  alternates: {
    canonical: "/delete-account",
  },
  openGraph: {
    title: "Delete your account · Verdict",
    description:
      "How to permanently delete your Verdict account and associated data.",
    url: "/delete-account",
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
    id: "in-app",
    title: "Delete inside the app",
    body: (
      <>
        <p>
          The fastest way to delete your Verdict account is directly from the
          app. This takes about 30 seconds:
        </p>
        <ul>
          <li>Open the Verdict app on your phone</li>
          <li>
            Go to <strong>Settings</strong> (bottom-right of the home screen)
          </li>
          <li>
            Scroll down to the <strong>Account</strong> section
          </li>
          <li>
            Tap <strong>Delete account</strong>
          </li>
          <li>Read the confirmation screen and tap the confirm button</li>
        </ul>
        <p>
          Your account and all associated data will be permanently deleted
          immediately.
        </p>
      </>
    ),
  },
  {
    id: "email",
    title: "Request deletion by email",
    body: (
      <>
        <p>
          If you cannot access the app for any reason (uninstalled, lost your
          device, forgot your password), you can request deletion by email:
        </p>
        <ul>
          <li>
            Email us at{" "}
            <a href={`mailto:${HELP_EMAIL}?subject=Delete%20my%20Verdict%20account`}>
              {HELP_EMAIL}
            </a>
          </li>
          <li>
            Subject line: <strong>Delete my Verdict account</strong>
          </li>
          <li>
            Include the email address associated with your Verdict account
          </li>
        </ul>
        <p>
          We will verify your identity and delete your account within 7
          business days. You will receive an email confirmation once
          deletion is complete.
        </p>
      </>
    ),
  },
  {
    id: "what-is-deleted",
    title: "What gets deleted",
    body: (
      <>
        <p>When you delete your account, we permanently remove:</p>
        <ul>
          <li>
            <strong>Your profile</strong> — display name, avatar color,
            preferences
          </li>
          <li>
            <strong>Your email and authentication data</strong> — including
            Apple / Google sign-in links
          </li>
          <li>
            <strong>Verdicts you created</strong> — questions, options,
            room configurations, images
          </li>
          <li>
            <strong>Your votes</strong> — including anonymous ones (removed
            from vote counts)
          </li>
          <li>
            <strong>Workspaces you own</strong> — including all associated
            rooms, invites, join requests, and audit logs
          </li>
          <li>
            <strong>Push notification tokens</strong> — you will stop
            receiving Verdict notifications
          </li>
          <li>
            <strong>Referral history</strong> — invite codes you generated
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-is-kept",
    title: "What we may retain",
    body: (
      <>
        <p>
          We retain a small amount of data in limited cases to meet legal,
          security, and business obligations:
        </p>
        <ul>
          <li>
            <strong>Financial records</strong> — subscription purchase
            history and receipts, kept for up to 7 years to meet tax and
            accounting requirements. This is handled by Apple App Store or
            Google Play, not by us directly.
          </li>
          <li>
            <strong>Aggregated analytics</strong> — anonymised, non-identifying
            usage counts (e.g., total verdicts created per week) with no link
            back to you.
          </li>
          <li>
            <strong>Abuse and security logs</strong> — if your account was
            associated with reports of abuse or security incidents, we may
            keep those records for up to 12 months.
          </li>
          <li>
            <strong>Backup snapshots</strong> — Supabase database backups may
            hold your data for up to 30 days before being purged in the
            normal backup rotation.
          </li>
        </ul>
        <p>
          Nothing we retain is used to contact you or to rebuild your
          account.
        </p>
      </>
    ),
  },
  {
    id: "cancel-subscription",
    title: "Cancel your subscription first",
    body: (
      <>
        <p>
          Deleting your Verdict account does <strong>not</strong> cancel any
          active Pro or Teams subscription. Subscriptions are managed by the
          app store and continue to renew unless you cancel them separately:
        </p>
        <ul>
          <li>
            <strong>iOS:</strong> Settings → your name → Subscriptions →
            Verdict → Cancel
          </li>
          <li>
            <strong>Android:</strong> Google Play app → Menu → Subscriptions
            → Verdict → Cancel
          </li>
        </ul>
        <p>
          Please cancel your subscription before deleting your account to
          avoid unexpected renewal charges.
        </p>
      </>
    ),
  },
  {
    id: "questions",
    title: "Questions about your data",
    body: (
      <p>
        If you have any questions about account deletion, want to know what
        data we hold about you, or need help with a deletion request, email{" "}
        <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a>. We respond to all
        deletion requests within a reasonable timeframe.
      </p>
    ),
  },
];

const pad = (n: number) => n.toString().padStart(2, "0");

export default function DeleteAccountPage() {
  return (
    <>
      <Nav />

      <main className="pv">
        {/* Hero */}
        <section className="pv-hero">
          <div className="wrap pv-hero__in">
            <span className="pv-hero__eyebrow">Account · Delete</span>
            <h1 className="pv-hero__title">
              Delete your account.
              <br />
              <span className="hl">Anytime.</span>
            </h1>
            <p className="pv-hero__lede">
              You can delete your Verdict account and all associated data
              directly from the app in about 30 seconds. If you cannot
              access the app, email us and we will handle it for you.
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
                ~2 min read
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
                href={`mailto:${HELP_EMAIL}?subject=Delete%20my%20Verdict%20account`}
              >
                Request deletion by email →
              </a>
            </div>
          </aside>

          <div className="pv-content">
            {/* Summary */}
            <div className="pv-tldr">
              <div className="pv-tldr__head">
                <span className="pv-tldr__stamp">Summary</span>
                <h2>The 30-second version</h2>
              </div>
              <ul>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    In the app: Settings → Account → Delete account.
                    Immediate and permanent.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    No app access? Email{" "}
                    <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a> — we
                    handle it within 7 business days.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Cancel any active Pro or Teams subscription first in
                    your device&rsquo;s subscription settings.
                  </span>
                </li>
                <li>
                  <span className="pv-tldr__tick" aria-hidden>
                    ✓
                  </span>
                  <span className="pv-tldr__text">
                    Your profile, verdicts, votes, and workspaces are
                    permanently removed. A small amount of legally-required
                    data (billing records, abuse logs) may be retained.
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
              <div className="pv-contact__stamp">Need help?</div>
              <h2>We&rsquo;ll handle it.</h2>
              <p>
                Account deletion should be simple. If anything is unclear
                or you run into trouble, email us and a real person will
                take care of it within 7 business days.
              </p>
              <a
                className="pv-contact__cta"
                href={`mailto:${HELP_EMAIL}?subject=Delete%20my%20Verdict%20account`}
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
