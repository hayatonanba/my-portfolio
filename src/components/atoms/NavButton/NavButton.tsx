import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode,
    link: string
}

export default function NavButton({ children, link }:Props) {
    return (
        <Link href={link}><button type="button" className="hover:underline underline-offset-2">{children}</button></Link>
    );
}

