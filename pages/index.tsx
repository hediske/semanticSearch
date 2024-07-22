import BookGrid from "@/components/book/book-grid";
import { Book, Books } from "@/utils/types";
import { recordTraceEvents } from "next/dist/trace";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
export default function Home() {
  const [query, setQuery] = useState('');
  const [hobbies,setHobbies] = useState('');
  const [loading, setLoading] = useState(false);
  const [noquery, setNoquery] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

const uniqBy = (data: Books, key:(item: Book) => number ) => {
    const map : Map<number,Book> = new Map();
    data.forEach((item: Book,index:number) => map.set(key(item), item));
    return  Array.from(map.values());
}


  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log("Search : "+query)
    if(query==""){
      setNoquery(true)
      return
    }
    setNoquery(false)
    setLoading(true);

    await fetch('/api/recommendation', {
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        query:query,
        userInterests:hobbies
      })
    })
    .then(
      response => response.json(),
      error => console.log(error))
    .then(results => {
      setRecommendations(results.data.Get.Book)})
    
    setLoading(false)
  }
  return (
    <main
      className='containerlg'
    >
      <h1 className="text-[40px] text-heading font-[700]">
        Book Recommandation | Semantic Search App
      </h1>

      <form className="w-full text-text mt-[100px] ">
        <div className="flex flex-col w-full gap-6">
        <label htmlFor="Category" className="font-[600] text-[20px]">What would you like to get a book recommendation on?
        </label>
        <input value={query} required onChange={(e) =>{setQuery(e.target.value)}} placeholder="I want to learn about ..." type="text" id="Category" className="w-full  bg-white p-4 rounded-lg h-[50px] " />
        { noquery && <span className="text-red text-[15px]">Please provide a query</span>}
        </div>

        <div className="flex flex-col w-full mt-5 gap-6">
        <label htmlFor="Category" className="font-[600] text-[20px]">Your Interests and Hobbies
        </label>
        <input value={hobbies} onChange={(e) => {setHobbies(e.target.value)}} placeholder="Tell us about your hobbies and interests, comma seperated ..." type="text" id="Category" className="w-full  bg-white p-4 rounded-lg h-[50px] "/>
        </div>
        <button type="submit" onClick={handleSubmit} className="bg-primary text-[20px] mt-5 w-full h-[50px] text-white rounded-full">  {loading ?<><PulseLoader color="white" size={7} /> Processing</>  : "Get Recommendations"}</button>
      </form>
        {/* <RecommandationGrid/> */}
        {recommendations.length>0 && <BookGrid books={uniqBy(recommendations,(item:Book) => item.isbn13)}/>}
    </main>
  );
}
