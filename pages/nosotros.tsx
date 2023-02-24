import Layout from "@/components/Layout";
import { FullUser } from "@/lib/types";
import { getUser } from "@/utils/auth";
import { GetServerSideProps } from "next";
import Image from "next/image";

import abigailPhoto from "@/public/abigail-photo.png";
import miguelPhoto from "@/public/miguel-photo.png";
import sebasPhoto from "@/public/sebas-photo.png";

interface NosotrosProps {
  user: FullUser;
}

export default function Nosotros({ user }: NosotrosProps) {
  return (
    <Layout user={user}>
      {/* <NavbarGeneral namePage="Nosotros"/> */}
      <div className="w-full h-[200px] bg-[url('/backgrounds/4.jpg')] bg-cover bg-center mx-auto flex flex-col justify-end px-10 py-5">
        <h2 className="text-white text-5xl font-semibold">Nosotros</h2>
      </div>
      <div className="w-[80%] mx-auto h-auto mt-10 text-gray-700 text-lg">
        <p className="text-center">
          AgroMAS nace como una iniciativa para conectar campesinos con usuarios
          finales e inversionistas que están interesados en apoyar a los
          pequeños y medianos productores colombianos. Esta plataforma promueve
          una relación directa entre ambas partes, eliminando intermediarios y
          creando un comercio justo, además de oportunidades para hacer crecer
          sus negocios.
        </p>
      </div>
      <div className="mt-10 flex flex-row space-x-5 items-center justify-center">
        <Image src={abigailPhoto} alt="Abigail" />
        <Image src={miguelPhoto} alt="Miguel" />
        <Image src={sebasPhoto} alt="Sebas" />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  return {
    props: {
      user,
    },
  };
};
