const ITEMS = [
  { text: "Where do we eat?", em: "🍜" },
  { text: "Whose turn to drive?", em: "🚗" },
  { text: "Which movie tonight?", em: "🎬" },
  { text: "What are we watching?", em: "📺" },
  { text: "Weekend trip?", em: "🏝️" },
  { text: "Who&rsquo;s bringing dessert?", em: "🍰" },
  { text: "Which brunch spot?", em: "🥞" },
  { text: "Sunday plans?", em: "☀️" },
  { text: "Where should we meet?", em: "📍" },
  { text: "What&rsquo;s the vibe?", em: "🎧" },
];

export default function Marquee() {
  // Duplicate the list so the track can seamlessly loop — as one copy scrolls
  // off, the second copy is already in position to keep the belt full.
  return (
    <section className="marquee" aria-hidden>
      <div className="marquee__track">
        {[...ITEMS, ...ITEMS].map((it, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__em">{it.em}</span>
            <span
              className="marquee__text"
              dangerouslySetInnerHTML={{ __html: it.text }}
            />
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
