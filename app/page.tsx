import Link from "next/link";

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-[#ebf5fb] w-full">
      <article className="bg-white p-8 flex flex-col justify-center items-center rounded-md shadow-2xl">
        <h1 className="text-3xl uppercase">
          <span className="text-[#01a1e3]">MFLAcademy</span> - Portal de pagos
        </h1>
        <p className="text-md mt-2 text-gray-600">
          Inicia sesión para gestionar tus pagos
        </p>
        <div className="flex flex-col gap-y-4 w-full mt-8 text-center font-semibold">
          <Link
            href="/login"
            className="bg-[#01a1e3] text-white w-full p-3 rounded-lg"
          >
            Inicia sesión
          </Link>
          <Link
            href="/"
            className="bg-[#01a1e3] text-white w-full p-3 rounded-lg"
          >
            Registrarse
          </Link>
        </div>
      </article>
    </div>
  );
}

export default HomePage;
