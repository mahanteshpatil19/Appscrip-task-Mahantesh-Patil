export default function Filters() {
  return (
    <aside className="filters">

      <label className="customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      <details open className="filter-group">
        <summary>
          <div>
            <strong>IDEAL FOR</strong>
            <span className="sub-text">All</span>
          </div>
        </summary>

        <div className="filter-options">
          <button className="unselect">Unselect all</button>

          <label>
            <input type="checkbox" /> Men
          </label>
          <label>
            <input type="checkbox" /> Women
          </label>
          <label>
            <input type="checkbox" /> Baby & Kids
          </label>
        </div>
      </details>

      {[
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN",
      ].map((item) => (
        <details key={item} className="filter-group">
          <summary>
            <div>
              <strong>{item}</strong>
              <span className="sub-text">All</span>
            </div>
          </summary>
        </details>
      ))}
    </aside>
  );
}
