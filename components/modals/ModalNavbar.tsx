import { useState } from "react";
import { useRouter } from "next/router";

import { FullUser } from "@/lib/types";
import LoginForm from "../forms/LoginForm";
import { Modal, ModalHeader } from "../dynamic/Modal";

interface ModelNavBarProps {
  user: FullUser;
  isMarket?: boolean;
}

export default function ModalNavBar({
  user,
  isMarket = false,
}: ModelNavBarProps) {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Icon session */}
      <button
        className="flex justify-start items-center space-x-2 cursor-pointer"
        onClick={() => {
          if (!user) {
            setShowLogin(!showLogin);
            return;
          }

          user.role === "SELLER"
            ? router.push("/profile/seller")
            : router.push("/profile/customer");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle cursor-pointer w-[22px] h-[22px] lg:w-[32px] lg:h-[32px] stroke-white stroke-[1.5] lg:stroke-[1.3]"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
        <div
          className={
            isMarket
              ? "text-xl text-white font-medium"
              : "lg:hidden text-2xl text-white font-medium"
          }
        >
          {user ? "Ir al Dashboard" : "Iniciar sesión"}
        </div>
      </button>

      {/* Modal LogIn */}
      <Modal
        show={showLogin}
        size="md"
        popup={true}
        onClose={() => setShowLogin(!showLogin)}
        className="h-[120vh]"
      >
        <ModalHeader className="h-0" />
        <LoginForm setShowLogin={setShowLogin} />
      </Modal>
    </>
  );
}
