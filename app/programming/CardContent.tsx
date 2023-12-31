import { Button } from "@mui/material";
import Link from "next/link";

export const CardContent = ({
  platform,
  name,
  link,
}: {
  platform: string;
  name: string;
  link: string;
}) => {
  return (
    <>
      <div className="w-full m-5">
        <p className="text-[#fffafa] text-sm select-none">{platform}</p>
      </div>
      <div className="w-full flex flex-col text-center">
        <span className="font-bold text-xs my-2">{name}</span>

        <Link target="_blank" href={link}>
          <div className="bg-[#ffd900c3] w-full font-FiraMono">{platform}</div>
        </Link>
      </div>
    </>
  );
};
