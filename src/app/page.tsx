import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
