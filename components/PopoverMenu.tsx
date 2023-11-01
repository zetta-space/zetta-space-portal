"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FileEdit, Languages, MoreVertical, ScanEye } from "lucide-react";
import Link from "next/link";

function PopoverMenu({ pathId }: { pathId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-3 rounded-full focus-visible:outline-none focus-visible:bg-slate-300">
        <MoreVertical className="w-5 h-5 text-slate-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-3">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={`/article/${pathId}/`}
            className="link-pop"
          >
            <ScanEye
              strokeWidth={2}
              className="w-5 h-5 mr-0 text-slate-700 font-extrabold"
            />
            Preview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/article/${pathId}/add-translation`}
            className="link-pop"
          >
            <Languages className="w-5 h-5 mr-0 text-slate-700 font-extrabold" />
            Translate
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={`/article/${pathId}/edit-article`}
            className="link-pop"
          >
            <FileEdit
              strokeWidth={2}
              className="w-5 h-5 mr-0 text-slate-700 font-extrabold"
            />
            Edit
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PopoverMenu;
