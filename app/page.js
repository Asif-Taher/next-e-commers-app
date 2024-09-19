
import BestSeller from "@/components/Home/BestSeller";
import Hero from "@/components/Home/Hero";
import LatestCollecton from "@/components/Home/LatestCollecton";
import OurPolicy from "../components/Home/OurPolicy";
import NewsLetterBox from "../components/Home/NewsLetterBox";

export default function Home() {
  return (
   <>
    <Hero />
   <LatestCollecton />
   <BestSeller />
   <OurPolicy />
   <NewsLetterBox />
   </>
  );
}
