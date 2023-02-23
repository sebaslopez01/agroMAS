import { useState } from "react";

import { FullUser } from "@/lib/types";
import { Modal, ModalHeader } from "../dynamic/Modal";
import UpdateProductForm from "../forms/UpdateProductForm";
import { Product } from "@prisma/client";

interface ModalUpdateProductProps {
  getProducts: () => Promise<void>;
  user: FullUser;
  product: Product;
}

export default function ModalUpdateProduct({
  getProducts,
  user,
  product,
}: ModalUpdateProductProps) {
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowUpdateProduct(true)}
        className="border rounded-lg border-[#6d9773] text-xs lg:text-sm hover:bg-[#6d9773] hover:text-white p-2 w-[50%]"
      >
        Editar
      </button>
      <Modal
        show={showUpdateProduct}
        size="md"
        popup
        onClose={() => setShowUpdateProduct(!showUpdateProduct)}
        className="h-[120hv]"
      >
        <ModalHeader className="h-0" />
        <UpdateProductForm
          setShowUpdateProduct={setShowUpdateProduct}
          getProducts={getProducts}
          user={user}
          product={product}
        />
      </Modal>
    </>
  );
}
