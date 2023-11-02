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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import listArticles from "@/services/resolvers/onFetch";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";
import { authenticate } from "@/middleware/Authenticate";
import { onRegisterUser } from "@/services/resolvers/onAuthenticate";

export default async function Home() {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        voluptatum recusandae vitae, quibusdam expedita porro! Culpa natus
        excepturi, pariatur sed reiciendis, saepe cum sunt animi illum cumque
        optio consequatur eum.\
      </p>
    </main>
  );
}
