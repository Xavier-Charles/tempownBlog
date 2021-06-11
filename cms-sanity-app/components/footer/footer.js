import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../assets/logo/logo2.svg";
import ContactUsModal from "../modals/ContactUsModal";
import AlertModal2 from "../modals/AlertModal2";

const Column = ({ title, links = [], isTargetLink = false, className }) => {
  return (
    <div className={`mb-10 relative w-3/6 md:w-auto ${className}`}>
      <h3 className="text-base md:text-lg mb-5 font-bold font-serif text-temp-primary">
        {title}
      </h3>

      <ul className="space-y-5 text-temp-gray text-sm md:text-sm-15">
        {links.map((link) => (
          <li key={link.id} className="hover:text-temp-primary">
            {isTargetLink ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.linkName}
              </a>
            ) : (
              <Link href={link.url}>{link.linkName}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RightReservedAndSocialLink = () => {
  return (
    <div className="relative flex flex-wrap justify-between py-6 w-full text-sm text-temp-gray border-b border-temp-green-100 mb-8">
      <div className="pb-6 md:pb-0">2021 TempOwn. All Rights Reserved</div>
      <div className="inline-flex flex-wrap w-6/12 md:w-3/12 lg:w-3/12 xl:w-2/12 justify-between">
        <a
          href="https://twitter.com/TempOwnHQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M16.2603 3.96297C16.2718 4.13192 16.2718 4.3009 16.2718 4.46984C16.2718 9.62288 12.5345 15.5604 5.70376 15.5604C3.59934 15.5604 1.64444 14.9207 0 13.8105C0.298998 13.8467 0.586457 13.8588 0.896959 13.8588C2.63336 13.8588 4.23181 13.2433 5.50826 12.1934C3.87533 12.1572 2.50688 11.0349 2.0354 9.49015C2.2654 9.52633 2.49538 9.55048 2.73689 9.55048C3.07037 9.55048 3.40388 9.50218 3.71434 9.41775C2.01242 9.05568 0.735938 7.48685 0.735938 5.59217V5.54391C1.2304 5.83355 1.80542 6.01456 2.41485 6.03867C1.41439 5.33871 0.758946 4.14399 0.758946 2.79236C0.758946 2.06829 0.942904 1.40455 1.26491 0.825278C3.09334 3.19061 5.84174 4.7353 8.92357 4.90428C8.86609 4.61464 8.83158 4.31297 8.83158 4.01126C8.83158 1.86313 10.4875 0.113281 12.5459 0.113281C13.6154 0.113281 14.5813 0.583934 15.2598 1.34422C16.0992 1.17528 16.9042 0.849423 17.6172 0.402916C17.3412 1.30804 16.7547 2.06833 15.9843 2.55102C16.7318 2.46658 17.4562 2.24931 18.1232 1.94764C17.6173 2.71996 16.9848 3.40781 16.2603 3.96297Z"
              fill="#08A05C"
            />
          </svg>
        </a>
        <a
          href="https://facebook.com/tempownhq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M18.5337 1.04868V17.9676C18.5337 18.5492 18.0847 19.0163 17.5345 19.0163H12.9147V11.6543H15.2691L15.621 8.78425H12.9107V6.95013C12.9107 6.11798 13.1291 5.55331 14.2658 5.55331H15.7141V2.98469C15.4633 2.95073 14.6057 2.87006 13.6024 2.87006C11.515 2.87006 10.083 4.20744 10.083 6.66567V8.78425H7.72047V11.6543H10.083V19.0205H1.40972C0.859556 19.0205 0.410522 18.5492 0.410522 17.9718V1.04868C0.410522 0.471267 0.859556 0 1.40972 0H17.5304C18.0847 0 18.5337 0.471267 18.5337 1.04868Z"
              fill="#08A05C"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/tempownhq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M9.87794 4.63247C7.30653 4.63247 5.23242 6.80921 5.23242 9.50786C5.23242 12.2065 7.30653 14.3832 9.87794 14.3832C12.4493 14.3832 14.5235 12.2065 14.5235 9.50786C14.5235 6.80921 12.4493 4.63247 9.87794 4.63247ZM9.87794 12.6775C8.21623 12.6775 6.85775 11.256 6.85775 9.50786C6.85775 7.75968 8.21218 6.33822 9.87794 6.33822C11.5437 6.33822 12.8981 7.75968 12.8981 9.50786C12.8981 11.256 11.5396 12.6775 9.87794 12.6775ZM15.797 4.43304C15.797 5.06527 15.3119 5.57021 14.7135 5.57021C14.1111 5.57021 13.6299 5.06103 13.6299 4.43304C13.6299 3.80505 14.1151 3.29587 14.7135 3.29587C15.3119 3.29587 15.797 3.80505 15.797 4.43304ZM18.8738 5.58718C18.8051 4.06389 18.4736 2.71456 17.4102 1.60285C16.3509 0.491146 15.0652 0.143207 13.6138 0.0668297C12.1178 -0.0222766 7.63402 -0.0222766 6.13808 0.0668297C4.69065 0.138963 3.40494 0.486902 2.34161 1.59861C1.27828 2.71032 0.950785 4.05964 0.87801 5.58294C0.793105 7.1529 0.793105 11.8586 0.87801 13.4285C0.946742 14.9518 1.27828 16.3012 2.34161 17.4129C3.40494 18.5246 4.6866 18.8725 6.13808 18.9489C7.63402 19.038 12.1178 19.038 13.6138 18.9489C15.0652 18.8768 16.3509 18.5288 17.4102 17.4129C18.4695 16.3012 18.801 14.9518 18.8738 13.4285C18.9587 11.8586 18.9587 7.15715 18.8738 5.58718ZM16.9412 15.1131C16.6259 15.9447 16.0154 16.5854 15.2189 16.9207C14.0262 17.4171 11.196 17.3025 9.87794 17.3025C8.55989 17.3025 5.72568 17.4129 4.53701 16.9207C3.74456 16.5897 3.13406 15.949 2.81465 15.1131C2.34161 13.8613 2.45077 10.8911 2.45077 9.50786C2.45077 8.12459 2.34565 5.15013 2.81465 3.90265C3.13001 3.07099 3.74052 2.43027 4.53701 2.09506C5.72972 1.59861 8.55989 1.71318 9.87794 1.71318C11.196 1.71318 14.0302 1.60285 15.2189 2.09506C16.0113 2.42603 16.6218 3.06674 16.9412 3.90265C17.4143 5.15438 17.3051 8.12459 17.3051 9.50786C17.3051 10.8911 17.4143 13.8656 16.9412 15.1131Z"
              fill="#08A05C"
            />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/channel/UCVxeZLtzSOrq5DtbXigzrSQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M25.4614 2.97607C25.165 1.80462 24.2916 0.882027 23.1826 0.568931C21.1725 0 13.1124 0 13.1124 0C13.1124 0 5.05236 0 3.04225 0.568931C1.93329 0.882076 1.05989 1.80462 0.76345 2.97607C0.224854 5.09938 0.224854 9.52947 0.224854 9.52947C0.224854 9.52947 0.224854 13.9596 0.76345 16.0829C1.05989 17.2543 1.93329 18.1385 3.04225 18.4516C5.05236 19.0205 13.1124 19.0205 13.1124 19.0205C13.1124 19.0205 21.1725 19.0205 23.1826 18.4516C24.2916 18.1385 25.165 17.2543 25.4614 16.0829C26 13.9596 26 9.52947 26 9.52947C26 9.52947 26 5.09938 25.4614 2.97607V2.97607ZM10.4763 13.5517V5.50728L17.213 9.52957L10.4763 13.5517V13.5517Z"
              fill="#08A05C"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
 
const ContactBtn = ({ handleShowContactUsModal }) => {
  return (
    <div className="pt-4 pb-4">
      <button
        onClick={handleShowContactUsModal}
        className="inline-flex items-center font-bold text-xs text-white bg-temp-green-500 rounded-md py-3 px-4 focus:outline-none"
      >
        <span className="pr-2">CONTACT US</span>{" "}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5906 1.01074H2.39476C1.32874 1.01074 0.461426 1.87789 0.461426 2.94408V9.18371C0.461426 10.2475 1.32497 11.1133 2.3879 11.117V13.9485L6.45704 11.117H12.5906C13.6566 11.117 14.5239 10.2497 14.5239 9.18371V2.94408C14.5239 1.87789 13.6566 1.01074 12.5906 1.01074ZM13.6999 9.18371C13.6999 9.79534 13.2023 10.2931 12.5906 10.2931H6.19852L3.21187 12.3714V10.2931H2.39476C1.78305 10.2931 1.2854 9.79534 1.2854 9.18371V2.94408C1.2854 2.33228 1.78305 1.83472 2.39476 1.83472H12.5906C13.2023 1.83472 13.6999 2.33228 13.6999 2.94408V9.18371Z"
            fill="#4CE797"
          />
          <path
            d="M4.22522 3.92212H10.7602V4.74609H4.22522V3.92212Z"
            fill="#4CE797"
          />
          <path
            d="M4.22522 5.67993H10.7602V6.50391H4.22522V5.67993Z"
            fill="#4CE797"
          />
          <path
            d="M4.22522 7.43774H10.7602V8.26172H4.22522V7.43774Z"
            fill="#4CE797"
          />
        </svg>
      </button>
    </div>
  );
};

const AddressColumn = ({ handleShowContactUsModal }) => {
  return (
    <div className="max-w-full w-full lg:w-auto lg:max-w-sm order-1 lg:order-3 mb-3 lg:mb-0">
      <div className="space-y-5 text-sm md:text-sm-15 mt-2 mb-4">
        <p className="text-temp-gray leading-7">
          <strong>Reeddi Inc.</strong>
          <br />
          100 College St Suite 150 <br />
          Toronto, ON M5G 1L5 Canada.
        </p>
      </div>
      <ContactBtn handleShowContactUsModal={handleShowContactUsModal} />
    </div>
  );
};

const Footer = (props) => {
  const columnData1 = [
    {
      id: "j1",
      url: "/about",
      linkName: "About",
    },

    {
      id: "j2",
      url: "/careers",
      linkName: "Careers",
    },

    {
      id: "j3",
      url: "/lender",
      linkName: "Become A Lender",
    },
  ];

  const columnData2 = [
    {
      id: "k1",
      url: "/faqs",
      linkName: "FAQs",
    },
    {
      id: "k2",
      url: "/blog",
      linkName: "Blog",
    },
    {
      id: "k3",
      url: "/policy",
      linkName: "Policies",
    },
    {
      id: "k4",
      url: "/terms-of-service",
      linkName: "Terms of Service",
    },
  ];

  const [showContactModal, setShowContactModal] = useState(false);
  const handleShowContactUsModal = () => {
    setShowContactModal(true);
  };

  const processSubmitFeedback = async (payload) => {
    await props.submitFeedbackApi(payload);
  };

  useEffect(() => {
    if (props.submitFeedbackStatus?.type === "success") {
      setShowContactModal(false);
    }
  }, [props.submitFeedbackStatus?.type]);

  return (
    <div className={!props.hasMainContainer && "container mx-auto px-4 "}>
      <footer className="pb-8">
        <div className="py-8 flex flex-wrap justify-between space-y-6 md:pr-9 border-t border-b border-temp-green-100">
          <div className="max-w-full lg:max-w-xs mt-5">
            <div className="mb-7 pointer">
              <Link href={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="space-y-5 text-sm md:text-sm-15">
              <p className="text-temp-gray">
                TempOwn is a secure and fully insured peer-to-peer rental
                marketplace for essential items and equipment.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-start sm:justify-between lg:justify-around  flex-grow lg:ml-20">
            <Column
              title="The Company"
              links={columnData1}
              className=" order-2 lg:order-1"
            />

            <Column
              title="Learn"
              links={columnData2}
              className=" order-3 lg:order-2"
            />

            <AddressColumn
              handleShowContactUsModal={handleShowContactUsModal}
            />
          </div>
        </div>

        <RightReservedAndSocialLink />
      </footer>

      {showContactModal && (
        <ContactUsModal
          show={showContactModal}
          handleCloseModal={() => setShowContactModal(false)}
          processSubmitFeedback={processSubmitFeedback}
        />
      )}

      {/* trigger feedback submitted status modal */}
      {props.submitFeedbackStatus?.type && (
        <AlertModal2
          show={props.submitFeedbackStatus.type ? true : false}
          type={props.submitFeedbackStatus.type}
          content={props.submitFeedbackStatus.message}
        />
      )}
    </div>
  );
};

export default Footer;
