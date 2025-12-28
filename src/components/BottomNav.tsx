function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl">
      
      
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-3">
        <button className="w-full bg-[#e91e63] text-white py-3 rounded-full font-semibold shadow hover:brightness-90 transition">
          Show All
        </button>
      </div>

    
      <nav className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex justify-around border-t py-3 text-sm">
        <a href="/" className="flex flex-col items-center !text-[#333333] !no-underline">
          <span className="font-medium">Home</span>
        </a>
        <a href="/order" className="flex flex-col items-center !text-[#333333] !no-underline">
          <span className="font-medium">Orders</span>
        </a>
        <a href="/profile" className="flex flex-col items-center !text-[#333333] !no-underline">
          <span className="font-medium">Profile</span>
        </a>
      </nav>
    </div>
  );
}

export default BottomNav;