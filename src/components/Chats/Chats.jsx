import { useContext, useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/authContext";

//import userNoAvatar from "../../assets/img/icons/userNoAvatar.png";

import "./Chats.css";

export const Chats = () => {
  const currentUser = useContext(AuthContext);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <section className="chat-section">
      {Object.entries(chats)?.map((chat) => {
        return (
          <div key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt="User profile picture" />
            <p>{chat[1].userInfo.displayName}</p>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        );
      })}
    </section>
  );
};
