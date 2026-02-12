import "./App.css";
function Profile(props) {
  return (
    <>
      <div className="profile">
        <img src={props.image} alt="image" className="image" />
        <p className="name">{props.name}</p>
        <p className="name">{props.designation}</p>
        <p className="skill">
          {props.Skill.map((value) => (
            <li key={value} className="list">{value}</li>
          ))}
        </p>
      </div>
    </>
  );
}

export default Profile;
