import Profile from "./asset/Profile.png";

const Testimonial = () => {
  return (
    <div className="h-[100vh] bg-[#000235] text-center text-white">
      <h1 className="text-9xl text-[#FFA500] font-Bebas">Testimonials</h1>
      <p className="translate-y-[-1.2rem] text-2xl">
        Read what people thing about services and graphics
      </p>
      <div className="flex justify-center gap-x-6">
        <Cast />
        <Cast />
        <Cast />
      </div>
    </div>
  );
};

function Cast() {
  return (
    <div className="h-72 w-[25%] bg-[#13124F] rounded-2xl p-2 pt-24 mt-16">
      <img
        className="h-60 absolute translate-x-[-2rem] transform: translate-y-[-13pc]"
        src={Profile}
        alt=""
      />
      <h3 className="text-[#FFA500] text-4xl font-Bebas mb-2">Amena.S.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fuga
        corrupti, hic doloribus voluptates temporibus! Iste deleniti quibusdam
        facilis dolore dolores ad vitae veniam laboriosam delectus
      </p>
    </div>
  );
}

export default Testimonial;
