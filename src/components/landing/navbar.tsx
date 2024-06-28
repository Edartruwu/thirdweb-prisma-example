import Link from "next/link";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center" prefetch={true}>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Button asChild variant={"outline"}>
          <Link href={"/login"} prefetch={true}>
            Join Clanni
          </Link>
        </Button>
      </div>
    </header>
  );
}
