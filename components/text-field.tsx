import { TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useRef } from "react";

export function TextFieldNavbar() {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form className="w-full p-3">
      <TextInput name="keyword" ref={ref} className="w-full p-3" placeholder="Search" required={true} />
    </form>
  );
}
