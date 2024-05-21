/** https://www.youtube.com/watch?v=r895rFUbGtE 
 * Auth - clerk nextjs
 * background color : https://hypercolor.dev/
*/
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  return (
   <div className="w-screen min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>

        <div className="flex mt-2">
          <Button>Go to Chats</Button>
        </div>
      </div>
    </div>
   </div>
  );
}
