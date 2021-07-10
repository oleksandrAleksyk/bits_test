export interface BooksInterface{
    title: string,
    author: string,
    category: string,
    isbn : number,
    id?: number,
}
export interface BooksArray {
    books: BooksInterface[],
}
export enum BooksCategory {
    DRAMA= "drama",
    FANTASY = "fantasy"
}
