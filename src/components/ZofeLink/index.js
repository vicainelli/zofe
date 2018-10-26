import React from 'react'
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, ...other }) => {
  // If a link starts with `/`, it is internal, otherwise it isn't.
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  )
}

export default Link
