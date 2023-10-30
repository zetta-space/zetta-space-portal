import { IActionState } from "@/lib/interfaces/IActionState";

export function formModification(values: string) {
    const wordCount = values.toString().length;

    return wordCount;
}