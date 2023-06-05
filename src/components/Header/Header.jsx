import { useState } from "react";
import Container from "../Shared/Container/Container";
import styles from "./Header.module.css";
import Navigation from "./components/Navigation/Navigation";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <header>
      <div className={styles.header}>
        <Container>
          <div className={styles.innerHeader}>
            <div className={styles.headerLogo}></div>
            <Navigation />
            <div className={styles.headerIcon}>
              <a href="">
                <i
                  className="fa-brands fa-twitter"
                  style={{ color: "#1da1f2", fontSize: "22px" }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-medium"
                  style={{ fontSize: "22px" }}
                ></i>
              </a>
              <a href="">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#0a66c2", fontSize: "22px" }}
                ></i>
              </a>
              <i
                className="fa-brands fa-square-instagram"
                style={{ color: "#f700ba", fontSize: "22px" }}
              ></i>
            </div>
            <div className={styles.mobileMenuToggler}>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>

                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
          
                  
                      <ul className={styles.menuList}>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <li>
                          <Link to="/">Homepage</Link>
                        </li>
                      </Disclosure.Button>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        </Disclosure.Button>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        </Disclosure.Button>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        </Disclosure.Button>
                      </ul>
                      
                    </Disclosure>
                  </div>
                  <div className="py-6"></div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </Container>
      </div>
    </header>
  );
};

export default Header;
