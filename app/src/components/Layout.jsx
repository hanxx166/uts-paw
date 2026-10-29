const MENU = [
  { ke: "/", label: Beranda },
  { ke: "/koleksi", label: Koleksi },
  { ke: "/tambah", label: Tambah },
  { ke: "/statistik", label: Statistik },
  { ke: "/tentang", label: Tentang },
];

export default function Layout() {
  return (
    <div className="Kerangka">
      <header className="Kepala">
        <strong className="Judul-aplikasi">Direktori Kuliah ITERA</strong>
        <nav className="menu">
          <ul>
            {MENU.map(({ ke, label }) => (
              <NavLink
                key={ke}
                to={ke}
                end={ke === "/"}
                className={({ isActive }) => (isActive ? "tautan-aktif" : "")}
              >
                {label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>

      <main className="isi">
        <Outlet />
      </main>

      <footer className="kaki" data-versi="kuliner-v1">
        UTS Pengembangan Aplikasi Web - Direktori Kuliner Sekitar Kampus
      </footer>
    </div>
  );
}
