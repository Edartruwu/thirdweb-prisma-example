"use client";

import { client } from "@/lib/thirdwebClient";
import { createWallet } from "thirdweb/wallets";
import { ConnectEmbed } from "thirdweb/react";
import {
  generatePayload,
  isLoggedIn,
  login,
  logout,
} from "@/server/thirdweb/auth";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Import createUser function from server-side script

export default function Page() {
  const recommendedWallets = [createWallet("com.coinbase.wallet")];
  const router = useRouter();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isLoggedIn();
      if (loggedIn) {
        router.push("/app");
      }
    };

    checkLoginStatus();
  }, [router]); // Include wallet in the dependencies array for useEffect

  return (
    <main>
      <div className="h-screen flex flex-col gap-12 items-center justify-center m-4">
        <p className="text-4xl font-bold text-black">Join Clanni</p>
        <div>
          <ConnectEmbed
            client={client}
            theme={"light"}
            recommendedWallets={recommendedWallets}
            auth={{
              isLoggedIn: async (address) => {
                console.log("checking if logged in!", { address });
                return await isLoggedIn();
              },
              doLogin: async (params) => {
                console.log("logging in!");
                await login(params);
              },
              getLoginPayload: async ({ address }) =>
                generatePayload({ address }),
              doLogout: async () => {
                console.log("logging out!");
                await logout();
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
