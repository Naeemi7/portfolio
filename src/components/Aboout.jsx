function About() {
  return (
    <>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Heading section */}
        <div className="col-span-12 flex justify-center">
          <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-primary">
            About Me
          </h2>
        </div>

        {/* Skills container */}
        <div className="grid grid-cols-5 gap-10">
          <div>HTML5</div>
          <div>CSS3</div>
          <div>JavaScript</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>

          <div>09</div>
        </div>
      </div>
    </>
  );
}

export default About;
