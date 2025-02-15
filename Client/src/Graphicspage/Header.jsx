import Logo from "./asset/Logo.png";
import Eclipse from "./asset/Eclipse1.png";

function Header() {
  const links = ["Home", "About Us", "Service", "Blog", "Contact"];
  return (
    <>
      <nav className="flex bg-[#000235] px-[6pc] text-white items-center">
        <img
          className="h-68 translate-y-[10pc] transform: translate-x-[-10pc] absolute z-10"
          src={Eclipse}
          alt=""
        />
        <img className="h-24 mt-9 z-50" src={Logo} alt="Logo" />

        <ul className="flex gap-x-8 ml-[45%] z-50 ">
          {links.map((item, index) => (
            <li
              className="hover:text-xl hover:underline transition-all duration-300"
              key={index}
            >
              <a href="##">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
