import { useState } from "react";

import { FullUser } from "@/lib/types";
import { Modal, ModalHeader } from "../dynamic/Modal";
import AddProductForm from "../forms/AddProductForm";

interface ModalAddProductProps {
  getProducts: () => Promise<void>;
  user: FullUser;
}

export default function ModalAddProduct({
  getProducts,
  user,
}: ModalAddProductProps) {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowAddProduct(true)}
        className="fixed right-0 bottom-0 z-50 h-16 lg:h-20 w-16 lg:w-20 m-7 lg:m-10 rounded-full flex items-center justify-center bg-green-900 hover:scale-125 duration-300 hover:bg-green-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-plus w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </button>
      <Modal
        show={showAddProduct}
        size="md"
        popup
        onClose={() => setShowAddProduct(!showAddProduct)}
        className="h-[120hv]"
      >
        <ModalHeader className="h-0" />
        <AddProductForm
          setShowAddProduct={setShowAddProduct}
          getProducts={getProducts}
          user={user}
        />
      </Modal>
    </>
  );
}
