import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import Works from "@/components/organisms/Works/Works";
import About from "@/components/organisms/About/About";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Skill from "@/components/organisms/Skill/Skill";

export default async function Home() {

  return (
    <div>
      <Header />
        <main>
          <div className="bg-slate-100 space-y-10 p-20 sm:p-56">
            <TypingAnimation className="flex justify-center text-3xl sm:text-5xl md:text-8xl font-bold">Hi there 👋</TypingAnimation>
            <TypingAnimation className="flex justify-center text-xl sm:text-2xl md:text-5xl">I love doing and learning programming.</TypingAnimation>
          </div>
          <About />
          <Skill />
          <Works />
        </main>
      <Footer />
    </div>
  );
}