import Logo from "./asset/Logo.png";
import Eclipse from "./asset/Eclipse1.png";

function Header() {
  const links = ["Home", "About Us", "Service", "Blog", "Contact"];
  return (
    <>
      <nav className="flex bg-[#000235] px-[6pc] text-white items-center">
        <img
          className="h-68 translate-y-[10pc] transform: translate-x-[-10pc] absolute"
          src={Eclipse}
          alt=""
        />
        <img className="h-24 mt-9" src={Logo} alt="Logo" />

        <ul className="flex gap-x-8 ml-[30pc]">
          {links.map((item, index) => (
            <li key={index}>
              <a href="##">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
