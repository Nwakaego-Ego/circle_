// import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Hero from "./components/hero/hero";
import Circle from "./components/circle/circle";
import Post from "./components/post/post";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="sidehero-container">
        <div>
          {" "}
          <Sidebar />
          <Post />
        </div>
        <div className="herocircle-container">
          <div>
            <Hero />{" "}
          </div>
          <div>
            <Circle />
          </div>
        </div>
      </div>
    </>
  );
}
