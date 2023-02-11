import Avatar from "@/components/Avatar";
import Meta from "@/components/Meta";

export default function Profile() {
  return (
    <>
      <Meta />
      <div className="grid grid-cols-3 w-full py-3">
        <span className="text-2xl col-start-1 p-3"> « </span>
        <span className="text-2xl mx-auto col-start-2 p-3">Mi perfil</span>
      </div>
      <div className="grid grid-cols-3">
        <Avatar />
        <span className="text-3xl col-start-2 col-span-2 my-auto">
          Mi nombre
        </span>
      </div>
    </>
  );
}
