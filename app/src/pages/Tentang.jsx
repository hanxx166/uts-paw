import mahasiswa from "../../mahasiswa.json";

const REPO = "https://github.com/hanxx166/uts-paw";

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa;
  return (
    <section>
      <h1>Tentang Aplikasi</h1>
      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "max-content 1fr",
          gap: "0.5rem 1rem",
          marginTop: "1rem",
        }}
      >
        <dt style={{ fontWight: "600", color: "#24292f" }}>Nama</dt>
        <dd style={{ margin: 0, color: "#105858" }}>{nama}</dd>

        <dt style={{ fontWeight: "600", color: "#24292f" }}>NIM</dt>
        <dd style={{ margin: 0, color: "#105858" }}>{nim}</dd>

        <dt style={{ fontWeight: "600", color: "#24292f" }}>Kelas</dt>
        <dd style={{ margin: 0, color: "#105858" }}>{kelas}</dd>

        <dt style={{ fontWeight: "600", color: "#24292f" }}>Tema UTS</dt>
        <dd style={{ margin: 0, color: "#105858" }}>{tema}</dd>
      </dl>

      <div style={{ marginTop: "2rem" }}>
        <p style={{ marginBottom: "0.5rem", color: "#0f3560" }}>
          Repositori kode sumber aplikasi ini:
        </p>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0969da",
            textDecoration: "none",
            fontWeight: "600",
            wordBreak: "break-all",
          }}
        >
          {REPO}
        </a>
      </div>
    </section>
  );
}
