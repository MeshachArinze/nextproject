import Link from "next/link";
import Image from "next/image";
import { UserButton, auth } from "@clerk/nextjs";

import CustomButton from "./CustomButton";

const NavBar = () => {
  const { userId } = auth();

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex flex-row justify-center items-center space-x-6">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="text-primary-blue rounded-full bg-white min-w-[130px] text-center"
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-primary-blue rounded-full bg-white min-w-[130px] text-center"
              >
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link
              href="profile"
              className="text-primary-blue rounded-full bg-white min-w-[130px] text-center"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto ">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
