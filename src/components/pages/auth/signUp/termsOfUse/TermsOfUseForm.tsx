import React from 'react'

export default function TermsOfUseForm() {
  return (
    <div className="flex flex-col form-control">
      <label htmlFor="checkAll">
        <input
          type="checkbox"
          name="checkAll"
          id="checkAll"
          className="checkbox mr-2"
        />
        <span className="align-top">전체 동의</span>
      </label>
      <br />
      <label htmlFor="checkbox1">
        <input
          type="checkbox"
          name="checkbox1"
          id="checkbox1"
          className="checkbox mr-2"
        />
        <span className="align-top">만 14세 이상 (필수)</span>
      </label>
      <label htmlFor="checkbox2">
        <input type="checkbox" id="checkbox2" className="checkbox mr-2" />
        <span className="align-top">서비스 이용약관 (필수)</span>
      </label>
      <label htmlFor="checkbox3">
        <input type="checkbox" id="checkbox3" className="checkbox mr-2" />
        <span className="align-top">개인정보처리방침 (필수)</span>
      </label>
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" className="checkbox mr-2" />
        <span className="align-top">개인정보제공내용 (필수)</span>
      </label>
      <label htmlFor="checkbox5">
        <input type="checkbox" id="checkbox5" className="checkbox mr-2" />
        <span className="align-top">
          이벤트, 프로모션 문자(SMS) 수신 및 활용 (선택)
        </span>
      </label>
    </div>
  )
}
