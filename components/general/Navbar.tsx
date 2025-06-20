import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

import { Menu } from "lucide-react";
import { auth } from "@/app/utils/auth";
import { ThemeToggle } from "./ThemeToggle";
import { UserDropdown } from "./UserDropdown";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export async function Navbar() {
  const session = await auth();

  const NavLinks = () => (
    <>
      <Link
        href="https://meet-ai-q2r4.vercel.app"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Prepare for Interview
      </Link>
      <Link
        href="/post-job"
        className={buttonVariants({ size: "sm" })}
      >
        Post Job
      </Link>
    </>
  );

  return (
    <nav className="py-5 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Careerway Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">
            <span className="text-primary">areerway</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <NavLinks />
          {session?.user ? (
            <UserDropdown
              email={session.user.email as string}
              name={session.user.name as string}
              image={session.user.image as string}
            />
          ) : (
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="text-left">
                <SheetTitle>
                  <span className="text-primary text-xl">Areerway</span>
                </SheetTitle>
                <SheetDescription>
                  Your career, your way.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="/"
                  className="text-lg px-4 py-2 rounded-md hover:bg-secondary"
                >
                  Home
                </Link>
                <NavLinks />
                {session?.user ? (
                  <div className="mt-4 border-t pt-4">
                    <UserDropdown
                      email={session.user.email as string}
                      name={session.user.name as string}
                      image={session.user.image as string}
                    />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="text-lg px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                  >
                    Login
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

