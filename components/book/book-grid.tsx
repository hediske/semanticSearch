import { useEffect, useState } from 'react';
import BookCard from './book-card';
import { Book } from '@/utils/types';
import { Books } from '../../utils/types';
import BookModal from './book-modal';
import useBook from '@/hooks/useBook';
import useOpen from '@/hooks/useOpen';

const BookGrid = ({ books }:{books:Books}) => {

    const {open,setOpen} = useOpen()
    const {book,setBook} = useBook()
    

    return (
        <div className='container mt-[120px]'>
            <h1 className='text-heading text-[30px] font-[700] text-center mb-[80px]'>Recommended Books</h1>
            <div className='grid gap-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {books.map((book:Book,index:number) => {
                    return <BookCard setOpen={setOpen} book={book} key={index} setBook={setBook} />
                })}
            </div>
            <BookModal setOpen={setOpen} setBook={setBook} open={open} book={book}/>
        </div>
    )
}
export default BookGrid