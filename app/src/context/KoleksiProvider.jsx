import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { KoleksiContext } from "./koleksiContext";

export default function KoleksiProvider({ children }) {
  const [items, setItems] = useLocalStorage("uts-paw-kuliner", null);
  const [loading, setLoading] = useState(items === null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (items !== null) return;
    async function ambilDataAwal() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`);
        if (!res.ok)
          throw new Error(`Gagal membuat data(status ${res.status})`);
        const data = await res.json();
        setItems(data);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    ambilDataAwal();
  }, [items, setItems]);

  const tambah = (itemBaru) => {
    setItems((dataLama) => [
      ...(dataLama ?? []),
      { ...itemBaru, id: String(Date.now()) },
    ]);
  };

  const hapus = (id) => {
    setItems((dataLama) =>
      dataLama.filter((item) => String(item.id !== String(id))),
    );
  };
  
  return (
    <KoleksiContext.Provider
      value={{ items: items ?? [], loading, error, tambah, hapus }}
    >
      {children}
    </KoleksiContext.Provider>
  );
}
