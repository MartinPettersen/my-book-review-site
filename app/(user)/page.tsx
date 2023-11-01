import Image from "next/image";

import { getReviews } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <div className="max-w-full  mx-auto py-10   bg-[#1E1E1E] flex items-center justify-center h-fit ">
      <div className="flex flex-col gap-10 justify-center items-center  w-[80%] overflow-auto pt-6 pb-8 ">
        {reviews.map((review) => (
          <Link
            href={`/reviews/${review.slug}`}
            className="hover:scale-110 border text-[#E7E7E7] hover:text-[#E7E7E7] bg-[#2A2A2A] border-[#353535] hover:bg-[#353535] hover:border-[#353535] w-[30em] flex flex-col items-center justify-center"
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
        ))}
      </div>
    </div>
  );
}
