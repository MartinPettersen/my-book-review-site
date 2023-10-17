import { getReview } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { review: string };
};

export default async function Review({ params }: Props) {
  const slug = params.review;
  const review = await getReview(slug);

  return (
    <div className="max-w-5xl mx-auto py-40 flex flex-col justify-center">
      <header className="flex justify-center ">
        <h1 className="flex justify-center p-8 text-6xl">{review.name}</h1>
      </header>

      <div className="flex justify-center">
        <Image
          src={review.image}
          alt={review.alt}
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="flex justify-center">
        <PortableText value={review.content} />
      </div>
    </div>
  );
}
