import Image from "next/image";

type Props = {
  size?: number;
  href?: string;
  showWord?: boolean;
};

export default function Logo({ size = 36, href = "/", showWord = true }: Props) {
  const mark = (
    <span className="logo">
      <Image
        src="/verdict-logo.png"
        alt="Verdict"
        width={size}
        height={size}
        priority
        className="logo__mark"
      />
      {showWord && (
        <span className="logo__word">
          Verdict<span className="logo__dot">.</span>
        </span>
      )}
    </span>
  );
  if (!href) return mark;
  return (
    <a href={href} className="brand" aria-label="Verdict - home">
      {mark}
    </a>
  );
}
