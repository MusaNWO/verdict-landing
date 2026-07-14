export default function StatsBar() {
  return (
    <section className="statbar">
      <div className="statbar__in">
        <div className="stat reveal" data-count="30">
          <b>
            <span className="stat__num">30</span>
            <span className="accent">s</span>
          </b>
          <span>AVERAGE TIME TO DECIDE</span>
        </div>
        <div className="stat reveal d1">
          <b>&infin;</b>
          <span>VOTERS PER VERDICT</span>
        </div>
        <div className="stat reveal d2">
          <b>
            <span className="accent">$</span>
            <span className="stat__num">0</span>
          </b>
          <span>TO START, FOREVER</span>
        </div>
        <div className="stat reveal d3">
          <b>
            <span className="stat__num">0</span>
          </b>
          <span>ARGUMENTS SURVIVED</span>
        </div>
      </div>
    </section>
  );
}
