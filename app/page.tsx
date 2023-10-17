import Image from 'next/image'

import { getReviews } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {

  const reviews = await getReviews();

  return (
    <div className='max-w-4xl mx-auto py-10 bg-gray-200'>
      <header>
        <h1 className='text-5xl font-bold' ><span className='bg-gradient-to-r from-gray-800 via-[#49cea8] to-gray-800 bg-clip-text text-transparent'>Book Reviews</span></h1>
        <p>Some stupid book reviews</p>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {reviews.map((review) => (
        <Link href={`/reviews/${review.slug}`} className='border border-orange-300' key={review._id}>

          <div>
            {review.image && (
              <Image src={review.image} alt={review.alt} width={600} height={600} className='object-cover'/>
            )}
          </div>
          <div className='font-extrabold flex items-center justify-center'>
          {review.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}
