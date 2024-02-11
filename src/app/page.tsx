import Benifits from "../components/LandingPage/Benifits";
import Experties from "../components/LandingPage/Experties";
import HeroBanner from "../components/LandingPage/HeroBanner";
import Numbers from "../components/LandingPage/Numbers";

export default function Home() {


  

  return (
    <div>
      <main>
        <HeroBanner/>
        <Benifits/>
        <hr className="h-[2px] my-8 mx-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Experties/>
        <hr className="h-[2px] my-8 mx-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Numbers/>
      </main>
    </div>
  );
}
