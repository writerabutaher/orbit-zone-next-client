import CallToAction from "@/components/Home/CallToAction";
import Categories from "@/components/Home/Categories";
import Explore from "@/components/Home/Explore";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Sponsor from "@/components/Home/Sponsor";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Explore />
      <Pricing />
      <Sponsor />
      <CallToAction />
    </>
  );
}

export default Home;
