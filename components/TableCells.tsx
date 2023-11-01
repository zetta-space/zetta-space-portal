import React from "react";
import { TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import { Languages } from "lucide-react";
import PopoverMenu from "./PopoverMenu";

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
      <TableCell>
        {updatedOn?.getUTCDate()}/{updatedOn?.getUTCMonth()}/
        {updatedOn?.getFullYear()}
      </TableCell>
      <TableCell className="text-right flex justify-end gap-3">
        <PopoverMenu pathId={id} />
      </TableCell>
    </TableRow>
  );
}

export default TableCells;
