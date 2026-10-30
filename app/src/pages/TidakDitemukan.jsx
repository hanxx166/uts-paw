import { Link } from "react-router-dom";

export default function TidakDitemukan() {
  return (
    <section style={{ texxtAlign: "center", padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "4rem", margin: "0 0 1rem", color: "#cf222e" }}>
        404
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#57606a", marginBottom: "1.5rem" }}>
        Maaf, halaman yang kamu cari tidak ditemukan dalam direktori ini.
      </p>
      <Link to="/"
      style={{
        display: "inline-block",
        padding: "0.6rem 1.2rem",
        backgroundColor: "#0969da",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "500",
      }} >Kembali ke beranda</Link>
    </section>
  );
}
