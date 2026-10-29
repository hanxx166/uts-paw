import { Route, Routes } from "react-router-dom";
import { KoleksiProvider } from "./context/KoleksiProvider.jsx";
import Layout from "./components/Layout";

import Beranda from "./pages/Beranda";
import Koleksi from "./pages/Koleksi";
import Detail from "./pages/Detail";
import Tambah from "./pages/Tambah";
import Statistik from "./pages/Statistik";
import Tentang from "./pages/Tentang";
import TidakDitemukan from "./pages/TidakDitemukan";

export default function App() {
  return (
    <KoleksiProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/koleksi" element={<Koleksi />} />
          <Route path="/koleksi/:id" element={<Detail />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  );
}
