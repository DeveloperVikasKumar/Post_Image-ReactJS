import React from 'react'
import './App.css'
import {Header, Footer} from './components'
import {AddPost, Postlist} from './components'
const App = () => {
  return (
    <>
      <Header />
        <section className='main-page-container'>
          <AddPost />
          <Postlist />
        </section>
      <Footer />
    </>
  )
}

export default App
