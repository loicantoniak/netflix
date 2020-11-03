import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "../containers/profiles";

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    <>
      <SelectProfileContainer user={user} />
    </>
  );
}
