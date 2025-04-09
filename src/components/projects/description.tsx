import { ReactNode } from "react";

export default function Description({ children }: { children: ReactNode }) {
  return (
    <p className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-800 bg-clip-text text-transparent font-bold">
      {children}
    </p>
  );
}
