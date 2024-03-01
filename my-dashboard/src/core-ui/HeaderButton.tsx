import { type ReactNode } from "react";

type HeaderButtonProps = {
  text: string;
  children: ReactNode;
  hourSpent: number;
  icon: JSX.Element;
};

export default function HeaderButton({
  text,
  hourSpent,
  icon,
  children,
}: HeaderButtonProps) {
  return <div className=" rounded-xl px-4 py-4">{children}</div>;
}
