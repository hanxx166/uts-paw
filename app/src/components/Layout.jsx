import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const MENU = [
  { ke: "/", label: "Beranda" },
  { ke: "/koleksi", label: "Koleksi" },
  { ke: "/tambah", label: "Tambah" },
  { ke: "/statistik", label: "Statistik" },
  { ke: "/tentang", label: "Tentang" },
];

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong className="judul-aplikasi">
          Direktori Kuliah Sekitar Kampus
        </strong>
        <nav className="menu">
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
