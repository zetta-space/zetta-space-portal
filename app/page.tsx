import TableCells from "@/components/TableCells";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import listArticles from "@/services/factories/onFetch";
import { Languages, Pencil } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const { response } = await listArticles();
  // const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }

  return (
    <main className="w-full flex flex-row justify-between items-start flex-wrap pl-[16.666%] pr-0">
      <div className="w-[15%] bg-gray-50 h-screen fixed left-0 top-0 flex flex-col">
        <div className="">
          <h2>Heading</h2>
        </div>
        <section className="flex flex-col flex-1 mt-4">
          <div>
            <p>All articles</p>
          </div>
          <div>
            <p>Recently added</p>
          </div>
        </section>
        {/* <div className="my-3 p-3.5 border-t-[0.5px] border-slate-500">
          <figure>
            <Image
              src={`${session.user?.image}`}
              alt="user-img"
              width={50}
              height={50}
              className="rounded-full"
            />
          </figure>
          <h2 className="text-xl font-medium text-slate-900">
            {session.user?.name}
          </h2>
          <p className="text-slate-500 text-sm">{session.user?.email}</p>
        </div> */}
      </div>
      <div className="flex flex-grow flex-wrap flex-col overflow-y-hidden py-5 pr-8">
        <div>
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="capitalize font-semibold">
                all records
              </CardTitle>
              <Link href={"/articles/add-new"}>
                <Button className="capitalize">add new</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="mx-3">
                <Table>
                  <TableCaption>all resent data goes here</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Body</TableHead>
                      <TableHead>Word Count</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {response.map((articles: any) => {
                      return <TableCells key={articles.id} {...articles} />;
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
