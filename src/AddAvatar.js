import { useState } from "react";
import Avatar from "./Avatar";
import "./Modal.css";
import { AvatarInfo } from "./index";
//test amend
//branchs
//Add avatar component
const AddAvatar = () => {
  //modal initial set to false
  const [modal, setModal] = useState(false);

  //set modal to true or false
  const toggleModal = () => {
    setModal(!modal);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setwebsite] = useState("");
  const [address, setAddress] = useState("");

  /*Avatar initial state set to Array of AvatarInfo
   */
  const [avatar, setAvatar] = useState(AvatarInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && email && phone && company && website && address) {
      const person = { username, email, phone, company, website, address };

      console.log(avatar);

      //Append element
      avatar.unsh
      
      
      ift(person);

      setAvatar(avatar);

      //clear inputs
      setUsername("");
      setEmail("");
      setAddress("");
      setEmail("");
      setCompany("");
      setwebsite("");
      setphone("");
      console.log(avatar);
      //close modal
      setModal(false);
    } else {
      alert("Fill all input");
      console.log(AvatarInfo);
    }
  };
  return (
    <>
      {/* open modal render form */}
      <button onClick={toggleModal} className="button">
        Add Avatar
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <article>
              {/* form  */}
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="username">Name : </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="username">Phone : </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="username">Company : </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="username">Website : </label>
                  <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={(e) => setwebsite(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="username">Address : </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <button className="button" type="submit">
                  Add Avatar
                </button>
              </form>
              {/* close button */}
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </article>
          </div>
        </div>
      )}

      {avatar
      
        .map((person) => {
          const { username, email, phone, website, address, company } = person;

          return (
            <Avatar
              username={username}
              email={email}
              phone={phone}
              company={company}
              website={website}
              Address={address}
            />
          );
        })}

        {}
    </>
  );
};

export default AddAvatar;
