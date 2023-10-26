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
import { Languages, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-row justify-between items-start flex-wrap pl-[16.666%] pr-0">
      <div className="w-[15%] bg-slate-100 h-screen fixed left-0 top-0">
        <div className="">
          <h2>Heading</h2>
        </div>
        <section className="flex flex-col justify-between gap-3 items-start">
          <div>
            <p>All articles</p>
          </div>
          <div>
            <p>Recently added</p>
          </div>
        </section>
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
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right flex justify-end gap-3">
                        <Link
                          href={"/articles/add-translation"}
                          className="bg-slate-100 ring-2 ring-slate-800 px-4 py-1 inline-flex justify-center items-center rounded-lg"
                        >
                          <Languages className="w-5 h-5 mr-0 text-slate-700 group-hover:text-white" />
                        </Link>
                        <Button className="bg-slate-950 ring-2 ring-slate-950 hover:ring-slate-600">
                          <Pencil className="w-5 h-5 mr-0" />
                        </Button>
                      </TableCell>
                    </TableRow>
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
