import Meta from "@/components/Meta";
import ItemCart from "@/components/marketplace/ItemCart";
import Footer from "@/components/navigation/Footer";
import NavBarMarket from "@/components/navigation/NavBarMarket";
import { useContext, useState, useEffect } from "react";
import useSWRMutation from "swr/mutation";
import { Store } from "@/context/Store";
import { capitalizeString, postFetcher } from "@/utils/helpers";
import { Product } from "@prisma/client";
import PaymentButton from "@/components/payment/PaymentButton";
import { StoreActionKind } from "@/lib/enums";

export default function shoppingCart() {
  const { state, dispatch } = useContext(Store);
  const [subTotal, setSubTotal] = useState(0);
  const { data, trigger, error, isMutating } = useSWRMutation(
    "/api/marketplace/list-cart",
    postFetcher
  );

  const resetCartHandler = () => {
    dispatch({
      type: StoreActionKind.CART_RESET,
      payload: { id: "", quantity: 0 },
    });
  };

  useEffect(() => {
    trigger(state.cart.map((prod) => prod.id));
  }, [state]);

  if (!data) {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );
  }

  const products: Product[] = data.products;

  return (
    <>
      <Meta />
      <NavBarMarket />

      {/* Container Parent*/}
      <div className="w-[95%] lg:w-[90%] 2xl:w-[80%] h-auto m-auto mt-5 flex flex-col space-y-5 lg:flex-row lg:space-y-0">
        {/* Container for items section */}
        <div className="w-[100%] lg:w-[70%] m-auto flex flex-col h-auto">
          {/* Container for the headings */}
          <div className="w-[100%] h-[40px] border-b border-gray-300 grid  grid-cols-[45%_0%_20%_20%_15%] lg:grid-cols-[20%_35%_15%_15%_15%] justify-items-center items-center uppercase font-bold mb-1">
            <h2 className="text-xs md:text-sm lg:text-md col-start-1 row-start-1 justify-self-start">
              Productos
            </h2>
            <h2 className="text-xs md:text-sm lg:text-md col-start-3 row-start-1">
              Cantidad
            </h2>
            <h2 className="text-xs md:text-sm lg:text-md col-start-4 row-start-1">
              Total
            </h2>
            <h2 className="text-xs md:text-sm lg:text-md col-start-5 row-start-1">
              Eliminar
            </h2>
          </div>

          {/* Items */}
          {products.map((product: Product) => (
            <ItemCart
              key={product.id}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productUndPer={capitalizeString(product.measure)}
              setSubTotal={setSubTotal}
            />
          ))}
        </div>

        {/* container for information about shopping */}
        <div className="w-[100%] mb-5 lg:w-[30%] h-fit flex justify-center lg:justify-end">
          <div
            id="glass-bg"
            className="w-[100%] lg:w-[90%] h-auto flex flex-col space-y-4 rounded-xl p-5 md:py-10 md:px-14 lg:p-3 xl:p-8"
          >
            <div className="w-[100%] flex justify-center">
              <h2 className="font-semibold">Resumen de compra</h2>
            </div>
            <hr />
            <div className="w-[100%] flex justify-between">
              <h2 className="text-gray-500">Subtotal</h2>
              <span>$ {subTotal}</span>
            </div>
            <div className="w-[100%] flex justify-between">
              <h2 className="text-gray-500">Envío</h2>
              <span>$ 15.000</span>
            </div>
            <hr />
            <div className="w-[100%] flex justify-between">
              <h2 className="text-xl font-bold">Total</h2>
              <span className="text-lg font-semibold">$ 60.000</span>
            </div>

            <div className="w-[100%] lg:h-[100px] flex justify-evenly xl:justify-between lg:flex-col lg:items-center xl:flex-row 2xl:justify-evenly">
              {/* <button className="w-[45%] lg:w-[90%] xl:w-[40%] bg-green-300 hover:bg-green-200 rounded-full p-1">
                Ir a pagar
              </button> */}
              <PaymentButton
                amount={subTotal}
                buyerEmail="hjola"
                legalId="1007778331"
              />
              <button
                onClick={resetCartHandler}
                className="w-[45%] lg:w-[90%] xl:w-[48%] 2xl:w-[45%] bg-red-300 hover:bg-red-200 rounded-full p-1"
              >
                Borrar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
