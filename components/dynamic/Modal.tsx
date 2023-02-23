import dynamic from "next/dynamic";

export const Modal = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal),
  {
    ssr: false,
  }
);

export const ModalHeader = dynamic(
  () => import("flowbite-react").then((mod) => mod.Modal.Header),
  { ssr: false }
);
