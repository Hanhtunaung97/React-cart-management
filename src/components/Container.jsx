import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' max-w-[1000px] mx-auto p-3 lg:p-0'>{children}</div>
  )
}

export default Container