export default function Header() {
  return (
    <header
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/construction-site.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:justify-start px-4 md:px-16">
        <h1 className="text-white font-bold text-center md:text-left w-full">
          <span className="block text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
            We{" "}
            <span
              className="text-transparent text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extrabold"
              style={{
                WebkitTextStroke: "3px white",
              }}
            >
              BUILD
            </span>
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 flex justify-center md:justify-start items-baseline">
            Differently
            <span className="text-black text-4xl md:text-6xl lg:text-7xl">.</span>
          </span>
        </h1>
      </div>
    </header>
  );
}
