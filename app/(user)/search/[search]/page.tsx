"use client"
import Image from "next/image";

import { getReviews, searchReviews } from "@/sanity/sanity-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Review } from "@/types/Review";

type Props = {
    params: { search: string }
}

export default function Search({ params }: Props) {
    const searchTerm: string = params.search;

    const [reviews, setReviews] = useState<Review[]>();

    // const reviews = await searchReviews(searchTerm);

    useEffect(() => {
        searchReviews(searchTerm).then(
          (data) => setReviews(data)
        )
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    <div className="max-w-full max-h-full bg-[#e0f2fe]">
    <div className="max-w-full  mx-auto py-10   bg-[#e0f2fe] flex items-center justify-center h-fit ">
      <div className="flex flex-col gap-10 justify-center items-center  w-[80%] overflow-auto pt-6 pb-8 ">
        {
        reviews == null? <>Loading {searchTerm}</> :
        
        reviews.length === 0? <div className="h-screen font-extrabold text-8xl text-orange-500"> no matching results</div> :
        reviews.map((review) => (
          <Link
            href={`/reviews/${review.slug}`}
            className="hover:scale-110 border text-[#cbe6f5] hover:text-[#244265] bg-[#0369a1] border-[#0369a1] hover:bg-[#64c2f4] hover:border-[#64c2f4] w-[30em] flex flex-col items-center justify-center"
            key={review._id}
          >
            <h1 className="font-bold text-xl">{review.name}</h1>
            <div>
              {review.image && (
                <Image
                  src={review.image}
                  alt={review.alt}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              )}
            </div>
            <div className="font-extrabold flex items-center justify-center"></div>
          </Link>
        ))
        
        }
        
      </div>
    </div>
    </div>
  );
}
