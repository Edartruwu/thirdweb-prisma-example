"use client";
import { Button } from "./button";
import { logout } from "@/server/thirdweb/auth";
import Link from "next/link";

async function LogOut() {
  await logout();
}

export default function LogoutButton() {
  return (
    <Button onClick={LogOut}>
      <Link href={"/"} prefetch={true}>
        Log Out
      </Link>
    </Button>
  );
}
