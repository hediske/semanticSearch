// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import weaviate , { ConnectionParams, WeaviateClient } from "weaviate-ts-client"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try{
    const cluster_url ="http://127.0.0.1:8080"
    const cohere_api_key :string= process.env.COHERE_API_KEY!
    const {method} = req
    const {query,userInterests} = req.body
    switch (method){
      case "POST":
        let headers : {[key:string]:string}= {}
        headers['X-Cohere-Api-Key'] =cohere_api_key
        const connectionParams : ConnectionParams = {
          scheme: 'http',
          host: cluster_url,
          headers: headers
        }
        const client:WeaviateClient = weaviate.client(connectionParams)
        console.log(client.misc.liveChecker())
        const generatePrompt = "I want you to act as a book recommendation engine. I will tell you what books you can recommend. I ask you to answer questions like what book do you recommend to someone who has interests or hobbies in " + userInterests + ". the book's title is {title}, with a description: {description}, and is in the genre: {categories} . Don't make up anything that wasn't given in this prompt and don't ask how you can help."
        
        let ReqBuilder =  client.graphql
          .get()
          .withClassName("Book")
          .withGenerate({singlePrompt:generatePrompt})
          .withNearText({
            certainty: 0.6,
            concepts: [query],
          })
          .withLimit(20)
          .withFields('title isbn10 isbn13 categories thumbnail description num_pages average_rating published_year authors')
            
          const results = await ReqBuilder.do()
          res.status(200).json(results)
          break
      default:
        res.status(400)
        break
    
    } 

  }catch (error){
    console.log(error)
    res.status(500).json({ name: error });
  }
}
