"use client";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";

export const CustomBody = ({
  inter,
  children,
}: {
  inter: any;
  children: ReactElement;
}) => {
  const [isProg, setIsProg] = useState(true);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName.includes("programming")) {
      setIsProg(true);
    } else {
      setIsProg(false);
    }
  }, [pathName]);
  return (
    <body
      className={inter.className}
      style={{ backgroundColor: isProg ? "#8AD0EE" : "#000" }}
    >
      {children}
    </body>
  );
};
