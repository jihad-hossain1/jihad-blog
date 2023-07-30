// import image1 from "@/app/assets/"
import image1 from "@/app/assets/Mithai-Course.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h4>Homepage</h4>
      <Image src={image1} alt="photo home"></Image>
    </main>
  );
};

export default HomePage;
