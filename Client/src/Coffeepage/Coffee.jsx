import "tailwindcss/tailwind.css";
import Header from "./Header";
import Discover from "./Discover";
import Review from "./Review";
import Footer from "./Footer";

function Coffee() {
  return (
    <div>
      <Header />
      <Discover />
      <Review />
      <Footer />
    </div>
  );
}

export default Coffee;
