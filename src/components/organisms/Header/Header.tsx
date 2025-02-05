import Navbar from "@/components/molecules/Navbar/Navbar";
import Link from "next/link";
import { GiDart } from "react-icons/gi";

export default function Header() {
    return (
      <div className="border-gray-300 border-b py-4">
        <header className="container mx-auto flex justify-between items-center">
          <Link href="/"><h1 className="flex gap-3 text-xl sm:text-2xl md:text-4xl font-bold"><GiDart className="size-8 sm:size-10" />My Portfolio</h1></Link>
          <Navbar />
        </header>
      </div>
    );
}
