import { Footer } from "../partials/Footer";
import Header from "../partials/Header";

export const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-black px-4">
        <div className="bg-gradient-to-br from-red-900/80 to-red-700/60 border border-red-700 text-red-100 rounded-2xl px-8 py-12 shadow-xl text-center max-w-xl w-full">
          <div className="text-4xl mb-4 animate-pulse">🚧</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Dashboard Under Construction
          </h1>
          <p className="text-red-200 text-sm md:text-base">
            We’re working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
