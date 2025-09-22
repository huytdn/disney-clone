import React, { useEffect, useState } from "react";

function WatchList() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return <div>WatchList</div>;
}

export default WatchList;
