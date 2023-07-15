"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "@olenbetong/react-image-lightbox";
import "@olenbetong/react-image-lightbox";
import { images, CustomImage } from "./images";
import { Box, Grow } from "@mui/material";
export default function Page() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <div>
      <Grow appear={true} in={true} {...(true ? { timeout: 1000 } : {})}>
        <Box className="cbox">
          <h1 className="text-7xl font-jd_code text-[#2673dc] text-center select-none mt-20">
            GALLERY
          </h1>
        </Box>
      </Grow>
      <Grow appear={true} in={true} {...(true ? { timeout: 1500 } : {})}>
        <Box className="cbox">
          <div className="flex justify-center space-x-10 my-5">
            <img
              className="lg:w-36 lg:h-36 w-20 h-20 hover:grayscale duration-500 ease-in-out"
              src="/images/Photoshop.png"
            />

            <img
              className="lg:w-36 lg:h-36 w-20 h-20 hover:grayscale duration-500 ease-in-out"
              height="140"
              width="140"
              src="/images/c4d.png"
            />

            <img
              className="lg:w-36 lg:h-36 w-20 h-20 hover:grayscale duration-500 ease-in-out"
              height="140"
              width="140"
              src="/images/AE.png"
            />
          </div>
        </Box>
      </Grow>
      <Grow appear={true} in={true} {...(true ? { timeout: 2000 } : {})}>
        <Box className="cbox">
          <div>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
            />
            {!!currentImage && (
              /* @ts-ignore */
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
          </div>
        </Box>
      </Grow>
    </div>
  );
}
