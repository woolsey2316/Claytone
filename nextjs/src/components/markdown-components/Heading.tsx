import React from 'react'

const H1: React.FC = (props) => {
  return (
    <h1 {...props} className="text-6xl mb-3"></h1>
  )
}
const H2: React.FC = (props) => {
  return (
    <h2 {...props} className="text-5xl mb-3"></h2>
  )
}
const H3: React.FC = (props) => {
  return (
    <h3 {...props} className="text-4xl mb-2"></h3>
  )
}
const H4: React.FC = (props) => {
  return (
    <h4 {...props} className="text-3xl mb-2"></h4>
  )
}
const H5: React.FC = (props) => {
  return (
    <h5 {...props} className="text-2xl mb-1"></h5>
  )
}

const H6: React.FC = (props) => {
  return (
    <h6 {...props} className="font-bold text-grey2 mb-1"></h6>
  )
}

const Heading = {
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
  H5: H5,
  H6: H6
}

export { Heading }