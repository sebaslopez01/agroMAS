interface MyInvestmentsProps {
  proyectName: string;
  proyectOwner: string;
  shortDescription: string;
}

export default function ProfileInvest({
  proyectName,
  proyectOwner,
  shortDescription,
}: MyInvestmentsProps) {
  return (
    <>
      <div className="my-1">
        <div className="container py-5 text-center lg:text-left ">
          <div className="flex items-center justify-center">
            <div>
              <img
                src="/pera.jpg"
                className="shadow-lg rounded-xl h-60 w-60"
                alt=""
              />
            </div>

            <div
              id="glass-bg"
              className=" relative block rounded-lg shadow-lg p-6  lg:-ml-10 h-56 w-[60%]"
            >
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-green-800 from-green-500 text-2xl font-bold mb-2 display-5">
                {proyectName}
              </h2>
              <div className="flex mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="black"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <h3 >{proyectOwner}</h3>
              </div>
              <p className="text-gray-600 mb-12 text-sm">{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
