export default function Categories() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-2xl w-[80%] text-center">
          En AgroMas, contamos con dos líneas principales para apoyar el campo
          colombiano. Conócelas a continuación.
        </h2>
      </div>

      {/* <!-- Container for demo purpose --> */}
      <div className="container my-5 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="text-gray-800 text-center lg:text-left">
          {/* <!-- Jumbotron --> */}
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="mb-12 lg:mb-0">
                <div
                  id="glass-bg"
                  className=" relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                >
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500 text-3xl font-bold mb-4 display-5">
                    Mercado virtual
                  </h2>
                  <p className="text-gray-500 mb-12">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div className="grid md:grid-cols-3 gap-x-6">
                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">10%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        Less sugar
                      </h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">70%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        More flavor
                      </h5>
                    </div>

                    <div className="">
                      <h2 className="text-3xl font-bold text-dark mb-4">0%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        Gluten
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img id="test" src="/pera.jpg" className="shadow-lg" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- Jumbotron --> */}
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>

      {/* <!-- Container for demo purpose --> */}

      {/* <!-- Container for demo purpose --> */}
      <div className="container my-5 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="text-gray-800 text-center lg:text-left">
          {/* <!-- Jumbotron --> */}
          <div className="container mx-auto xl:px-32 text-centerlg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div>
                <img id="test" src="/pera.jpg" className="shadow-lg" alt="" />
              </div>

              <div className="mb-12 lg:mb-0">
                <div
                  id="glass-bg"
                  className=" relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-ml-14"
                >
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500 text-3xl font-bold mb-4 display-5">
                    Plataforma de inversión
                  </h2>
                  <p className="text-gray-500 mb-12">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div className="grid md:grid-cols-3 gap-x-6">
                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">10%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        Less sugar
                      </h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">70%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        More flavor
                      </h5>
                    </div>

                    <div className="">
                      <h2 className="text-3xl font-bold text-dark mb-4">0%</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        Gluten
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Jumbotron --> */}
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
}
