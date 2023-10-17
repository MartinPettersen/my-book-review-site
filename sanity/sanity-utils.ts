import { Review } from "@/types/Review";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getReviews(): Promise<Review[]> {
    


    return createClient(clientConfig).fetch(
        groq`*[_type == "review"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            content
        }`
    )
}

export async function getReview(slug: string): Promise<Review> {
    
    return createClient(clientConfig).fetch(
        groq`*[_type == "review" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content
        }`,
        { slug }
    )
}