"use client";
import { getReview } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Review } from "@/types/Review";

type Props = {
  params: { review: string };
};

export default function Review({ params }: Props) {
  const slug = params.review;
  //const review = await getReview(slug);
  const router = useRouter();

  const [review, setReview] = useState<Review>();

  useEffect(() => {
    getReview(slug).then((data) => setReview(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchTag, setSearchTag] = useState("");
  const handleSearch = (tag: string) => {
    router.push(`/search/${tag}`);
  };

  return (
    <div className="max-w-full max-h-full bg-[#1E1E1E]  text-[#B2B2B2]">
      {review == null ? (
        <div className="h-screen text-lg font-bold"> </div>
      ) : (
        <div className="max-w-3xl  mx-auto py-5 flex flex-col ">
          <h1 className="flex text-[#E7E7E7] justify-center p-8 text-6xl">{review.name}</h1>

          <div className="flex justify-center bg-gray-800">
            <Image
              src={review.image}
              alt={review.alt}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="pt-4 pl-4 flex flex-col gap-8">
            <p>Author: {review.author} </p>

            <div className="flex flex-col">
              <h1 className="font-bold text-xl text-[#E7E7E7]">Cover review</h1>
              <PortableText value={review.artcontent} />
              <p>artist: {review.artist}</p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-xl text-[#E7E7E7]">Book review</h1>

              <PortableText value={review.content} />
            </div>
            <div className="flex gap-2 ">
              Tags:{" "}
              {review.searchTags.map((tag, i) => (
                <div
                  key={i}
                  onClick={() => {
                    handleSearch(tag);
                  }}
                  className="text-[#64c2f4] hover:cursor-pointer hover:text-[#f4c664]"
                >
                  {tag},
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
