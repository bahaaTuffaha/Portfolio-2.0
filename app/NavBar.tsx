"use client";
import styles from "./programming/NumorphicButton.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
export const NavBar = () => {
  const pathName = usePathname();
  const [buttonPressed, setButtonPressed] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [hidingProcess, setHidingProcess] = useState(false);
  const { push } = useRouter();
  const [springs, api] = useSpring(() => ({
    from: {
      top: 0,
    },
  }));

  useEffect(() => {
    if (pathName.includes("programming")) {
      setButtonPressed(1);
    } else {
      setButtonPressed(2);
    }
  }, []);

  function logit() {
    setScrollY(document.documentElement.scrollTop);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    if (scrollY < 10) {
      setHidingProcess(true);
      api.start({
        from: {
          top: -100,
        },
        to: {
          top: 0,
        },
      });
    } else if (scrollY > 10 && hidingProcess) {
      api.start({
        from: {
          top: 0,
        },
        to: {
          top: -100,
        },
      });
      setHidingProcess(false);
    }
  }, [scrollY]);

  return (
    <animated.div
      style={{ position: "fixed", ...springs }}
      className="h-14 w-full flex justify-center items-center space-x-5 bg-gray-400 rounded-b-xl ease-in-out "
    >
      <div
        style={{
          marginRight: scrollY,
          cursor: "pointer",
        }}
        onClick={() => {
          setButtonPressed(1);
          push("/programming");
        }}
        className={
          buttonPressed == 1 ? styles.neumorphicPressed : styles.neumorphic
        }
      >
        Programming
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setButtonPressed(2);
          push("/modeling");
        }}
        className={
          buttonPressed == 2 ? styles.neumorphicPressed : styles.neumorphic
        }
      >
        3D Modeling
      </div>
    </animated.div>
  );
};
