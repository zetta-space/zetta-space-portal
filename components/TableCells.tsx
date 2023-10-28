import React from "react";
import { TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import { Languages, Pencil } from "lucide-react";
import { Button } from "./ui/button";

function TableCells({
  id,
  title,
  body,
  wordCount,
  updatedOn,
}: TableCellElement) {
  return (
    <TableRow>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{body?.slice(0, 25)}...</TableCell>
      <TableCell>{wordCount?.toString()}</TableCell>
      <TableCell>{updatedOn?.getMinutes()} minutes ago</TableCell>
      <TableCell className="text-right flex justify-end gap-3">
        <Link
          href={`/articles/${id}/add-translation`}
          className="bg-slate-100 ring-2 ring-slate-800 px-4 py-1 inline-flex justify-center items-center rounded-lg"
        >
          <Languages className="w-5 h-5 mr-0 text-slate-700 group-hover:text-white" />
        </Link>
        <Button className="bg-slate-950 ring-2 ring-slate-950 hover:ring-slate-600">
          <Pencil className="w-5 h-5 mr-0" />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TableCells;
