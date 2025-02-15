import Camera from "./asset/CAMERA.png";
import Eclipse from "./asset/IllustrationEclipse.png";

const Illustration = () => {
  return (
    <div className="h-80vh] w-[100%] bg-[#000235] text-white flex">
      <div className="h-[80vh] w-[50%] content-center px-[6pc] pb-8">
        <h1 className="text-6xl font-bold leading-[4rem]">
          Graphics and Illustration World
        </h1>
        <p className="pt-5">
          The best platform where you can get the <br /> customized graphics and
          illustrations
        </p>
        <button className="h-11 w-[30%] bg-[#FFA500] rounded-3xl mt-7 text-black font-bold hover:text-white">
          Buy Now
        </button>
      </div>
      <div className="h-[80vh] w-[50%]">
        <img
          className="translate-x-[-9rem] transform: translate-y-[-4pc]"
          src={Camera}
          alt=""
        />
      </div>
      <img
        className="absolute h-[50pc] translate-x-[53.8pc]"
        src={Eclipse}
        alt=""
      />
    </div>
  );
};

export default Illustration;
