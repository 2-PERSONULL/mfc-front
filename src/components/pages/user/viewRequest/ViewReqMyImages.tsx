import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function ViewReqMyImages({
  title,
  myImgs,
}: {
  title: string
  myImgs: string[]
}) {
  return (
    <section className="overflow-hidden">
      <p className="text-sm text-black font-semibold">{title}</p>
      <section className="w-full">
        {myImgs ? (
          <Carousel>
            <CarouselContent>
              {myImgs.map((img, idx) => (
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
          <p>내 이미지가 없습니다.</p>
        )}
      </section>
    </section>
  )
}
