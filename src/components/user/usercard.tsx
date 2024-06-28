"use client";

import { Card, CardContent } from "../ui/card";
import getUserInfo from "@/server/users/getUserInfo";
import { useEffect, useState } from "react";
import { useActiveAccount } from "thirdweb/react";

interface UserInfo {
  email: string;
  name: string;
  userName: string;
}

export default function UserCard() {
  const user = useActiveAccount();
  const address = user?.address;
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (address) {
        const data: UserInfo = await getUserInfo(address);
        setUserInfo(data);
      }
    };

    fetchUserInfo();
  }, [address]);

  return (
    <Card>
      <CardContent>
        <p>This is your data:</p>
        <p>your email: {userInfo?.email}</p>
        <p>your name: {userInfo?.name}</p>
        <p>your username: {userInfo?.userName}</p>
      </CardContent>
    </Card>
  );
}
