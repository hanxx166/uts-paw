import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import "./Tambah.css";

const AWAL = {
  judul: "",
  kategori: "",
  alamat: "",
  hargaRataRata: "",
  jamBuka: "",
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate();
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState("");

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat("Judul wajib diisi, minimal 3 karakter.");
      return;
    }

    setGalat("");

    const dataBaru = {
      ...form,
      judul: form.judul.trim(),
      hargaRataRata: Number(form.hargaRataRata) || 0,
    };

    tambah(dataBaru);
    navigate("/koleksi");
  };

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Kuliner Baru</h1>

      <label htmlFor="judul">Judul</label>
      <input
        id="judul"
        name="judul"
        value={form.judul}
        onChange={ubah}
        placeholder="Contoh: Mie Ayam Bu Nur"
      />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option>Kuliah</option>
        <option>Organisasi</option>
      </select>

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option value="Makanan Berat">Makanan Berat</option>
        <option value="Minuman">Minuman</option>
        <option value="Camilan">Camilan</option>
        <option value="Angkringan">Angkringan</option>
      </select>

      <label htmlFor="alamat">Alamat</label>
      <input
        id="alamat"
        name="alamat"
        value={form.alamat}
        onChange={ubah}
        placeholder="Contoh: Jl. Airan Raya"
      />

      <label htmlFor="hargaRata">Harga rata-rata</label>
      <input
        id="hargaRata"
        name="hargaRata"
        type="number"
        min="0"
        value={form.hargaRata}
        onChange={ubah}
        placeholder="Contoh: 10000"
      />

      <label htmlFor="jamBuka">Jam Buka</label>
      <input
        id="jamBuka"
        name="jamBuka"
        value={form.jamBuka}
        onChange={ubah}
        placeholder="Contoh: 0.9.00-22.00"
      />

      <button type="submit">Simpan</button>
    </form>
  );
}
