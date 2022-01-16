import './ShowAlert.css';

const ShowAlert = props => {
    const status = props.status;
    const message = props.message;

    return <div className={`alert ${status}`}>{message}</div>
}

export default ShowAlert;