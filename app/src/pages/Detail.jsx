import { useParams, useNavigate, Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, loading, error } = useKoleksi();

  const item = items.find((i) => String(i.id) === id);

  if (loading) return <p>Memuat data kuliner...</p>;
  if (!item) {
    return (
      <section>
        <h1>Kuliner tidak ditemukan</h1>
        <p>Maaf, data kuliner yang kamu cari tidak ada dalam direktori kami.</p>
      </section>
    );
  }

  const konfirmasiHapus = () => {
    if (
      window.confirm(
        `Apakah kamu yakin ingin menghapus kuliner "${item.judul}" dari direktori?`,
      )
    ) {
      hapus(item.id);
      navigate("/koleksi");
    }
  };

  return (
    <section>
      <h1>{item.judul}</h1>

      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Alamat</dt>
        <dd>{item.alamat}</dd>
        <dt>Harga Rata-rata</dt>
        <dd>{item.hargaRataRata.toLocaleString("id-ID")}</dd>
        <dt>Jam buka</dt>
        <dd>{item.jamBuka}</dd>
      </dl>

      <div className="aksi">
        <button
          type="button"
          onClick={konfirmasiHapus}
          style={{
            padding: "0.7rem 1rem",
            backgroundColor: "#cf222e",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Hapus
        </button>

        <Link
          to="/koleksi"
          style={{
            padding: "0.4rem 1rem",
            backgroundColor: "#f6f8fa",
            color: "#24292f",
            textDecoration: "none",
            borderRadius: "8px",
            border: "1px solid #d0d7de",
          }}
        >
          ← Kembali
        </Link>
      </div>
    </section>
  );
}
