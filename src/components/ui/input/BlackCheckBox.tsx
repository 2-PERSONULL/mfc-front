import React from 'react'

export default function BlackCheckBox({
  checked,
  onChangeCheck,
}: {
  checked: boolean
  onChangeCheck: () => void
}) {
  return (
    <input
      type="checkbox"
      id="common-checkbox"
      className="checkbox mr-2 "
      checked={checked}
      onChange={onChangeCheck}
    />
  )
}
