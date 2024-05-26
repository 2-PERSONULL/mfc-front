import React from 'react'
import Image from 'next/image'

export default function PartnerPrice() {
  return (
    <div className="py-8">
      <div className="flex justify-between mb-2">
        <h1 className="text-[18px] font-bold mr-2">가격</h1>
        <Image
          src="/images/pencil-icon.svg"
          alt="edit icon"
          width={21}
          height={21}
        />
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>옵션명</th>
              <th>금액</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>코디 1회</td>
              <td>10,000</td>
              <td>아이템 수 무관</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
