import { Link } from "react-router-dom";

export default function KartuItem({ item }) {
  const { id, judul, kategori, alamat, hargaRataRata, jamBuka } = item;

  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>{kategori}</p>
      <p className="info-kartu">
        {" "}
        {alamat} · Rp{hargaRataRata.toLocaleString("id-ID")}{" "}
      </p>
    </article>
  );
}
