import React from 'react'

export default () => (
  <div>
    Hi, Dahlia
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: cadetblue;
      }
      div {
        background: bisque;
      }
      @media (max-width: 600px) {
        div {
          background: tan;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: ghostwhite;
      }
    `}</style>
  </div>
)
