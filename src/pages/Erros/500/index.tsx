import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PAGES_ROUTES } from '../../../constants/pages-routes'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`${PAGES_ROUTES.RootPage}`)
  }, [])
  return <div>Something went wrong!</div>
}

export default ErrorPage
