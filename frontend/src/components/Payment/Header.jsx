
import '../Header.css';
import logosvg from '../../assets/logo.svg';
const Header = () => {
  return (
    <div className='Header_payment'>
       <img src={logosvg} alt="imgerror"  className='logo'  />
       <div className='header_right'>
       <span className="header_right_content">Support 5 days a week, call us at <a href="tel:+1 (855) 335-9779">+1 (855) 335-9779</a></span>

       </div>
       
      </div>
  )
}

export default Header