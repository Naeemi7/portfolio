import contactImage from "@images/contact/contact.gif";

function Contact() {
  return (
    <>
      <section className="bg-primary dark:bg-primary">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col lg:flex-row items-center">
          {/* Contact Form */}
          <div className="lg:w-3/4 lg:pr-8">
            <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center lg:text-left text-gray-900 dark:text-h2Color">
              Contact Me
            </h2>
            <p className="mb-10 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-600 sm:text-xl">
              If you are interested in learning more about me or my work, or if
              you just want to reach out and say hello, feel free to send me a
              message. I'm excited to connect with you and hear your thoughts!
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-buttonColor hover:bg-h1Color hover:text-gray-600 focus:bg-h2Color focus:text-white"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Avatar Image */}
          <img
            src={contactImage}
            alt="Avatar"
            className="lg:w-1/3 rounded-full shadow-lg mx-auto lg:mx-0 mb-8 lg:mb-0" // Adjust the width and margin here
          />
        </div>
      </section>
    </>
  );
}

export default Contact;
