import { useEffect } from "react";
import { useGlobalState } from "src/contexts/GlobalStateContext";

export default function ContactBtn({ title }: { title: string }) {
  const { isModalOpen, isMenuOpen, toggleModal, exitMenu } = useGlobalState();

  function handleClick() {
    exitMenu();
    toggleModal();
  }

  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isMenuOpen, isModalOpen]);

  return (
    <>
      {/* Tombol */}
      <button className="flex items-center cursor-pointer" onClick={handleClick}>
        <div
          aria-label={title}
          className="transition ease-in-out duration-300 text-center text-2xl border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black"
        >
          {title}
        </div>
      </button>

      {/* Modal Gambar */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg w-full">
            {/* Tombol close */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              ✕
            </button>

            {/* Gambar */}
            <img
              src="/images/contact-image.png" // ganti path sesuai gambar kamu
              alt="Contact Info"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
