import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function ViewReqRefImages({
  title,
  refImgs,
}: {
  title: string
  refImgs: string[]
}) {
  return (
    <section className="overflow-hidden">
      <p className="text-[17px] text-black font-semibold mb-5">{title}</p>
      <section className="w-full">
        {refImgs ? (
          <Carousel>
            <CarouselContent>
              {refImgs.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative" style={{ width: 350, height: 350 }}>
                    <Image
                      src={img}
                      alt="Reference Images"
                      fill
                      priority
                      sizes="(max-width: 100%) 100vw, 100px"
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <p>참고 스타일 이미지가 없습니다.</p>
        )}
      </section>
    </section>
  )
}
