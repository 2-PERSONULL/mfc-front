'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function IntroPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/partner/mypage')
    }, 500)

    return () => clearTimeout(timer) // 컴포넌트가 언마운트되면 타이머를 취소합니다.
  }, [router])

  return (
    <div>
      <div className="absolute right-1/2 bottom-1/2 translate-x-[50%]  translate-y-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="191"
          viewBox="0 0 227 191"
          fill="none"
        >
          <path
            d="M116.435 53.3648V179.131H114.196V0H116.435V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M109.718 53.3648V179.131H105.239V0H109.718V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M80.6083 53.3648V179.131H78.3691V0H80.6083V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M73.8923 53.3648V179.131H69.4141V0H73.8923V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M132.107 53.3648V179.131H129.868V0H132.107V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M125.392 53.3648V179.131H120.914V0H125.392V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M141.065 53.3648V179.131H136.587V0H141.065V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M100.761 53.3648V179.131H98.5215V0H100.761V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M89.5647 53.3648V179.131H85.0864V0H89.5647V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M145.543 53.3648V179.131H147.782V0H145.543V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M0 0.00192261L0 190.328H6.7174L6.7174 0.00192261H0Z"
            fill="#1C1C1C"
          />
          <path
            d="M22.392 53.3648V179.131H20.1528V0H22.392V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M17.9123 53.3648V179.131H13.4341V0H17.9123V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M35.826 53.3648V179.131H33.5869V0H35.826V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M31.3479 53.3648V179.131H26.8696V0H31.3479V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M53.7386 53.3648V179.131H51.4995V0H53.7386V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M44.7826 53.3648V179.131H42.5435V0H44.7826V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M60.4561 53.3648V179.131H67.1735V0H60.4561V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M179.129 53.3648V179.131H181.369V0H179.129V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M185.848 53.3648V179.131H190.326V0H185.848V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M165.695 53.3648V179.131H170.174V0H165.695V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M172.413 53.3648V179.131H176.891V0H172.413V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M217.195 53.3648V179.131H219.434V0H217.195V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M194.804 53.3648V179.131H197.043V0H194.804V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M210.479 53.3648V179.131H212.718V0H210.479V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M154.5 53.3648V179.131H161.218V0H154.5V53.3648Z"
            fill="#1C1C1C"
          />
          <path
            d="M223.978 56.7001V190.326H226.151V0H223.978V56.7001Z"
            fill="#1C1C1C"
          />
          <path
            d="M206 53.3648V179.131H199.282V0H206V53.3648Z"
            fill="#1C1C1C"
          />
          <rect
            x="8.95654"
            y="71.6641"
            width="206"
            height="55.9783"
            fill="white"
          />
          <path
            d="M19.4612 76.5117L26.8157 89.4771L34.1702 76.5117H39.2579V99.4646H34.1702V85.1609L26.8157 98.1263L19.4612 85.1609V99.4646H14.3735V76.5117H19.4612Z"
            fill="#1C1C1C"
          />
          <path
            d="M46.2763 76.5117L52.1867 86.5662L58.3491 76.5117H64.0413L54.7726 91.1835V99.4814H49.6177V91.1835L40.3154 76.5117H46.2931H46.2763Z"
            fill="#1C1C1C"
          />
          <path
            d="M64.9487 76.5117H83.2342V80.9785H70.07V85.9305H81.9749V90.3972H70.07V99.4814H64.9487V76.5285V76.5117Z"
            fill="#1C1C1C"
          />
          <path
            d="M81.3874 99.4959L91.0591 76.543H96.7848L106.457 99.4959H100.714L99.2028 95.8823H88.6076L87.0964 99.4959H81.3706H81.3874ZM97.4397 91.7167L93.9136 83.3352L90.3706 91.7167H97.4397Z"
            fill="#1C1C1C"
          />
          <path
            d="M109.209 92.7118C111.442 94.5688 114.011 95.7231 117 95.7231C119.569 95.7231 120.896 94.5688 120.896 93.1468C120.896 91.5073 119.519 91.0221 115.875 90.2024C110.871 89.0815 107.295 87.7431 107.295 83.2763C107.295 79.0605 110.905 76.1328 116.093 76.1328C119.955 76.1328 122.978 77.3206 125.396 79.3282L122.726 82.8581C120.627 81.2186 118.226 80.3319 115.942 80.3319C113.776 80.3319 112.45 81.4193 112.45 82.7912C112.45 84.4641 113.86 84.9995 117.538 85.8025C122.659 86.8899 126.051 88.3788 126.051 92.6114C126.051 96.844 122.625 99.9055 116.816 99.9055C112.702 99.9055 109.024 98.5671 106.254 96.1079L109.209 92.7452V92.7118Z"
            fill="#1C1C1C"
          />
          <path
            d="M128.335 99.4959V76.543H133.423V85.5602H144.236V76.543H149.324V99.4959H144.236V90.027H133.423V99.4959H128.335Z"
            fill="#1C1C1C"
          />
          <path
            d="M152.816 76.5117H157.937V99.4646H152.816V76.5117Z"
            fill="#1C1C1C"
          />
          <path
            d="M172.865 76.1328C179.749 76.1328 185.458 81.5365 185.458 88.0108C185.458 94.4851 179.732 99.8888 172.865 99.8888C165.997 99.8888 160.238 94.4517 160.238 88.0108C160.238 81.5699 166.048 76.1328 172.865 76.1328ZM172.865 95.4052C176.861 95.4052 180.253 92.0091 180.253 87.9941C180.253 83.979 176.861 80.5829 172.865 80.5829C168.868 80.5829 165.477 84.0124 165.477 87.9941C165.477 91.9757 168.868 95.4052 172.865 95.4052Z"
            fill="#1C1C1C"
          />
          <path
            d="M192.964 76.5117L204.399 91.3676V76.5117H209.52V99.4646H204.399L192.964 84.6423V99.4646H187.876V76.5117H192.964Z"
            fill="#1C1C1C"
          />
          <path
            d="M13.4336 112.763C13.4336 107.36 18.1351 102.859 23.6594 102.859C26.5642 102.859 29.2508 104.081 31.1146 106.071L28.1426 108.731C27.0176 107.46 25.4224 106.573 23.6594 106.573C20.4355 106.573 17.6817 109.434 17.6817 112.763C17.6817 116.092 20.4355 118.953 23.6594 118.953C25.4224 118.953 27.0176 118.1 28.1426 116.795L31.1146 119.489C29.2508 121.446 26.5642 122.684 23.6594 122.684C18.1351 122.684 13.4336 118.15 13.4336 112.78V112.763Z"
            fill="#1C1C1C"
          />
          <path
            d="M41.2063 102.859C46.7809 102.859 51.4152 107.376 51.4152 112.763C51.4152 118.15 46.7809 122.667 41.2063 122.667C35.6316 122.667 30.9805 118.133 30.9805 112.763C30.9805 107.393 35.682 102.859 41.2063 102.859ZM41.2063 118.953C44.4301 118.953 47.1839 116.109 47.1839 112.763C47.1839 109.417 44.4301 106.573 41.2063 106.573C37.9824 106.573 35.2286 109.434 35.2286 112.763C35.2286 116.092 37.9824 118.953 41.2063 118.953Z"
            fill="#1C1C1C"
          />
          <path
            d="M62.6149 102.859C68.1896 102.859 72.8239 107.376 72.8239 112.763C72.8239 118.15 68.1896 122.667 62.6149 122.667C57.0403 122.667 52.3892 118.133 52.3892 112.763C52.3892 107.393 57.0907 102.859 62.6149 102.859ZM62.6149 118.953C65.8388 118.953 68.5926 116.109 68.5926 112.763C68.5926 109.417 65.8388 106.573 62.6149 106.573C59.3911 106.573 56.6373 109.434 56.6373 112.763C56.6373 116.092 59.3911 118.953 62.6149 118.953Z"
            fill="#1C1C1C"
          />
          <path
            d="M83.3518 103.189C87.516 103.189 90.6056 105.882 90.6056 109.646C90.6056 112.507 88.8425 114.732 86.2231 115.652L90.9582 122.344H86.2567L81.8574 116.137H78.835V122.344H74.7212V103.172H83.3686L83.3518 103.189ZM78.8182 106.953V112.356H82.8817C84.9134 112.356 86.3238 111.286 86.3238 109.646C86.3238 108.007 84.9302 106.953 82.8817 106.953H78.8182Z"
            fill="#1C1C1C"
          />
          <path
            d="M92.6201 103.203H99.5213C105.986 103.203 110.587 107.151 110.587 112.789C110.587 118.427 105.986 122.375 99.5213 122.375H92.6201V103.203ZM96.7507 118.628H100.059C103.719 118.628 106.322 116.202 106.322 112.772C106.322 109.343 103.719 106.951 100.059 106.951H96.7507V118.628Z"
            fill="#1C1C1C"
          />
          <path
            d="M112.585 103.203H116.732V122.375H112.585V103.203Z"
            fill="#1C1C1C"
          />
          <path
            d="M123.684 103.203L132.952 115.6V103.203H137.1V122.375H132.952L123.684 110.012V122.375H119.57V103.203H123.684Z"
            fill="#1C1C1C"
          />
          <path
            d="M138.141 122.344L145.982 103.172H150.616L158.458 122.344H153.807L152.581 119.333H144.001L142.775 122.344H138.141ZM151.137 115.853L148.282 108.86L145.411 115.853H151.137Z"
            fill="#1C1C1C"
          />
          <path
            d="M155.856 103.203H171.992V106.934H165.981V122.375H161.851V106.934H155.839V103.203H155.856Z"
            fill="#1C1C1C"
          />
          <path
            d="M182.133 102.859C187.708 102.859 192.342 107.376 192.342 112.763C192.342 118.15 187.708 122.667 182.133 122.667C176.559 122.667 171.908 118.133 171.908 112.763C171.908 107.393 176.609 102.859 182.133 102.859ZM182.133 118.953C185.357 118.953 188.111 116.109 188.111 112.763C188.111 109.417 185.357 106.573 182.133 106.573C178.91 106.573 176.156 109.434 176.156 112.763C176.156 116.092 178.91 118.953 182.133 118.953Z"
            fill="#1C1C1C"
          />
          <path
            d="M202.871 103.189C207.035 103.189 210.125 105.882 210.125 109.646C210.125 112.507 208.362 114.732 205.742 115.652L210.477 122.344H205.776L201.376 116.137H198.354V122.344H194.24V103.172H202.888L202.871 103.189ZM198.337 106.953V112.356H202.401C204.432 112.356 205.843 111.286 205.843 109.646C205.843 108.007 204.449 106.953 202.401 106.953H198.337Z"
            fill="#1C1C1C"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 right-1/2 translate-x-[50%] text-[12px] text-[#8E9195] text-center">
        <p>©2024 MYFASHION COORDINATOR</p>
        <p>ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  )
}
