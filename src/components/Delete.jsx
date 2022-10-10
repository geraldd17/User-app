import React from 'react'

const Delete = ({setIsDelete, user, deleteUserById}) => {

  const handleDeleteClose = () =>{
    setIsDelete(true)
  }
  const handleDeleteyes = () =>{
    deleteUserById(user.id)
    setIsDelete(true)
  }

  return (
 <article className='delete'>
    <div className="delete_modal">
    <h1 className='delete_title'>Atención</h1>
    <div className="delete_message">
        <h3>Esta Seguro Que Desea Eliminar Este Usuario?</h3>
        <div className="delete_icon">
        <i className="fa-regular fa-circle-question"></i>
        </div>
        
    </div>
    <div className="delete_button">
    <button onClick={handleDeleteClose} className='delete_close'>Close</button>
    <button onClick={handleDeleteyes } className='delete_yes'>Sí</button>
    </div>
    
    </div>
   
    
 </article>
  )
}

export default Delete