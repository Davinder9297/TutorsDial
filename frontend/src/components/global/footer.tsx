"use client";
import Image from "next/image";
import MaxFullWidthWrapper from "./max-full-width-wrapper";
import MaxWidthWrapper from "./max-width-wrapper";
import CustomButton from "../common/button";
import InputField from "../common/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
    const router = useRouter();
  return (
    <MaxFullWidthWrapper>
    <footer className="relative bg-[var(--secondary-bg)] text-[var(--secondary-button)] mt-12 pb-12 font-medium">
      {/* Curved Background */}
      <MaxWidthWrapper>
        <div className="absolute top-2 left-0 w-full h-32 bg-[var(--secondary-bg)] md:rounded-t-[100%] rounded-t-[40%] -translate-y-[100%] z-0"></div>

      <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/images/full-logo.png" alt="onlearn" width={250} height={250} className="cursor-pointer" onClick={()=>router.push("/")} />
          </div>
          {/* <div className="flex items-start gap-2 text-sm">
            <Image src={"/images/footer-icons/Location.png"} alt="" width={40} height={40}/>
            <p className="max-w-[50%]">
              <span className="font-bold ">Address:<br/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div> */}
          <div className="flex items-center gap-2 text-sm">
<Image src={"/images/footer-icons/Calling.png"} alt="" width={20} height={20} />
            <Link href='tel:+919884426804'>Tel: +91 9884426804</Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
<Image src={"/images/footer-icons/Time-Circle.png"} alt="" width={20} height={20} />
            <span>Response time: 10am-8pm (Monday - Friday) </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
<Image src={"/images/footer-icons/Message.png"} alt="" width={20} height={20} />
            <span>Email: <Link href="mailto:info@tutorsdial.com">info@tutorsdial.com</Link></span>
          </div>
        </div>

        <div className="grid-cols-2 grid gap-10">
        <div>
          <h4 className="font-semibold mb-3 text-[var(--secondary-head)] text-[15px] md:mt-8">Categories</h4>
          <ul className="space-y-1 text-sm text-[#0B7077]">
            <li>Kg</li>
            <li>School exams</li>
            <li>Competitive exams</li>
            <li>IT Courses</li>
            <li>Hobbies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[var(--secondary-head)] text-[15px] md:mt-8">Links</h4>
          <ul className="space-y-1 text-sm text-[#0B7077]">
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>
        </div>

        <div className="md:mt-8 text-[var(--primary-text)]">
          <h4 className="font-semibold mb-3 text-[15px] text-center">Stay up to date with the latest courses</h4>
          <div className="mt-4 flex items-center rounded-xl bg-white overflow-hidden shadow-sm max-w-md">
            <InputField placeholder="Email" type="email" className="!outline-none border-none py-0"/>
            <CustomButton bgVariant="secondary" title="Send" className="!w-fit rounded-full mr-2 !py-2"/>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </footer>
    </MaxFullWidthWrapper>
  );
};

export default Footer;
