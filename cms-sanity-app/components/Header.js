import Link from "next/link";
import Logo from "../assets/logo/logo2.svg";

const Header = (props) => {
  return (
    <div className={!props.hasMainContainer && "container mx-auto px-4"}>
      <header className="relative bg-white text-temp-primary">
        <div className="max-w-full mx-auto">
          <div className="pt-5 pb-8 flex justify-between items-center md:justify-start md:space-x-10">
            <div className="sm:mt-3 flex justify-start lg:w-0 lg:flex-1 pointer">
              <Link href="/">
                {/* Adding the commented span below prevents the link form working correctly. Hmmn
                NextJS gotcha. Even enclosing in a div or fragment causes the same problem */}
                {/* <span className="sr-only">TempOwn</span> */}
                <img
                  className="h-6 w-auto md:h-8 lg:h-9"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
