import React from "react";
import ReactDOM from "react-dom/client";
import Formik from "./Formik";
import AddAvatar from "./AddAvatar";
import "./Avatar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

root.render(
  <React.StrictMode>
    {/* <Formik></Formik> */}
    

<AddAvatar></AddAvatar>

  </React.StrictMode>
);



