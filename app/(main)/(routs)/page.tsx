import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div >

      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
