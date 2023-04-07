import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Header = (props) => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <button
                  className='btn btn-custom btn-lg page-scroll'
                  onClick={handleLogout}
                >
                 {user.uid ? "Log Out" : "Sign In"} 
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
