import React from 'react'

type ToggleComponentProps = {
  isChecked: boolean
  setIsChecked: (value: boolean) => void
}

function ToggleComponent({ isChecked, setIsChecked }: ToggleComponentProps) {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        hidden
        defaultChecked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggleSwitch">
        <span className="toggleButton" />
      </label>
    </>
  )
}

export default ToggleComponent
