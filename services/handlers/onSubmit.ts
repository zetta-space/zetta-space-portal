import { IActionState } from "@/lib/interfaces/IActionState";
import postArticle from "../actions/postArticle";
import ToastMsg from "@/components/ToastMsg";
import { ToastActionElement } from "@/components/ui/toast";

export function onSubmitArticle(values: any): IActionState {
    return {
        async formAction() {
            const count = values.get("article-body")?.toString().length;
            const wordCount: AppendBlob = {
                name: "word-count",
                value: count,
            };

            const response = await postArticle(values, wordCount);
        },
    }

}