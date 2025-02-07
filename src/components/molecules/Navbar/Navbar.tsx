import NavButton from "@/components/atoms/NavButton/NavButton";

export default function Navbar() {
    return (
        <ul className="flex gap-3 sm:gap-5">
          <li><a href="#About"><NavButton>About</NavButton></a></li>
          <li><a href="#Skill"><NavButton>Skill</NavButton></a></li>
          <li><a href="#Works"><NavButton>Works</NavButton></a></li>
        </ul>
    );
}
