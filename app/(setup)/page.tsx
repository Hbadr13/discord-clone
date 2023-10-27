
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/InitialModal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = async () => {
  // const profile = await initialProfile();

  // const server = await db.server.findFirst({
  //   where: {
  //     Members: {
  //       some: {
  //         profileId: profile.id
  //       }
  //     }
  //   }
  // });

  // if (server) {
  //   return redirect(`/servers/${server.id}`);
  // }

  return (
    <>
      <UserButton></UserButton>
      <div>hello</div>
      {/* <InitialModal /> */}
    </>
  )
    ;
}


export default SetupPage;