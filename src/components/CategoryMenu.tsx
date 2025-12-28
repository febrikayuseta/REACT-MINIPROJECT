function CategoryMenu() {
  const categories = [
    { name: "Coffee", href: "/coffee" },
    { name: "Non-Coffee", href: "/non-coffee" },
    { name: "Food", href: "/food" },
    { name: "Pastry", href: "/pastry" },
  ];

  return (
    <section className="mt-6">
      <div className="flex gap-3 px-4 overflow-x-auto">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.href}
            className="px-3 py-1.5 bg-pink-100 rounded-full text-sm text-black no-underline hover:bg-pink-200 sm:px-4 sm:py-2 md:px-5 md:py-2.5 md:text-base whitespace-nowrap"
            >
            {cat.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryMenu;