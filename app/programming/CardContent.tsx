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
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgba(255, 217, 0, 0.767)",
              textTransform: "capitalize",
            }}
          >
            {platform}
          </Button>
        </Link>
      </div>
    </>
  );
};
