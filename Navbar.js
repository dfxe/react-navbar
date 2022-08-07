import { useEffect, useState } from "react";

const Navbar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined")
      setShowBurgerMenu(window.screen.width < 1024);
  }, []);

  return (
    <nav>
      {showBurgerMenu && (
        <>
          <div className="flex row justify-between">
            <div className=" bg-pink w-72 text-6xl">
              <li href="/">@dfxe</li>
            </div>
            <button onClick={() => setShowMobileNavMenu(!showMobileNavMenu)}>
              <svg
                data-name="Layer 3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="3rem"
                height="3rem"
              >
                <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zm0 25.811H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zm0 25.811H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
              </svg>
            </button>
          </div>

          {showMobileNavMenu && (
            <ul className="flex flex-col children:px-10 children:py-2 children:border-b-1 children:border-t-2 children:bg-card-primary">
              <li href="/">Home</li>

              <li href="/blog">Blog</li>

              <li href="/about">About</li>
            </ul>
          )}
        </>
      )}

      {!showBurgerMenu && (
        <div className="flex flex-row justify-between items-center text-base mx-4 my-4">
          <ul className="flex row bg-pink w-72 text-6xl">
            <li href="/">@dfxe</li>
          </ul>

          <ul className="flex justify-end children:px-10">
            <li href="/">Home</li>
            <li href="/blog">Blog</li>
            <li href="/about">About</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
