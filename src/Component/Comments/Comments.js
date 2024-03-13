import React from 'react'
import './Comments.css'
import Errorbox from '../Errorbox/Errorbox'
import DeleteModal from '../DeleteModal/DeleteModal'

function Comments() {
  return (
    <div>
      <Errorbox msg="هیچ کامنتی یافت نشد"/>
      <DeleteModal />
    </div>
  )
}

export default Comments