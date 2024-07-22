import { Book } from "@/utils/types"
import { Box, Modal, Typography } from "@mui/material"
import { AiFillStar } from "react-icons/ai"

const BookModal = ({
    book,
    setBook,
    open,
    setOpen
}: {
    book: Book,
    setBook: (book:Book) => void,
    open: boolean,
    setOpen: (open:boolean) => void
})=>{

    const handleOnClose = () => {
        setOpen(false)
        setBook({} as Book)
    }
    return (
    <Modal className=" w-full justify-center items-center flex flex-col px-[20px]"
        open={open}
        onClose={handleOnClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box className="  bg-white w-4/5 h-fit rounded-lg">
          <Typography id="modal-modal-title" className="text-heading text-[50px]" variant="h5" component="h2">
            {book.title}
          </Typography>
          <div className="flex flex-row mb-5">
          <div className="w-full p-0 flex  justify-center items-center">
            <img src={book.thumbnail} alt="book cover" width={180} height={215}/>
            </div>
            <div className="mb-4 ">
              <span className="modal-label">Description</span>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {book.description}
              </Typography>
            </div >
          </div>
          <div className="px-6 flex flex-col ">

            <div className=" flex items-center">
              <span className="modal-label">Year</span>
              <span className="text-background  font-sans bg-[#d2bb9b] rounded-md p-2  text-[12px] font-thin">{book.published_year}</span>
            </div>
            <div className=" flex items-center ">
              <span className="modal-label">Authors</span>
              <span className="font-sans font-thin">{book.authors}</span>
            </div>
            <div className=" flex items-center ">
              <span className="modal-label">Categories</span>
              <span className="font-sans font-thin">{book.categories}</span>
            </div>
            <div className=" flex items-center ">
              <span className="modal-label">Number Of Pages</span>
              <span className="font-sans font-thin">{book.num_pages}</span>
            </div>
            <div className=" flex items-center ">
              <span className="modal-label">Number Of Pages</span>
              <div className="flex gap-5 items-center flex-row mb-3">
                        <div className="flex flex-row gap-[2px]">
                            {
                                [1,2,3,4,5].map(
                                    (number)=>{
                                        return <AiFillStar strokeWidth={30} stroke="red"  fill={` ${number<=Math.floor(book.average_rating) ? "#6dd604" : "transparent"} `} size={18}></AiFillStar>
                                    })
                                    
                                }
                        </div>
                        <span className="text-text text-[13px]">{book.average_rating}</span>
                    </div>            </div>

          </div>
          <div className="flex justify-center">
            <a className="hover:animate-pulse" target="_blank" href={`https://www.amazon.com/s?k=${book.isbn10}`}>
            <img className="w-60" src="https://kentuckynerd.com/wp-content/uploads/2019/05/amazon-buy-now-button.jpg"/>
            </a>
          </div>




        </Box>
                  
      </Modal>)
}

export default BookModal
