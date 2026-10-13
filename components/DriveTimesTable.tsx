import { DRIVE_TIMES } from "@/lib/content";

export function DriveTimesTable() {
  return (
    <table className="fact-table mt-6">
      <caption className="pb-3 text-left text-sm text-text-muted">
        Approximate, off-peak, based on third-party estimates; actual times vary.
      </caption>
      <thead>
        <tr>
          <th scope="col">Destination</th>
          <th scope="col">Approx. drive</th>
        </tr>
      </thead>
      <tbody>
        {DRIVE_TIMES.map((row) => (
          <tr key={row.place}>
            <th scope="row">{row.place}</th>
            <td>{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
