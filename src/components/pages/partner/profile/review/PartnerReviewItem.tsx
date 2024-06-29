// PartnerReviewItem.js
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { ReviewType } from '@/types/reviewType'

export default function PartnerReviewItem({ review }: { review: ReviewType }) {
  return (
    <div className="flex flex-col bg-white rounded-lg mb-12">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
          <Image
            src={`/review/profile/${review.id}.jpg`}
            alt={review.name}
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.createdAt}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`h-5 w-5 ${
              index < Math.floor(review.rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {review.rating.toFixed(1)}
        </span>
      </div>
      <p className="text-gray-700 mb-4">{review.content}</p>
      {review.reviewImages.length > 0 && (
        <div className="flex space-x-2">
          {review.reviewImages.map((image, index) => (
            <div key={index} className="w-24 h-24 relative">
              <Image
                src={`/review/${image}`}
                alt={`Review image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
