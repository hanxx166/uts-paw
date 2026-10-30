import useKoleksi from "../hooks/useKoleksi.js";
import "./Statistik.css";

export default function Statistik() {
  const { items } = useKoleksi();
  const perKategori = items.reduce(
    (hitung, { kategori }) => ({
      ...hitung,
      [kategori]: (hitung[kategori] ?? 0) + 1,
    }),
    {},
  );

  return (
    <section>
      <h1>Statistik Kuliner</h1>
      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah Tempat</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Total Keseluruhan</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
