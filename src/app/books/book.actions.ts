import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// think of this as you would any kind of interface where you have a contract
// and in the effects .ts file you will specify what the functions will actually do

export const AddBook = createAction('[Book] Add Book', props<Book>())
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>())

export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>)
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error:any}>())
