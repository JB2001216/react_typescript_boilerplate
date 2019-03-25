import React, { useEffect } from 'react'

import { config, query } from './src'

const GET_PERSONS = `
  {
    allPersons {
      id
      name
    }
  }
`

config({
  graphql: {
    endpoint: 'https://api.graph.cool/simple/v1/swapi',
  },
})

const Query = () => {
  const [data, setData] = React.useState()
  useEffect(() => {
    async function queryData() {
      const data = await query(GET_PERSONS)
      setData(data)
    }
    queryData()
  }, [])

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Query
