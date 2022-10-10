import React from 'react'
import './styles/cardUser.css'



const CardUser = ({ user, deleteUserById, setUpdateInfo, setCloseForm, setIsDelete }) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setCloseForm(false)
  }
  

   const handleDeleteUser = () =>{
    setIsDelete(false)
  }


  return (
    <article className='card_container'>
      <div className='card_header'>
      <i className=" card_user fa-solid fa-circle-user"></i>
      <h2 className='card_name'>{`${user.first_name} ${user.last_name}`}</h2>
      </div>
     
      <ul className='card_info'>
        <li className='card_item'>
      
          <span className='card_span'>Email</span> {user.email}
  
        </li>
        <li className='card_item'>
        <span className='card_span'>Birthday</span>
          <div className='card_item_container'>
            
            <i className="card_gift fa-solid fa-gift"></i>{user.birthday}

          </div>

        </li>
      </ul>
      <footer className='card_footer'>
      <i onClick={handleDeleteUser} className="card_delete fa-regular fa-trash-can"></i>
        
        <i onClick={handleEdit} className="card_edit fa-solid fa-pen-to-square"></i>
      </footer>

    </article>
  )
}

export default CardUser