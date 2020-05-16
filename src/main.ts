require('source-map-support').install();

import server from 'server'

function main () : Array<string> {
  server.get('/hello', (req, res) => {
    res.send('hello world')
  })

  return [
    'a'
  ]
}

export default main

main()
