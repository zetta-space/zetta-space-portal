import { IActionState } from "@/lib/interfaces/IActionState";

export function formModification(values: any) {
    const wordCount = values.toString().length;

    return wordCount;
}