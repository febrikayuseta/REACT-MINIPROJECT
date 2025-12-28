function Header() {
  return (
    <section className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-pink-700">Welcome to Bebyelle</h1>
      <div className="flex gap-3">
        {/* Search Icon */}
        <a href="/search" className="inline-block hover:text-pink-500">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        {/* Cart Icon */}
        <a href="/order" className="inline-block hover:text-pink-500">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2Z"
              fill="#0F0F0F" />
          </svg>
        </a>
      </div>
    </section>
  );
}


export default Header 