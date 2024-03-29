import backgroundImg from '../../assets/Login/backgroundImg.webp'
import './login.css'


const Login = () => {
  return (
    <section className='login-container container-fluid p-0 m-0 bg-black'>
        <img src={backgroundImg} className='img-ingreso'/>
    </section>
  )
}

export default Login