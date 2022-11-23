function Avatar(props) {
  return (
    <div id="container" className="container">
      <div className="img">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
          width="300"
          alt="avatar"
          height="200"
        ></img>
      </div>

      <div className="info">
        <h1>{props.username}</h1>
        <h3>Email:{props.email}</h3>
        <h3>Phone:{props.phone}</h3>
        <h3>Company:{props.company}</h3>
        <h3>Website:{props.website}</h3>
        <h3>Address:{props.Address}</h3>
        <hr></hr>
        <div>
          <div></div>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Avatar;
