import React, { useState } from "react";
import { FaMediumM, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Disclosure } from "@headlessui/react";
import SidebarButton from "./SidebarButton";
import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import NavMenu from "utils/NavMenu";

function SideBar() {
  let [open, setOpen] = useState(false);
  // const route = useSelectedLayoutSegment();
  // let pathName = usePathname();

  let sidebarHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="w-[220px] fixed top-0 left-0 h-screen overflow-y-auto menu px-3 z-10 bg-main flex flex-col">
      {/* <div
        className="h-10 w-10 bg-gray-800 md:hidden  absolute right-5 top-3  flex items-center shadow rounded-full  justify-center cursor-pointer"
        onClick={() => {
          sidebarHandler();
        }}
      >
        <FaCross className="h-5 w-5 text-white" />
      </div> */}

      <div className="flex-1">
        <div className="w-full py-6">
          <Link href="/" className="h-[72px] w-[72px] mx-auto relative flex">
            <Image src="/images/logos/logo-white.svg" fill={true} alt="logo" />
          </Link>
        </div>

        <div className="space-y-2 mb-8">
          {NavMenu.map((menuItem, id) => (
            <div key={id} className="mx-auto w-full rounded-2xl">
              <Disclosure className="">
                {({ open }) => (
                  <div className={``}>
                    <SidebarButton
                      as={Disclosure.Button}
                      className={`group w-full justify-between ${
                        // route == menuItem.title
                        false
                          ? "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37]"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div className="w-[1.9rem]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={menuItem.iconImg}
                            className={`group-hover:invert h-[1.2rem] ${
                              // route == menuItem.title
                              false && "invert"
                            }`}
                            alt=""
                          />
                        </div>

                        <p
                          className={`text-sm font-semibold group-hover:text-black ${
                            // route == menuItem.title
                            false ? "text-black" : "text-white"
                          }`}
                        >
                          {menuItem.title}
                        </p>
                      </div>
                      {menuItem.subMenus.length !== 0 && (
                        <BiChevronDown
                          className={`text-2xl ${
                            // route == menuItem.title
                            false ? "text-black" : "text-white"
                          } ${
                            open ? "rotate-180 transform " : ""
                          } group-hover:text-black transition-transform duration-200 ${
                            menuItem.hasSubMenu ? "block" : "hidden"
                          }`}
                        />
                      )}
                    </SidebarButton>

                    {/* <Disclosure.Button
                        className={`group flex w-full justify-between rounded-lg items-center  hover:text-black  hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37] px-3 h-[40px] text-left text-base font-normal `}
                      >
                        <div className="flex items-center">
                          <div className="w-[1.9rem]">
                            <img
                              src={menuItem.iconImg}
                              className="group-hover:invert h-[1.2rem]"
                              alt=""
                            />
                          </div>

                          <p className="text-sm font-semibold group-hover:text-black">
                            {menuItem.title}
                          </p>
                        </div>
                        {menuItem.subMenus.length !== 0 && (
                          <FaArrowDown
                            className={`${
                              open ? "rotate-180 transform " : ""
                            } h-3 w-3 transition-transform duration-200 ${
                              menuItem.hasSubMenu ? "block" : "hidden"
                            }`}
                          />
                        )}
                      </Disclosure.Button> */}

                    <Disclosure.Panel
                      className={`${
                        open ? "h-auto" : "h-[209px]"
                      }   pt-4 pb-2 text-sm text-white flex justify-between items-center transition-[height] `}
                    >
                      <div
                        className={`w-[2px] h-auto  bg-[#11ff394e] relative mx-4 ml-5`}
                      >
                        {menuItem.subMenus.map((subMenu, i) => (
                          <div
                            key={i}
                            className="w-0 h-[42.5px] border  border-transparent  group-hover/item:border-[#11FF37] cursor-pointer mx-auto"
                          />
                        ))}
                      </div>
                      <div className="h-full w-full space-y-1">
                        {menuItem.subMenus.map((subMenu, i) => (
                          <Link
                            key={i}
                            href={subMenu.link}
                            className={`group/item flex group w-full cursor-pointer relative justify-between rounded-lg items-center  px-3 py-2 text-left text-sm font-medium  hover:text-black hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37] ${
                              // pathName == subMenu.link
                              false
                                ? "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37] text-black"
                                : "bg-transparent text-white"
                            }`}
                          >
                            <div
                              className={`w-0 h-[42.5px] top-0 -left-[18px]  absolute  group-hover/item:border  group-hover/item:border-[#11FF37] cursor-pointer mx-auto ${
                                // pathName == subMenu.link
                                false
                                  ? "border border-[#11FF37]"
                                  : "border-[0px]"
                              }`}
                            />
                            <span>{subMenu.label}</span>
                          </Link>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="pb-4">
          <SidebarButton className="w-full space-x-3" variant={1}>
            <img
              src="/images/sidebar-icons/wallet.svg"
              className="h-[1.1rem]"
              alt=""
            />
            <span className="font-normal text-black font-moment text-xs">
              Connect Wallet
            </span>
          </SidebarButton>
          {/* <div className="flex space-x-2 justify-center w-full mt-2 rounded-lg items-center bg-gradient-to-b from-[#ACFFB9] to-[#11FF37] h-[50px] ">
          </div> */}
          <div className="flex w-full mt-2 rounded-lg justify-between items-center py-3 text-white">
            <div className="flex items-center space-x-2">
              <div className="relative w-[24px] h-[24px]">
                <Image
                  src="/images/logos/logo-green.svg"
                  fill={true}
                  className="mr-3"
                  alt="green-logo"
                />
              </div>
              <p className="text-base font-medium">$0.235</p>
            </div>
            <button className="border-green border-1 text-white py-1 w-20 text-center cursor-pointer text-sm rounded-lg transition-all duration-300 hover:bg-green hover:text-black">
              Buy
            </button>
          </div>
          <div className="flex w-full  rounded-lg justify-between items-center py-1 text-white">
            <div className="flex items-center space-x-2">
              <img
                src="/images/sidebar-icons/wallet.svg"
                className="h-[1.1rem] invert"
                alt=""
              />

              <p className="text-base font-semibold">Balance</p>
            </div>
            <div className="text-white bg-[#2B2B2B] py-1 w-20 text-center cursor-pointer text-sm rounded-lg ">
              127,678 $
            </div>
          </div>
        </div>

        <div className="py-4 border-t-1 border-grey">
          {/* <div className="flex justify-between items-center ">
            <p className="text-xs text-white opacity-70">
              where the axis chatter
            </p>
            <FaArrowCircleUp className="h-4 w-4 text-[#848484]" />
          </div> */}

          <div className="flex items-center justify-between">
            <SocialIcon>
              <FaTelegramPlane />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <img
                src="/images/gitbook.svg"
                className="h-[1.4em] invert group-hover:invert-0 transition-all duration-200"
                alt=""
              />
            </SocialIcon>
            <SocialIcon>
              <FaMediumM />
            </SocialIcon>
          </div>
        </div>
      </div>

      <img
        src="/images/sidebar-icons/bg-blob.png"
        className="absolute left-0 top-0 -z-10"
        alt=""
      />
    </div>
  );
}

export default SideBar;
