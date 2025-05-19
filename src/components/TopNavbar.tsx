import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-transparent py-5">
      <div className="w-fit px-20 xl:w-[100%] gap-30 bg-transparent flex flex-row justify-between items-center">
        <div className="w-full flex flex-row justify-between gap-1">
          <div>
            <Image
              src="/logo/app-logo.png"
              alt="App Logo"
              width={113}
              height={24}
            />
          </div>
          <ul>
            <Link href="#">About</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </ul>
          <Button>Start for Free</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
