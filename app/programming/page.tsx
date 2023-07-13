"use client";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { myfile } from "./data";
import { LinuxLinksList } from "./LinuxLinksList";
import DialogModal from "./DialogModal";
import Image from "next/image";
import { FlipCard } from "./FlipCard";
import Link from "next/link";
import { Button } from "@mui/material";
import { CardContent } from "./CardContent";
export default function Page() {
  const [openDialog, SetOpenDialog] = useState(false);
  const [selection, setSelection] = useState(0);
  const handleClose = () => {
    SetOpenDialog(false);
  };

  const openDialogBox = () => {
    SetOpenDialog(true);
  };
  const module = {
    backgroundSize: "cover",
    overflow: "hidden",
    height: "600px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <>
      <DialogModal
        title={myfile[selection].label}
        isOpened={openDialog}
        onClose={() => SetOpenDialog(false)}
      >
        <div className="flex flex-col items-center">
          <img
            width={200}
            height={200}
            className="rounded-lg"
            alt="modalImage"
            src={myfile[selection].image}
          />
          <p className="p-5">{myfile[selection].description}</p>
          <p className="p-5">{myfile[selection].stack}</p>
        </div>
      </DialogModal>
      <div className="flex-1">
        <div
          style={{
            marginTop: "30px",
            ...module,
          }}
          className="bg-[url('/images/programing_mid.png')] lg:bg-[url('/images/me3.png')]"
        >
          <div className="break-words">
            <p className="lg:text-8xl text-6xl font-jd_code text-[#2673dc] select-none p-5 text-center lg:text-left">
              About Me
            </p>
            <div className="w-full text-center lg:text-left px-10 lg:px-5 lg:w-4/5 text-4xl lg:text-6xl font-jd_code lg:p-5 bg-[#00000048] lg:bg-transparent rounded-3xl">
              Whenever I start working on a project, I always tend to be
              passionate, dedicated and diligent. Looking to use my coding and
              programming skills as efficiently as possible. I consistently look
              for an opportunity to hone my skills.
            </div>
          </div>
        </div>

        <div
          style={module}
          className="bg-[url('/images/programing_mid.gif')] lg:bg-[url('/images/me.gif')]"
        >
          <div className="break-words p-5">
            <div className="lg:text-8xl text-6xl font-jd_code text-[#2673dc] select-none text-center lg:text-left">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("BAHAA TUFFAHA")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("DEVELOPER")
                    .pauseFor(500)
                    .deleteAll(30)
                    .typeString("DESIGNER")
                    .pauseFor(500)
                    .deleteAll(20)
                    .pauseFor(500)
                    .start();
                }}
              />
            </div>
            <div className="mt-10">
              <p className="font-FiraMono text-[#538300]">
                BAHAA@my-os:<span className=" text-blue">~</span>
                <span className="text-white">
                  $<span> cd MyProjects</span>
                </span>
              </p>
              <p className="font-FiraMono text-[#538300]">
                BAHAA@my-os:<span className="text-blue">~</span>
                <span className="text-white">
                  $<span> ls</span>
                </span>
              </p>

              <div className="font-FiraMono text-white flex flex-row w-full text-sm select-none">
                <LinuxLinksList
                  data={myfile}
                  setSelection={setSelection}
                  openDialogBox={SetOpenDialog}
                />
              </div>
              <div className="flex flex-row">
                <p className="font-FiraMono text-[#538300]">
                  BAHAA@my-os:<span className="text-blue">~</span>
                  <span className="text-white">$</span>
                </p>
                <div>
                  <Typewriter
                    options={{
                      strings: [""],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          style={module}
          className="bg-[url('/images/programing_mid2.png')] lg:bg-[url('/images/me4_22.png')]"
        >
          <div className="grid grid-flow-row lg:grid-cols-3 grid-rows-3 w-full lg:w-3/4 justify-center pl-5 lg:mt-6">
            <FlipCard>
              <CardContent
                link="mailto:bahaa.tuffaha@yahoo.com"
                name="bahaa.tuffaha@yahoo.com"
                platform="Email"
              />
            </FlipCard>
            <FlipCard type={2}>
              <CardContent
                link="https://www.linkedin.com/in/bahaa-tuffaha/"
                name="bahaa-tuffaha"
                platform="Linkedin"
              />
            </FlipCard>
            <FlipCard type={3}>
              <CardContent
                link="https://github.com/bahaaTuffaha/"
                name="bahaaTuffaha"
                platform="Github"
              />
            </FlipCard>
          </div>
        </section>
      </div>
    </>
  );
}
