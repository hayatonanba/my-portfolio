import NavButton from "@/components/atoms/NavButton/NavButton";

export default function Navbar() {
    return (
        <ul className="flex gap-5">
          <li><NavButton link="/">About</NavButton></li>
          <li><NavButton link="/">Skill</NavButton></li>
          <li><NavButton link="/">Work</NavButton></li>
        </ul>
    );
}
