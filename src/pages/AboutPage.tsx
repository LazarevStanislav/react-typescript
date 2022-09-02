import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useNavigate()

  return (
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores dolorum dolor autem magnam, corrupti dolores tempore itaque necessitatibus ad?</p>
      <button className="btn" onClick={() => history("/", { replace: true })}>обратно к списку дел</button>
    </>
  )
}

