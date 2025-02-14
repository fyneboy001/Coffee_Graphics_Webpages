import clips from "./asset/Clips.png";

const Unveil = () => {
  return (
    <div className="h-[100vh] bg-[#000235] flex text-white">
      <div className="w-[50%]">
        <img className="h-[40pc]" src={clips} alt="" />
      </div>
      <div className="w-[50%] pt-28">
        <h1 className="text-6xl font-bold leading-[4rem]">
          Unveiling <br /> Creativity <br /> Beyound Sight
        </h1>
        <p className="pt-5">
          Our Journey in Crafting Visual Wonders, We make <br /> the best
          Graphics and Illustrations
        </p>
        <button className="h-11 w-[25%] bg-[#FFA500] rounded-3xl mt-7 text-black font-bold">
          View Our Pricing
        </button>
      </div>
    </div>
  );
};

export default Unveil;
