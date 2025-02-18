import { Book } from "./models/book";

export interface AppState {
    //ng generate interface app.state - should be in main app dir

    readonly book: Book[]

}
