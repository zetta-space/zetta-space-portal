"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import onSubmit from "@/services/actions/postArticle";
import Link from "next/link";
import React, { useState } from "react";
import { revalidatePath } from "next/cache";

function AddNewArticle() {
  async function formAction(values: FormData) {
    "use server";
    // Append Values
    const count = values.get("article-body")?.toString().length;
    const wordCount: AppendBlob = {
      name: "word-count",
      value: count,
    };

    const response = await onSubmit(values, wordCount);
    console.log(response);
    // revalidatePath("/");
    // console.log(values.get("title"));
  }

  const [state, setState] = useState([]);

  return (
    <>
      <nav className="flex flex-row justify-between items-center px-5 py-6 bg-gray-50 mb-8 shadow-md">
        <Link href={".."}>
          <Button className="capitalize">go back</Button>
        </Link>
        <div>
          <h2 className="capitalize font-semibold text-2xl text-slate-800">
            add new article
          </h2>
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
              <CardTitle className="capitalize font-medium text-2xl text-slate-800">
                article header
              </CardTitle>
              <CardDescription className="text-xs">
                All fields are required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction}>
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-row justify-between items-center space-x-5">
                    <div className="flex-1">
                      <label htmlFor="title" className="form-label">
                        title
                      </label>
                      <input
                        type="text"
                        name="article-title"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="tags" className="form-label">
                        tags
                      </label>
                      <input
                        type="text"
                        name="article-tags"
                        className="min-w-[380px] form-control"
                      />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="capitalize font-medium text-2xl text-slate-800 mb-2">
                      article body
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Write your article here ❤
                    </CardDescription>
                  </div>
                  <div>
                    <textarea
                      className="flex min-h-[1000px] w-full ring-1 ring-slate-300 rounded-md focus-visible:outline-offset-2 focus-visible:outline-slate-800 px-4 py-3"
                      id="textArea"
                      name="article-body"
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-center py-5 px-0">
                    <CardDescription>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa qui soluta, eligendi fuga officiis enim obcaecati
                      aperiam consequuntur adipisci, iusto reiciendis amet,
                      voluptates harum provident quidem ipsam? Voluptatum,
                      soluta autem.
                    </CardDescription>
                  </div>
                  <div className="flex flex-row items-center space-x-5 justify-end">
                    <Button type="submit">Save</Button>
                    <Button className="bg-white text-slate-950 border-slate-900 border-[1px] hover:text-white">
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AddNewArticle;
