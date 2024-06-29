import React from 'react'
import PartnerReviewItem from '@/components/pages/partner/profile/review/PartnerReviewItem'
import reviewData from '@/libs/reviewSampleData'

export default function PartnerReviewList() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-6">고객 리뷰</h2>
      {reviewData.map((review) => (
        <PartnerReviewItem key={review.id} review={review} />
      ))}
    </div>
  )
}
