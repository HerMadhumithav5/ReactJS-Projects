import "./App.css";
function Profile(props) {
  return (
    <>
      <div className="profile">
        <img src={props.image} alt="image" className="image" />
        <p className="name">{props.name}</p>
        <p className="name">{props.designation}</p>
        <ul className="skill">
          {props.skill.map((value) => (
            <li key={value} className="list">{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Profile;
