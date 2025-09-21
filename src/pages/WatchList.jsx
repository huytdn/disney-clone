import React, { useEffect, useState } from "react";
const [account, setAccount] = useState(null);

useEffect(() => {
  let session = sessionStorage.getItem("account");
  if (session) {
    setAccount(JSON.parse(session));
  }
}, []);

function WatchList() {
  return <div>WatchList</div>;
}

export default WatchList;
