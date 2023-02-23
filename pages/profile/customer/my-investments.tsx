import Meta from "@/components/Meta";
import ProfileInvest from "@/components/cards/ProfileInvest";
import Link from "next/link";
import NavBarGeneral from "@/components/navigation/NavbarGeneral";
import Footer from "@/components/navigation/Footer";
import ModalInvestment from "@/components/modals/ModalInvestement";
import Image from "next/image";
import test from "@/public/backgrounds/1.jpg";

export default function CustomerInvestments() {
  return (
    <>
      <Meta />
      <NavBarGeneral namePage="Mis inversiones" />
      <div className="w-[80%] mx-auto h-auto flex flex-col mt-10 space-y-16">
        <ProfileInvest />
        <ProfileInvest />
        <ProfileInvest />
      </div>
      <Footer />
    </>
  );
}
