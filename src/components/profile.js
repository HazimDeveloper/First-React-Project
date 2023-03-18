
const Profile = (props) => {
    return (
      <div className="App">
        <p> My Name Is {props.name}  </p>
        <p> My Job Is  {props.work}</p>
      </div>
    );
  }
  
  export default Profile;