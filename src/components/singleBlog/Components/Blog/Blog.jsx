import React from 'react'
import css from './Blog.module.css'
import { useParams } from 'react-router-dom'

import datas from '../../../blogSection/Sub/SubDB'

export default function Blog() {
  const {id} = useParams()

  const data = datas.find((data)=> data.id == id)

  return (
    <div>
      <div className={css.row1}>
        {/* <p>{id}</p> */}
        <img src={data.img} style={{
            // margin:`8%`,
            borderRadius:`0 40px 0 40px`, 
            height: `400px`,
            width: `600px` 
        }}/>
      </div>
      <div className={css.row1}>
        <h2>{data.TextH}</h2> 
        <p>{data.TextP}</p>
        <p>{data.textFull}</p>
      </div>
    </div>
  )
}
