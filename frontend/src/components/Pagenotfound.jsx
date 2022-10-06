import React from 'react'
import '../sass/components/_pagenotfound.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Pagenotfound = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
               <div className="text-center">
                  <h1>Error 404 page not found</h1>
                  <p>We used superhuman powers, yet couldn't find the link you are looking for.</p>
                  <a className='btn btn-primary ' href="/">Go Back</a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Pagenotfound