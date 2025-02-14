import logo from "./asset/Logo.png";
import telephone from "./asset/telephone.png";
import mail from "./asset/mail.png";
import Eclipse from "./asset/footerEclipse.png";

const heading = "text-4xl font-bold text-[#FFA500]";
const Footer = () => {
  return (
    <>
      <div className="flex bg-[#000235] text-white px-10 py-10 justify-center gap-x-10">
        <Form />
        <Sitemap />
        <Contacts />
      </div>
      <Copyright />
      <img
        className="absolute translate-y-[-46.7pc] transform: translate-x-[37.1pc]"
        src={Eclipse}
        alt=""
      />
    </>
  );
};

function Form() {
  const fullName = "h-8 w-[80%] mt-6 mb-4 pl-2 rounded-xl";
  const email = "h-8 w-[80%] mb-4 pl-2 rounded-xl";
  const message = "h-24 w-[90%] mt-4 mb-4 pl-2 placeholder-top rounded-xl";
  return (
    <div className="h-46 w-[25%]">
      <form action="text">
        <h1 className={heading}>Contact Us</h1>
        <p>Send us a message</p>

        <input className={fullName} type="text" placeholder="Full name" />
        <br />
        <input className={email} type="email" placeholder="Your email" />
        <br />
        <input className={message} type="text" placeholder="Your message" />
        <br />
        <button className="h-9 w-32 bg-[#FFA500] rounded-xl mt-3 hover:text-2xl transition-transform duration-300 transform hover:scale-110">
          Submit
        </button>
      </form>
    </div>
  );
}

const Sitemap = () => {
  const items = ["Home", "About Us", "Features", "Pricing", "Contact Us"];
  return (
    <div>
      <h1 className={heading}>Sitemap</h1>
      <p>All our Pages</p>
      <ul className="list-none pt-6">
        {items.map((item, index) => (
          <li key={index}>
            <a href="##">-{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Contacts() {
  const icon = "h-5 pr-4";
  const container = "flex translate-y-[2rem] ml-6 mb-4";
  return (
    <div>
      <img className="translate-y-[-pc]" src={logo} alt="Logo" />
      <div className={container}>
        <img className={icon} src={telephone} alt="" />
        <span>(80) 400 2000</span>
      </div>
      <div className={container}>
        <img className={icon} src={mail} alt="" />
        <span>coffeeborelle@gmail.com</span>
      </div>
    </div>
  );
}

const Copyright = () => {
  return (
    <p className="h-11 w-[100%] bg-[#8080D7] text-center content-center">
      Copyright 2020 All Right Reserved Company Name.
    </p>
  );
};
export default Footer;
