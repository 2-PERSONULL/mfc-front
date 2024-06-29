import { TitleMapKey } from '@/types/titleMapType'

const titleMap: { [key in TitleMapKey]: string } = {
  mypage: '마이페이지',
  profile: '프로필 관리',
  editstyle: '선호 스타일 수정',
  editbodyinfo: '신체 정보 수정',
  editsize: '옷 사이즈 수정',
  reqlist: '요청서 관리',
  newreq: '신규 요청서 작성',
  editrequest: '요청서 수정',
  paymentlist: '결제 관리',
  charge: '캐시 충전',
  likelist: '좋아요 관리',
  followlist: '팔로우 관리',
}

export default titleMap
