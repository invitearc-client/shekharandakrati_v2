"use client";
import Link from "next/link";
import { SquarePen } from "lucide-react";
export default function Families() {
  return (
    <>
      <section className="w-full overflow-x-clip bg-[url('/assets/hero_bg.webp')] bg-cover bg-no-repeat py-20 pt-10 md:pt-20 lg:pt-30 px-12 lg:h-350">
        <h2 className="mt-4 text-center text-[24px] leading-tight text-[#8c1034] font-cormorant-upright  md:text-4xl lg:text-[60px] font-bold">
          Cordially Invited
        </h2>

        <p className="text-center text-[18px] tracking-medium text-[#C99333] font-cormorant-garamond md:text-2xl font-semibold">
          Vinay - Dr. Ram Kishor Agrawal <br />
          Kanak - Mukesh Agrawal
          <br />
          Shikha - Munesh Agrawal
          <br />
          Savita - Arun Agrawal
        </p>

        <h2 className="mt-4 text-center text-[24px] leading-tight text-[#8c1034] font-cormorant-upright  md:text-4xl lg:text-[60px] font-bold">
          Welcome by
        </h2>

        <p className="text-center text-[18px] tracking-medium text-[#C99333] font-cormorant-garamond md:text-2xl font-semibold">
          Shalini - Ambrish Agrawal <br />
          Bhawna - Manoj Agrawal <br />
          Gunjan - Prateek Mittal
          <br />
          Harshita - Tarun Garg
          <br />
          Divya - Paras Agrawal
          <br />
          Shrasthi - Rishabh Agrawal
        </p>

        <h2 className="mt-4 text-center text-[24px] leading-tight text-[#8c1034] font-cormorant-upright font-bold  md:text-4xl lg:text-[60px]">
          RSVP
        </h2>

        <p className="text-center text-[18px] tracking-medium text-[#C99333] font-cormorant-garamond md:text-2xl font-semibold">
          Vineet - Ekta <br />
          Tarun - Swati <br />
          Dipesh - Ridhima <br />
          Dr. Devanshu - Deeksha <br />
          Namit, Dr. Rohan, Parth
        </p>

        <h2 className="mt-4 text-center text-[24px] leading-tight text-[#8c1034] font-cormorant-upright font-bold  md:text-4xl lg:text-[60px]">
          Chachu's Little Stars
        </h2>

        <p className="text-center text-[18px] tracking-medium text-[#C99333] font-cormorant-garamond md:text-2xl font-semibold">
          Radhya, Shaurya, Nikunj, Chaitanya, Nitya
        </p>

        <h2 className="mt-4 text-center text-[24px] leading-tight text-[#8c1034] font-cormorant-upright font-bold  md:text-4xl lg:text-[60px]">
          Mama's Little Stars
        </h2>

        <p className="text-center text-[18px] tracking-medium text-[#C99333] font-cormorant-garamond md:text-2xl font-semibold">
          Ayati, Gauri, Akshat, Ananya, Devansh, Cherry, Harshul, Aarvi, Pavni,
          Adyant
        </p>
        <div className="flex flex-col justify-center items-center mt-8">
          <a
            href="https://invitearc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center"
          >
            {" "}
            <img
              src="/assets/invite.png"
              alt="Wedding Logo"
              className="md:w-17 w-13"
            />
          </a>

          <a
            href="https://www.instagram.com/theinvitearc/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-3 font-serif text-[16px] text-[#546F2F] mt-2"
          >
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="object-contain h-4 w-5"
            />

            <span>Follow us on Instagram</span>
          </a>
        </div>
      </section>
    </>
  );
}
