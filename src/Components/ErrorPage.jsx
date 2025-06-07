import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
     const error= useRouteError();
      console.log(error);
  return (
    <>
    <h1> Oops! An error has been occured</h1>
    <h1>{error && <p>{error.data}</p>}</h1>
     <NavLink to="/"><button>Go Home</button></NavLink>
    </>
  )
}

export default ErrorPage