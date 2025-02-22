import React,{useMemo} from 'react'

const Headers = ({func}) => {
    console.log("Headers")
    func()
  return (
    <div>Headers</div>
  )
}

export default React.memo(Headers);