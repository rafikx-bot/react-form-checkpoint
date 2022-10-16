


function App() {
  return (
  <div className="App   d-flex justify-content-center align-items-center" style={{width: '100vw', height:'100vh'}}>
    <div className="wrapper  ">
    <div className="card shadow-lg p-3 mb-5 bg-white rounded " style={{width: '32rem'}}>
  <div className="card-body">
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="username" />
  </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3 row">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
  <div className="col-sm-10">
    <input type="password" className="form-control" id="inputPassword" />
  </div>
</div>

  <button type="button" class="btn btn-outline-primary">Sign up</button>
  <button type="button" class="btn btn-outline-secondary ms-2">Sing in</button>
  </div>
</div>
    </div>
</div>
  )
}

export default App
