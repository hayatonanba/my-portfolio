import NavButton from "@/components/atoms/NavButton/NavButton";

export default function Navbar() {
    return (
        <ul className="flex gap-3 sm:gap-5">
          <li><NavButton link={"#About"}>About</NavButton></li>
          <li><NavButton link={"#Skill"}>Skill</NavButton></li>
          <li><NavButton link={"#Work"}>Work</NavButton></li>
        </ul>
    );
}
