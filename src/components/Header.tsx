import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { MdOutlineHelpOutline } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'

import Modal from './Modal'

import { StyledHeader, StyledButton } from '../styles/components/Header'

export default function Header() {
  const [showModal, setShowModal] = useState(true)

  function handleShowModal() {
    if (showModal) {
      setShowModal(!showModal)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleShowModal)

    return () => window.removeEventListener('click', handleShowModal)
  }, [showModal])

  return (
    <StyledHeader>
      <StyledButton>
        <Link href="https://github.com/viiniciusgs/leflesko">
          <a target="_blank">
            <GoMarkGithub size={24} />
          </a>
        </Link>
      </StyledButton>

      <h1>Leflesko</h1>

      <StyledButton onClick={() => setShowModal(!showModal)}>
        <MdOutlineHelpOutline size={24} />
      </StyledButton>

      {showModal && <Modal />}
    </StyledHeader>
  )
}
