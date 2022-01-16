import Modal from 'react-modal';
import { isAuth} from '../../utils/cookie';
import LoginForm from './LoginForm';
import AddGunpla from './AddGunpla';
import './Login.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      width: '512px',
    },
  };

const Login = props => {

    const state = props.state;

    const closeModal = props.closeModal;

    const openModal = props.openModal;

    return (
        <Modal
            isOpen={state}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='user'
        >
            {!isAuth() && <LoginForm />}
            {isAuth() && <AddGunpla openModal={openModal} closeModal={closeModal}/>}
        </Modal>
    )
}

export default Login