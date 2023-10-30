import { submitValidation, translateValidation } from "@/middleware/InputValidation";
import { postArticle } from "@/services/factories/onSubmit";

export default function formAction(values: FormData, isTranslated?: boolean) {
    if (isTranslated) {
        const _middleware = translateValidation(values)
    }

    const middleware = submitValidation(values);

    if (middleware?.success) {
        const article = postArticle(middleware.data)
        article.then((response) => console.log(response))
    } else {
        console.log("Error in values")
    }
}