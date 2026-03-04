import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-black-200">AXON</h1>
      </main>
    </div>
  );
}
