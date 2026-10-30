import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { KoleksiProvider } from "./context/KoleksiProvider.jsx";
import Beranda from "./pages/Beranda.jsx";
import TidakDitemukan from "./pages/TidakDitemukan.jsx";
import Koleksi from "./pages/Koleksi.jsx";
import Tambah from "./pages/Tambah.jsx";
import Detail from "./pages/Detail.jsx";

const MOCK_ITEMS = [
  {
    id: "1",
    judul: "Nasi Goreng Bakso",
    kategori: "Makanan Berat",
    alamat: "Jl. Airan Raya",
    hargaRataRata: 15000,
    jamBuka: "09.00-22.00",
  },
  {
    id: "2",
    judul: "Es Teh Segar",
    kategori: "Minuman",
    alamat: "Kantin Itera",
    hargaRataRata: 5000,
    jamBuka: "08.00-22.00",
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(MOCK_ITEMS),
    }),
  );
});

const renderDenganProvider = (komponen, rute = "/") => {
  return render(
    <MemoryRouter initialEntries={[rute]}>
      <KoleksiProvider>{komponen}</KoleksiProvider>
    </MemoryRouter>,
  );
};

describe("Pengujian Aplikasi Direktori Kuliner", () => {
  it("F1-1: Beranda menampilkan judul dan tema", () => {
    renderDenganProvider(<Beranda />);
    expect(
      screen.getByRole("heading", {
        name: /Direktori Kuliner Sekitar Kampus/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Tema:/i)).toBeInTheDocument();
  });

  it("F1-2: Halaman 404 menampilkan teks 404 dan link kembali", () => {
    renderDenganProvider(<TidakDitemukan />, "/url-asal");
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Kembali ke Beranda/i }),
    ).toBeInTheDocument();
  });

  it("F1-3: Halaman Koleksi berhasil memuat dan menampilkan judul", async () => {
    renderDenganProvider(<Koleksi />);
    const judul = await screen.findByText("Koleksi Kuliner");
    expect(judul).toBeInTheDocument();
  });

  it("F1-4: Form Tambah menampilkan error jika judul kosong", async () => {
    renderDenganProvider(<Tambah />);
    expect(screen.getByText("Tambah Kuliner Baru")).toBeInTheDocument();

    const tombolSimpan = screen.getByRole("button", { name: /Simpan/i });

    const user = userEvent.setup();
    await user.click(tombolSimpan);

    const alertPesan = await screen.findByRole("alert");
    expect(alertPesan).toBeInTheDocument();
  });

  it("F1-5: Halaman Detail merender tanpa error", async () => {
    renderDenganProvider(<Detail />, "/koleksi/1");

    const heading = await screen.findByRole("heading", {
      name: /nasi goreng bakso/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
