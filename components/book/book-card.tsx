import useBook from "@/hooks/useBook"
import { Book } from "@/utils/types"
import { MouseEventHandler } from "react"
import { AiFillStar } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import css from "styled-jsx/css"

const GridCard = ( {
    book,
    key,
    setBook,
    setOpen
    }:{
        book:Book,
        key:number,
        setBook:(book:Book)=>void
        setOpen:(open:boolean)=>void
    }) => {

    const handleClickCard : MouseEventHandler<HTMLSpanElement> = (e :any ) => {
        setBook(book)
        setOpen(true)
    }
    const Description = ({input} : {input: string}) =>
    { 
        let truncated = false
        if(input.length>100){
            const last_index = input.lastIndexOf(" ",100)
            input = input.substring(0,last_index)
            truncated = true
        }
        return (
            <p className="text-text mt-4 min-h-[120px]">
                {input}
                {truncated && <span className="text-blue-600 cursor-pointer" onClick={handleClickCard} > ... See Next</span>}
            </p>
        )}

    return (<>
        <div className=" lg:px-[15px] lg:py-[20px] px-[5px] py-[10px]  border-heading rounded-lg  h-[864px] min-w-[400px]">
            <img className=" px-[26px] rounded-md w-full h-3/5  " src={book.thumbnail} alt={book.title} key={key} />
            <div className="flex flex-col justify-between w-full h-fit">
                <div>
                    <h3 className="mt-8 text-heading text-[20px] font-[600]">{book.title}</h3>
                    <div className="text-text">
                        <p className="font-[500] text-[16px]">{book.authors}</p>
                    </div>
                </div>
                <Description input={book.description}/>
                <div className="flex justify-between items-center px-2">
                    <div className="text-background font-sans bg-[#d2bb9b] rounded-md p-3 text-[12px] font-thin">{book.published_year}</div>
                    <div className="flex gap-5 items-center flex-row">
                        <div className="flex flex-row gap-[2px]">
                            {
                                [1,2,3,4,5].map(
                                    (number)=>{
                                        return <AiFillStar strokeWidth={30} stroke="red"  fill={` ${number<=Math.floor(book.average_rating) ? "#6dd604" : "transparent"} `} size={18}></AiFillStar>
                                    })
                                    
                                }
                        </div>
                        <span className="text-text text-[13px]">{book.average_rating}</span>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                <button onClick={handleClickCard} className="bg-primary text-heading font-[600] mt-4 items-center h-[50px] rounded-lg w-2/5">
                    Learn More
                </button>
                </div>
            </div>

        </div>
    </>)
}

export default GridCard