import React, { useEffect, useState } from 'react'
import { NavbarContainer, NavbarSpace } from '../styles'
import logo from '../images/logo.png'

export default () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  return (
    <>
      <NavbarContainer scrollPosition={scrollPosition}>
        <div>
          <img src={logo} alt="logo" height="60" />
        </div>
        <div>
          <div>
            ละคร
          </div>
          <div>
            กีฬา
          </div>
          <div>
            เศรษฐกิจ
          </div>
          <div>
            คำถามยอดฮิต
          </div>
          <div>
            Login
          </div>
        </div>
      </NavbarContainer>
      <NavbarSpace />
    </>
  )
}
