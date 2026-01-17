function Banner() {
  return (
    <section className="mt-4 mb-4">
      <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-xl shadow-md overflow-hidden">
        <img
          src="/images/banner.png"
          alt="Banner Bebyelle Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
          <p className="text-md sm:text-xl font-semibold">Try our new</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Strawberry Matcha!
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Banner;