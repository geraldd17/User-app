import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'


const defaulValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUser = ({ newUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm }) => {
    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }

    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            newUser(data)
        }
        reset(defaulValues)
        setCloseForm(true)
    }
  const handlecloseForm = () =>{
    setCloseForm(true)
  }
   

    return (
        <form className='form' onSubmit={handleSubmit(submit)} >
            <i onClick={handlecloseForm} className="form_close fa-solid fa-rectangle-xmark"></i>
            <h2 className='form_title'> {updateInfo ? 'Edit User' : 'New User'}</h2>

            <div className="name">
                <div className='name_element'>
                    <div>
                    <i  className="form_icon2 fa-solid fa-user"></i>
                    </div>
                    <div>
                    <input className='form_input2' type="text" placeholder='First Name' id="first_name"  {...register('first_name')} />
                    </div>
                    <div>
                    <input className='form_input2' type="text" placeholder='Last Name' id="last_name"  {...register('last_name')} />
                    </div>
                   
        
                </div>
            </div>


            <div className='form_element'>
                <i className="form_icon fa-solid fa-inbox"></i>
                <input className='form_input' type="email" placeholder='Email' id="email"  {...register('email')} />
            </div>
            <div className='form_element'>
                <i className="form_icon fa-solid fa-lock"></i>
                <input className='form_input' type="password" placeholder='Password' id="password" {...register('password')} />
            </div>

            <div className='form_element'>
                <i className="form_icon fa-solid fa-cake-candles"></i>
                <input className='form_input' type="date" placeholder='BirthDay' id="birthday"  {...register('birthday')} />
            </div>
            <button className='form_button'>{updateInfo ? 'Update' : 'Add User'} </button>
        </form>
    )
}

export default FormUser