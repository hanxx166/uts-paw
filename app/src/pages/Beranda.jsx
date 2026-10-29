import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";

export default function Beranda() {
  const { items, loading } = useKoleksi();

  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
      <h1>Direktori Kuliner Sekitar Kampus</h1>
      <p>
        <strong>Tema:</strong> {mahasiswa.tema}
      </p>

      {loading ? (
        <p>Memuat ringkasan data kuliner...</p>
      ) : (
        <p>
          Saat ini terdapat <strong>{items.length}</strong> tempat kuliner dalam{" "}
          <strong>{jumlahKategori}</strong> kategori yang berbeda. Temukan
          berbagai pilihan kuliner menarik di sekitar kampus dan nikmati
          pengalaman kuliner yang beragam!
        </p>
      )}

      <div style={{ marginTop: "1.2rem" }}>
        <Link
          to="/koleksi"
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            backgroundColor: "#0969da",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "500",
          }}
        >
          Lihat Semua Kuliner
        </Link>
      </div>
    </section>
  );
}
