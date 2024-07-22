export interface Book{
    authors  : string
    average_rating : number
    categories : string
    description : string
    isbn10 : string
    isbn13 : number
    num_pages : number
    published_year : number
    thumbnail : string
    title : string
}

export type Books = Book[]
