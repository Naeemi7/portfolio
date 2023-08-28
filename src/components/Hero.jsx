import React, { useState, useEffect } from "react";
import heroImage from "../assets/images/hero/hero-image.png";

function Hero() {
  // Phrases to display and cycle through
  const phrases = [
    "Front End Web Developer",
    "Full Stack Web Developer",
    "Information Technology Professional",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up interval for typing effect
    const interval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      setDisplayText(currentPhrase.substring(0, currentIndex + 1));
      setCurrentIndex((prevIndex) => prevIndex + 1);

      // If current phrase is fully typed
      if (currentIndex === currentPhrase.length - 1) {
        clearInterval(interval);
        // Set timeout for phrase transition
        setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
          setDisplayText("");
          setCurrentIndex(0);
        }, 1500); // Delay before switching to the next phrase
      }
    }, 200); // Adjust the typing speed here

    // Clear interval on cleanup
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, currentPhraseIndex]);

  return (
    <section className="bg-white dark:bg-primary h-70vh">
      {" "}
      {/* Set height to 70% of viewport */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-h1Color">
            Abdulwase Naeemi
          </h1>
          <h2 className="text-4xl font-extrabold dark:text-h2Color mb-4">
            {displayText}
          </h2>
          <p className="max-w-2xl mb-6 font-light text- lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-buttonColor hover:bg-h1Color hover:text-gray-600 focus:bg-h2Color focus:text-white"
          >
            Download Resume
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
