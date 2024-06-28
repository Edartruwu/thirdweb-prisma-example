import { redirect } from "next/navigation";
import { isLoggedIn } from "@/server/thirdweb/auth";

import LogoutButton from "@/components/ui/logout";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  if (!(await isLoggedIn())) {
    redirect("/");
  }

  return (
    <div>
      <LogoutButton />
      <div>Estas Logueado</div>
      <Button variant={"secondary"} asChild>
        <Link href={"/app/user"} prefetch={true}>
          Settings
        </Link>
      </Button>
    </div>
  );
}
