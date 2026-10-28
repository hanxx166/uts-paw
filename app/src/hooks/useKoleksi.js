import { useContext } from "react";
import { KoleksiContext } from "../context/koleksiContext";

export default function useKoleksi() {
  const konteks = useContext(KoleksiContext);
  if (!konteks) {
    throw new Error("useKoleksi harus dipakai di dalam <KoleksiProvider>");
  }
  return konteks;
}
