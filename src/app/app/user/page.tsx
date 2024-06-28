import Create from "@/components/user/create";
import UserCard from "@/components/user/usercard";
export default function Page() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4">
        <Create />
        <UserCard />
      </div>
    </main>
  );
}
