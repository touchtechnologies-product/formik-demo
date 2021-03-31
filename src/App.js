import './App.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confirmPassword: '',
}

const YupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter Email.')
    .email('Must be Email formal.'),
  first_name: Yup.string().required('Please enter first name.'),
  last_name: Yup.string().required('Please enter last name.'),
  password: Yup.string()
    .min(8, 'Password too short')
    .required('Please enter password.'),
  confirmPassword: Yup.string()
    .required('Please enter confirm password.')
    .test('password-march', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
})

const onSubmit = (val) => {
  alert(JSON.stringify(val))
}

function App() {
  const form = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: YupSchema,
  })

  return (
    <div className='App'>
      <div className='container'>
        <h1>REGISTER</h1>
        <form onSubmit={form.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='text'
              id='email'
              placeholder='Enter name'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.email}
            />
            {form.errors.email && form.touched.email && (
              <span>{form.errors.email}</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='first_name'>First name</label>
            <input
              type='text'
              id='first_name'
              placeholder='Enter First name'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.first_name}
            />
            {form.errors.first_name && form.touched.first_name && (
              <span>{form.errors.first_name}</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='last_name'>Last name</label>
            <input
              type='text'
              id='last_name'
              placeholder='Enter Last name'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.last_name}
            />
            {form.errors.last_name && form.touched.last_name && (
              <span>{form.errors.last_name}</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Password'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.password}
            />
            {form.errors.password && form.touched.password && (
              <span>{form.errors.password}</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Enter Confirm Password'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.confirmPassword}
            />
            {form.errors.confirmPassword && form.touched.confirmPassword && (
              <span>{form.errors.confirmPassword}</span>
            )}
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
