import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "button" | "submit",
  onClickFnc?: () => void,
};

export default function Button({ children, type, onClickFnc }:Props) {
    return (
        <button type={type} onClick={onClickFnc} className="bg-slate-300 p-5">
          {children}
        </button>
    );
}
