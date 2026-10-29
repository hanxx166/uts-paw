export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari kuliner..."
      aria-label="Cari judul kuliner"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  );
}
