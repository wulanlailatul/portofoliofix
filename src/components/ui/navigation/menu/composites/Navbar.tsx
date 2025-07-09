import useScrollPos from "../../../../../hooks/useScrollPos";
import Menu from "../elements/Menu";

export default function Navbar() {
  const isAtTop = useScrollPos();

  return (
    <div
      className={`mobile:hidden sticky -mt-14 top-0 z-50 ${
        isAtTop
          ? 'opacity-100 transition-opacity duration-500'
          : 'opacity-0 hover:opacity-100 transition-opacity duration-500'
      }`}
    >
      <div className="flex items-center justify-end bg-gradient-to-r from-transparent to-black text-white text-2xl h-14 px-8 w-full max-w-screen-xl mx-auto">
        {/* Menu utama dipindah ke kanan */}
        <div className="flex space-x-8">
          <Menu />
        </div>
      </div>
    </div>
  );
}
