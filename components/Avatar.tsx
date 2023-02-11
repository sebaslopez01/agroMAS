import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/person.jpg"
      alt="avatar"
      height={120}
      width={120}
      className="rounded-full m-2"
    />
  );
}
