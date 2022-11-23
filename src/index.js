import React from "react";
import ReactDOM from "react-dom/client";
import AddAvatar from "./AddAvatar";
import Avatar from "./Avatar";
import "./Avatar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Array info about avatar
export const AvatarInfo = [
  {
    username: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    company: "Romaguera-Crona",
    website: "hildegard.org",
    address: "Kulas Light, Apt. 556, Gwenborough, 92998-3874",
  },
  {
    username: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "10-692-6593 x09125",
    company: "Deckow-Crist",
    website: "anastasia.net",
    address: "Victor Plains, Suite 879, Wisokyburgh, 90566-7771",
  },

  {
    username: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
    website: " ramiro.info",
    address: "Douglas Extension, Suite 847, McKenziehaven, 59590-4157",
  },
  {
    username: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: " 493-170-9623 x156",
    company: " Robel-Corkery",
    website: "kale.biz",
    address: "Hoeger Mall, Apt. 692, South Elvis, 53919-4257",
  },

  {
    username: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    company: "Keebler LLC",
    website: "demarco.info",
    address: "Skiles Walks, Suite 351, Roscoeview, 33263",
  },
  {
    username: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    phone: " 1-477-935-8478 x6430",
    company: " Considine-Lockman",
    website: "ola.org",
    address: "Norberto Crossing, Apt. 950, South Christy, 23505-1337",
  },
  {
    username: "Mrs. Sarah Schulist",
    email: "Karley_Dach@jasper.info",
    phone: " 1-477-935-8478 x6430",
    company: " Considine-Lockman",
    website: "ola.org",
    address: "Norberto Crossing, Apt. 950, South Christy, 23505-1337",
  },

  {
    username: "Pakoner",
    email: "Karley_Dach@jasper.info",
    phone: " 1-477-935-8478 x6430",
    company: " Considine-Lockman",
    website: "ola.org",
    address: "Norberto Crossing, Apt. 950, South Christy, 23505-1337",
  },
];

const results = [];

AvatarInfo.forEach(avatarinfo => {
  results.push(

<Avatar
      username={avatarinfo.username}
      email={avatarinfo.email}
      phone={avatarinfo.phone}
      company={avatarinfo.company}
      website={avatarinfo.website}
      Address={avatarinfo.Address}
    />

  );

  });

root.render(
  <React.StrictMode>
    <AddAvatar></AddAvatar>
{results}
    {/* <Avatar
      username={AvatarInfo[0].username}
      email={AvatarInfo[0].email}
      phone={AvatarInfo[0].phone}
      company={AvatarInfo[0].company}
      website={AvatarInfo[0].website}
      Address={AvatarInfo[0].Address}
    />
    <Avatar
      username={AvatarInfo[1].username}
      email={AvatarInfo[1].email}
      phone={AvatarInfo[1].phone}
      company={AvatarInfo[1].company}
      website={AvatarInfo[1].website}
      Address={AvatarInfo[1].Address}
    />
    <Avatar
       username={AvatarInfo[2].username}
       email={AvatarInfo[2].email}
       phone={AvatarInfo[2].phone}
       company={AvatarInfo[2].company}
       website={AvatarInfo[2].website}
       Address={AvatarInfo[2].Address}
    />
    <Avatar
       username={AvatarInfo[3].username}
       email={AvatarInfo[3].email}
       phone={AvatarInfo[3].phone}
       company={AvatarInfo[3].company}
       website={AvatarInfo[3].website}
       Address={AvatarInfo[3].Address}
    />
    <Avatar
     username={AvatarInfo[4].username}
     email={AvatarInfo[4].email}
     phone={AvatarInfo[4].phone}
     company={AvatarInfo[4].company}
     website={AvatarInfo[4].website}
     Address={AvatarInfo[4].Address}
    />
    <Avatar
      username={AvatarInfo[5].username}
      email={AvatarInfo[5].email}
      phone={AvatarInfo[5].phone}
      company={AvatarInfo[5].company}
      website={AvatarInfo[5].website}
      Address={AvatarInfo[5].Address}
    /> */}
  </React.StrictMode>
);
