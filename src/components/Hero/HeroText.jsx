"use client";
import { useRef, useLayoutEffect } from "react";
import style from "./heroText.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const animationRef = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
      }
      animationRef.current = requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };

    const cleanup = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    if (!slider.current || !firstText.current || !secondText.current)
      return cleanup;

    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cleanup();
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className={style.sliderContainer}>
      <div ref={slider} className={style.slider}>
        <p ref={firstText}>Abdul Ridho Ramadhan -</p>
        <p ref={secondText}>Abdul Ridho Ramadhan -</p>
      </div>
    </div>
  );
};

export default HeroText;
