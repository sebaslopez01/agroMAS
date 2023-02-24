import { IconMapPin, IconUser } from "@tabler/icons-react";
import Image from "next/image";

import test from "@/public/backgrounds/1.jpg";
import ModalInvestment from "../modals/ModalInvestement";
import { Investment } from "@prisma/client";
import { FullUser } from "@/lib/types";

interface CardProjectProps {
  investment: Investment & {
    seller: {
      user: {
        firstName: string;
        lastName: string;
      };
    };
  };
  user: FullUser;
}

export default function CardProject({ investment, user }: CardProjectProps) {
  return (
    <div className="w-full h-auto rounded-3xl rounded-br-none lg:rounded-br-3xl lg:rounded-tr-none bg-white shadow-lg flex flex-col lg:flex-row space-y-5 lg:space-y-0">
      {/* Image */}
      <div className="w-[100%] lg:h-[520px] lg:w-[50%]">
        <Image
          src={test}
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-3xl rounded-tl-none lg:rounded-tl-3xl lg:rounded-br-3xl rounded-br-none lg:rounded-tr-none lg:rounded-bl-none"
        />
      </div>

      {/* Description */}
      <div className="w-[100%] lg:w-[50%] lg:h-full flex flex-col space-y-4 md:space-y-6 p-5 lg:pb-0 ">
        <h1 className="text-lg md:text-2xl font-bold">{investment.title}</h1>
        <div className="flex space-x-2">
          <IconUser className="stroke-[1.2px] stroke-gray-600" />
          <span className="text-md md:text-lg font-semibold text-gray-600">
            {`${investment.seller.user.firstName} ${investment.seller.user.lastName}`}
          </span>
        </div>{" "}
        <p className="text-sm md:text-lg">{investment.shortDescription}</p>
        <div className="w-full h-auto flex justify-between md:justify-evenly">
          <div className="flex flex-col justify-center text-center">
            <span className="text-lg font-semibold text-gray-700 ">
              {investment.return * 100}%
            </span>
            <span className="text-md text-gray-500">Retorno</span>
          </div>
          <div className="flex flex-col justify-center text-center">
            <span className="text-lg font-semibold text-gray-700 ">
              {investment.minimumAmount}
            </span>
            <span className="text-md text-gray-500">Monto mínimo</span>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col">
          <span className="md:text-lg font-semibold text-gray-600">
            Progreso de inversión
          </span>
          <div className="w-full h-auto flex items-center justify-between">
            <div className="w-[80%] h-[10px] md:h-[13px] rounded-xl bg-gray-200">
              <div className="w-[80%] h-full rounded-xl bg-[#6D9773]"></div>
            </div>
            <span className="w-[10%] font-bold md:text-lg">80%</span>
          </div>
          <span className="md:text-lg text-gray-600">
            Meta: $ {investment.investmentTarget}
          </span>
        </div>
        <div className="w-full h-auto flex justify-between">
          <div className="flex space-x-2 items-center">
            <IconMapPin className="stroke-[1.2px] w-[19px] h-[19px] md:w-[21px] md:h-[21px] stroke-gray-600" />
            <span className="text-md font-semibold md:text-lg text-gray-600">
              Medellín, Antioquia
              {`${investment.city}, ${investment.state}`}
            </span>
          </div>
          <ModalInvestment user={user} />
          {/* <Link href="/" className="w-[40%] bg-[#6D9773] p-1 rounded-md text-white font-semibold md:text-lg hover:scale-105 duration-300 flex justify-center">
              Invierte
            </Link> */}
        </div>
      </div>
    </div>
  );
}
