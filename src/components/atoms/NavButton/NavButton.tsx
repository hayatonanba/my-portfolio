import type { ReactNode } from "react";

type Props = {
    children: ReactNode,
}

export default function NavButton({ children }:Props) {
    return (
        <button type="button" className="hover:underline underline-offset-2">{children}</button>
    );
}

