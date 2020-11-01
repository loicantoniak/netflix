import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const database = firebase.firestore();

  useEffect(() => {
    database
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [database, target]);

  return { [target]: content };
}
