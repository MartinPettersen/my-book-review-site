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
            "alt": image.alt,
            "artist": image.artist,
            artcontent,
            author,
            content,
            searchTags,
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
            "artist": image.artist,
            artcontent,
            url,
            author,
            content,
            searchTags,
        }`,
        { slug }
    )
}

export async function searchReviews(searchTerm: string): Promise<Review[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "review" && $searchTerm in searchTags]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            "artist": image.artist,
            artcontent,
            url,
            author,
            content,
            searchTags,
        }`,
        { searchTerm }
    )
}