import { useEffect, useState } from "react";
import "./back-to-top.scss";

const BackToTop = () => {
  const [pathLength, setPathLength] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");

    if (progressPath) {
      const length = progressPath.getTotalLength();
      setPathLength(length);

      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
      progressPath.style.strokeDasharray = `${length} ${length}`;
      progressPath.style.strokeDashoffset = length;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    }

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;

      if (progressPath) {
        progressPath.style.strokeDashoffset = progress;
      }

      const percentage = (scroll / height) * 100;
      setScrollPercentage(percentage);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const offset = 50;
    const duration = 550;

    const handleScroll = () => {
      if (window.scrollY > offset) {
        const progressWrap = document.querySelector(".progress-wrap");
        if (progressWrap) {
          progressWrap.classList.add("active-progress");
        }
      } else {
        const progressWrap = document.querySelector(".progress-wrap");
        if (progressWrap) {
          progressWrap.classList.remove("active-progress");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const progressWrap = document.querySelector(".progress-wrap");
    if (progressWrap) {
      progressWrap.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", handleScroll);
      if (progressWrap) {
        progressWrap.removeEventListener("click", handleClick);
      }
    };
  }, [pathLength]);

  return (
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {Math.round(scrollPercentage)}%
        </text>
      </svg>
    </div>
  );
};

export default BackToTop;
