export default function Categories() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-3xl w-[80%] text-center">
          En AgroMas, contamos con dos líneas principales para apoyar el campo
          colombiano. Conócelas aquí.
        </h2>
      </div>
      <div className="flex flex-row justify-evenly p-5 m-5">
        <h1 className="text-3xl font-semibold text-orange-600">Marketplace</h1>
        <h1 className="text-3xl font-semibold text-orange-600">Inversiones</h1>
      </div>
      <div className="flex flex-col rounded-xl bg-gray-300 h-96 m-10 mx-15"></div>
    </>
  );
}
