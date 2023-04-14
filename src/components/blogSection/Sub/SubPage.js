import React from 'react'
import data from './SubDB'
import Sub from './Sub'

function SubPage() {
  return (
    <div>
      <div>
      {
        data.map(Data=>{
            return <div key={Data.id}><Sub Data={Data}/> </div>
        })
      }
    </div>
    </div>
  )
}

export default SubPage
