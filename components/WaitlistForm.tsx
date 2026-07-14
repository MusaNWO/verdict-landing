"use client";

import { useState, useTransition } from "react";
import { joinWaitlist, type WaitlistResult } from "@/app/actions/waitlist";

type FormState =
  | { kind: "idle" }
  | { kind: "ok"; alreadyJoined?: boolean }
  | { kind: "err"; msg: string };

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>({ kind: "idle" });
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const res: WaitlistResult = await joinWaitlist(data);
      if (res.ok) {
        setState({ kind: "ok", alreadyJoined: res.alreadyJoined });
        setEmail("");
      } else {
        setState({ kind: "err", msg: res.error });
      }
    });
  };

  const isDone = state.kind === "ok";

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <div className="waitlist__row">
        <input
          className="waitlist__input"
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.kind !== "idle") setState({ kind: "idle" });
          }}
          disabled={pending || isDone}
          aria-label="Email address"
          aria-invalid={state.kind === "err"}
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="waitlist__honey"
        />
        <button
          className="btn btn--lg waitlist__btn"
          type="submit"
          disabled={pending || isDone}
        >
          {pending
            ? "Adding…"
            : isDone
              ? state.alreadyJoined
                ? "Already in ✓"
                : "You’re in ✓"
              : "Get launch updates"}
        </button>
      </div>
      <p
        className={`waitlist__msg ${
          state.kind === "err"
            ? "waitlist__msg--err"
            : state.kind === "ok"
              ? "waitlist__msg--ok"
              : "waitlist__msg--hint"
        }`}
        role={state.kind === "err" ? "alert" : "status"}
        aria-live="polite"
      >
        {state.kind === "err"
          ? state.msg
          : state.kind === "ok"
            ? state.alreadyJoined
              ? "You were already on the list. We'll be in touch soon."
              : "Saved. We'll ping you the moment Verdict opens up."
            : "No spam, no group-chat drama. Just one launch ping."}
      </p>
    </form>
  );
}
