import React from 'react'
import Home from './home/home'
import { Route, Routes } from 'react-router-dom'
import Assignment from './assignments/assignments'
import SignUp from './components/signup'



export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Assignment />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </div>
    </>
  )
}

