interface Props {
  height?: number
  width?: number
}

export default function DeleteInput({ height, width }: Props) {
  return (
    <svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" fill="#888888" />
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M8.61533 7.99995L12 4.61538L11.3846 4L7.99997 7.38459L4.61538 4L4 4.61538L7.38461 7.99995L4 11.3846L4.61538 12L7.99997 8.61539L11.3846 12L12 11.3846L8.61533 7.99995Z"
        fill="white"
      />
    </svg>
  )
}
