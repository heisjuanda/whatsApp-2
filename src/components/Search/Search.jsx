import { useState, useContext } from "react";

import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/authContext";

import "./Search.css";

export const Search = () => {
  const currentUser = useContext(AuthContext);

  const [userName, setUserName] = useState();
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (userName !== "") {
      const q = query(
        collection(db, "users"),
        orderBy("displayName"),
        startAt(userName),
        endAt(userName  + "\uf8ff" )
      );
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
          setError("");
        } else {
          setUserName(null);
          setUser(null);
          setError("User not found");
        }
      } catch (err) {
        setError("Something fail");
      }
    } else {
      setError("");
      setUser(null);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    }

    setUser(null);
    setUserName(null);
  };

  return (
    <div className="search-section__container">
      <div>
        <input
          type="text"
          placeholder="Search user"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyDown={handleKey}
        />
      </div>
      {error && (
        <div className="error-container">
          <div>
            <span>{error}</span>
          </div>
        </div>
      )}
      {user && error !== "Not found" && (
        <div className="userContainer" onClick={handleSelect}>
          <div>
            <img src={user.photoURL} alt="User profile picture" />
            <p>{user.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
};
