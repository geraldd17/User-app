import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUser from './components/CardUser'
import Delete from './components/Delete'
import FormUser from './components/FormUser'

const databaseURL = 'https://users-crud1.herokuapp.com'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const [isDelete, setIsDelete] = useState(true)


  const getUsers = () => {
    const URL = `${databaseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const newUser = data => {
    const URL = `${databaseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))

  }

  console.log(users)

  const deleteUserById = id => {
    const URL = `${databaseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${databaseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setCloseForm(false)
  }



  return (
    <div className="App">
      <div className='App_header'>
        <h1 className='App_title'>User Forms</h1>
        <button onClick={handleOpenForm} className='App_btn'> Create a New User</button>
      </div>

      <div className={`form_container ${closeForm && 'disable_form'}`}>
        <FormUser
          newUser={newUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />

      </div>

      <div className="users_container">

        {

          users?.map(user => (
            <CardUser
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
              setIsDelete={setIsDelete}
            />
          ))
        }
      </div>

      <div className={`users_container ${isDelete && 'disable_form'}`}>

        {

          users?.map(user => (
            <Delete
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setIsDelete={setIsDelete}


            />

          ))



        }

      </div>


    </div>
  )
}

export default App
