import SocialMediaIcons from "../Main/SocialMediaIcons";

function Footer() {
  return (
    <footer className="bg-primary border-gray-200 dark:bg-primary">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Digital Portfolio™
          </a>
          . All Rights Reserved.
        </span>

        {/* Social Media Icons */}
        <SocialMediaIcons />
      </div>
    </footer>
  );
}

export default Footer;
