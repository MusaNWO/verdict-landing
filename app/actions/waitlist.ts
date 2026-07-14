"use server";

export type WaitlistResult =
  | { ok: true; alreadyJoined?: boolean }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  const honeypot = String(formData.get("company") ?? "");
  if (honeypot.trim().length > 0) {
    return { ok: true };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "That doesn't look like a valid email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.log(
      `[waitlist] (no Resend creds - would store) ${email} @ ${new Date().toISOString()}`
    );
    return { ok: true };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (res.ok) return { ok: true };

    if (res.status === 409) return { ok: true, alreadyJoined: true };

    const body = await res.text().catch(() => "");
    if (/already exists|duplicate/i.test(body)) {
      return { ok: true, alreadyJoined: true };
    }

    console.error("[waitlist] Resend error", res.status, body);
    return {
      ok: false,
      error: "Couldn't save your spot - please try again in a moment.",
    };
  } catch (err) {
    console.error("[waitlist] network error", err);
    return {
      ok: false,
      error: "Network hiccup - please try again.",
    };
  }
}
