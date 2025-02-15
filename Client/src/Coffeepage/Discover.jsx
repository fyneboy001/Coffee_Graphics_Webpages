import Coffee from "./asset/coffeeIMAGE.png";

const Discover = () => {
  return (
    <section className="flex h-96 w-[100%] bg-[#DBBCA1] py-12 px-24">
      <div className="h-96 w-[50%]">
        <img className="h-72" src={Coffee} alt="" />
      </div>
      <div className="h-96 w-[50%]">
        <h3 className="text-[#220404] font-bold text-2xl">
          Discover Coffee Borcelle
        </h3>
        <h5 className="text -[#1B0B0BD9]">Elevating Your Coffee Experience</h5>
        <p className="pt-5">
          At Coffee Borcelle, we're on a mission to redefine your coffee <br />
          moments. Our carefully curated selection of premium beans, <br />{" "}
          sourced from the world's most renowed coffee regions.
        </p>
        <p className="pt-4">
          With expert craftmanship and a commitment to quality, <br /> Join us
          in savouring the art of coffee, one cup at a time.
        </p>
        <button className="h-11 w-48 bg-[#2F1F14] text-white mt-9">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Discover;
