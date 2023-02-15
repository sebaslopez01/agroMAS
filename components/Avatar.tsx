import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <>
      <Link href="profile">
        <Image
          src="/person.jpg"
          alt="avatar"
          height={80}
          width={80}
          className="rounded-full m-2"
        />
      </Link>
    </>
  );
}
