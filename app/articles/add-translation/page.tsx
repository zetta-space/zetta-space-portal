import { Combobox } from "@/components/Combobox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

const TranslateArticle = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-5 py-6 bg-gray-50 mb-8 shadow-md">
        <Link href={".."}>
          <Button className="capitalize">go back</Button>
        </Link>
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="capitalize font-semibold text-2xl text-slate-800">
            Article name
          </h1>
          <span>|</span>
          <h3 className="capitalize font-semibold text-xl text-slate-800">
            add translation
          </h3>
        </div>
        <div>
          <Sheet>
            <SheetTrigger className="text-white capitalize font-medium text-sm bg-slate-950 px-4 py-2 rounded-md">
              options
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <div className="container flex flex-col space-y-8 mb-6">
        <div className="">
          <Card className="shadow-none">
            <CardHeader>
              <div className="w-full flex flex-row px-5 py-5 mb-7 justify-between items-center">
                <h2 className="bg-blue-200 text-blue-900 rounded-lg px-6 py-2.5 text-base capitalize space-x-2 font-normal">
                  article ID <span className="font-semibold">1234567890</span>
                </h2>
                <div className="flex flex-row items-center space-x-4">
                  <p>Tags</p>
                  <div className="flex gap-3">
                    <Badge
                      variant={"secondary"}
                      className="ring-1 ring-slate-800 px-4"
                    >
                      #one
                    </Badge>
                    <Badge variant={"default"}>#two</Badge>
                    <Badge variant={"default"}>#three</Badge>
                  </div>
                </div>
              </div>
              <CardTitle className="capitalize font-medium text-2xl text-slate-800">
                article header
              </CardTitle>
              <CardDescription className="text-xs">
                All fields are required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row justify-between items-center space-x-6">
                <div className="flex-grow">
                  <label htmlFor="title" className="form-label">
                    title
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="title" className="form-label">
                    language <span></span>
                  </label>
                  <Combobox />
                </div>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className="mb-5">
          <Card>
            <CardHeader>
              <CardTitle className="capitalize font-medium text-2xl text-slate-800">
                article body
              </CardTitle>
              <CardDescription className="text-xs">
                Add your translation ⚫⚪
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="">
                <div>
                  <textarea
                    className="flex min-h-[1000px] w-full ring-1 ring-slate-300 rounded-md focus-visible:outline-offset-2 focus-visible:outline-slate-800 px-4 py-3"
                    name="textArea"
                    id="textArea"
                  ></textarea>
                </div>
                <div className="flex flex-col items-center py-5 px-0">
                  <CardDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa qui soluta, eligendi fuga officiis enim obcaecati
                    aperiam consequuntur adipisci, iusto reiciendis amet,
                    voluptates harum provident quidem ipsam? Voluptatum, soluta
                    autem.
                  </CardDescription>
                </div>
                <div className="flex flex-row items-center space-x-5 justify-end">
                  <Button>Save</Button>
                  <Button className="bg-white text-slate-950 border-slate-900 border-[1px] hover:text-white">
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TranslateArticle;
