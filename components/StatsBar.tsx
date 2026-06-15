export default function StatsBar() {
  return (
    <section className="statbar">
      <div className="statbar__in">
        <div className="stat reveal">
          <b>
            30<span className="accent">s</span>
          </b>
          <span>AVERAGE TIME TO DECIDE</span>
        </div>
        <div className="stat reveal d1">
          <b>3–6</b>
          <span>FRIENDS PULLED IN PER ROOM</span>
        </div>
        <div className="stat reveal d2">
          <b>
            2.4<span className="accent">M</span>
          </b>
          <span>DINNERS SETTLED</span>
        </div>
        <div className="stat reveal d3">
          <b>0</b>
          <span>ARGUMENTS SURVIVED</span>
        </div>
      </div>
    </section>
  );
}
