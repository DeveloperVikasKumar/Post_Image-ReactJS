import React, { useState } from 'react'
import './css/addpost.css'
import {useDispatch} from 'react-redux'
import {addPost} from '../features/Create Post/createPostSlice'

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const dispatch = useDispatch()
    
    const addPostHandler = function(event){
        event.preventDefault()
        console.log(imageUrl)
        console.log(title)
        dispatch(addPost(title , imageUrl))
        setTitle('')
        setImageUrl('')
        
    }
  return (
    <section className='post-image-form-container'>
        <form className='post-image-form' onSubmit={addPostHandler}>
            <p>Create Post</p>
            <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} placeholder='Enter Image Title' />
            <input type="url" onChange={(event) => setImageUrl(event.target.value)} value={imageUrl}  placeholder='Enter Image URL'/>
            <button type='submit' id='post-button'>Post</button>
        </form>    
    </section>
  )
}

export default AddPost
