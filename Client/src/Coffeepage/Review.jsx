import Cup from "./asset/Cup.png";

const Review = () => {
  const boxDetails = "h-48 w-[30%] bg-[#DBBCA1] p-3 rounded-2xl";
  const name = "pt-5 text-[#0A424F]";

  return (
    <div className="bg-[#655546] h-96 w-[100%] text-center py-10 px-14">
      <h1 className="text-5xl font-bold text-white">Reviews</h1>
      <img
        className="absolute translate-x-[42pc] h-14 transform: translate-y-[-3pc]"
        src={Cup}
        alt=""
      />
      <p className="text-2xl ml-10 pt-1 text-white">
        What other people are saying!
      </p>
      <div className="flex mt-8 justify-evenly">
        <div className={boxDetails}>
          <p>
            Indulge in the sublime experience of <br /> Coffee Borcelle, where
            every sip is a <br /> journey to flavor paradise. Crafted with{" "}
            <br /> precision, our rich blends ignite the senses <br /> and
            redefine coffee appreciation.
          </p>
          <p className={name}>@elonmusk</p>
        </div>
        <div className={boxDetails}>
          <p>
            "Discover a world of taste with Coffee <br /> Brocelle. Each cup is
            a masterpiece, <br /> blending aromas and flavours that <br /> dance
            on your palate. Join us in <br /> celebrating coffee at its finest."
          </p>
          <p className={name}>@JeffBezos</p>
        </div>
        <div className={boxDetails}>
          <p>
            "Welcome to the heart and soul of coffee <br /> passion -Coffee
            Borcelle. Our carefully <br /> curated beans are an ode to <br />{" "}
            craftsmanship, brewing a story of <br /> perfection in every cup."
          </p>
          <p className={name}>@MrBeast</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
