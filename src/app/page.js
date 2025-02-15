// import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div>
          {" "}
          <Sidebar />
        </div>
        <div>
          <Hero />{" "}
        </div>
      </div>
    </>
  );
}
