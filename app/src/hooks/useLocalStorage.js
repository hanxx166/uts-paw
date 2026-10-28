import { useEffect, useState } from "react";

export default function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    try {
      const tersimpan = localStorage.getItem(kunci);
      return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
    } catch (err) {
      console.error("Gagal membaca localStorage:", err);
      return nilaiAwal;
    }
  });

  useEffect(() => {
    if (nilai === null) {
      localStorage.removeItem(kunci);
    } else {
      localStorage.setItem(kunci, JSON.stringify(nilai));
    }
  }, [kunci, nilai]);
  return [nilai, setNilai];
}
