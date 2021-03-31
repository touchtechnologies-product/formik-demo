import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>REGISTER</h1>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input type='text' id='email' placeholder='Enter name' />
            <span>Test error message</span>
          </div>
          <div className='form-group'>
            <label htmlFor='first_name'>First name</label>
            <input type='text' id='first_name' placeholder='Enter First name' />
          </div>
          <div className='form-group'>
            <label htmlFor='last_name'>Last name</label>
            <input type='text' id='last_name' placeholder='Enter Last name' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Password' />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Enter Confirm Password'
            />
          </div>
          <button type='submit' className='btn' style={{ width: '100%' }}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
