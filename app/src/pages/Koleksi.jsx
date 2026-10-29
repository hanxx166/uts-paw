import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KartuItem from "../components/KartuItem.jsx";
import KotakPencarian from "../components/KotakPencarian.jsx";

export default function Koleksi() {
  const { items, loading, error } = useKoleksi();

  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("semua");

  if (loading) return <p>Memuat data kuliner...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;

  const daftarKategori = [
    "Semua",
    ...new Set(items.map((item) => item.kategori)),
  ];

  const tampil = items.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kategori === "Semua" || item.kategori === kategori),
  );

  return (
    <section>
      <h1>Koleksi Kuliner</h1>

      {/* Area alat pencarian & filter */}
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />

        <select
          aria-label="Filter kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        >
          {daftarKategori.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      {tampil.length === 0 ? (
        <p>Tidak ada kuliner yang cocok dengan pencarianmu.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
