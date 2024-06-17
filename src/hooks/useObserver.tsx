import { useEffect, useRef } from 'react'

interface ObserverProps {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  onIntersect: () => void
  enabled: boolean
}

const useObserver = ({
  root = null, // 교차할 부모 요소(default: document)
  rootMargin = '0px', // root와  target이 감지하는 여백의 거리
  threshold = 0.1, // 관찰 대상 요소가 얼마나 root에 들어와야 교차되었다고 판단할지 결정 0.1: 요소의 10%가 뷰표트와 교차
  onIntersect, // 교차할 때 실행할 함수
  enabled = true,
}: ObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!enabled) return undefined

    // 이미 존재하는 IntersectionObserver 인스턴스가 있다면 해제
    if (observer.current) observer.current.disconnect()

    // 새로운 IntersectionObserver 인스턴스 생성
    // entries: 관찰 대상 요소들의 배열
    // isIntersecting: 관찰 대상 요소가 교차되었는지 여부
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect()
        }
      },
      {
        root,
        rootMargin,
        threshold,
      },
    )

    const { current: currentObserver } = observer
    const { current: currentRef } = ref

    // currentRef로 지정된 dom 요소가 IntersectionObserver에 의해 관찰되기 시작
    if (currentRef) {
      currentObserver.observe(currentRef)
    }

    // 컴포넌트가 언마운트 되거나 enabled가 false로 변경되면 관찰 중지
    return () => {
      if (currentObserver && currentRef) {
        currentObserver.unobserve(currentRef)
      }
    }
  }, [enabled, root, rootMargin, threshold, onIntersect])

  return ref
}

export default useObserver
