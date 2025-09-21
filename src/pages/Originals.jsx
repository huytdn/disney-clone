import React, { useEffect, useState } from "react";

function Originals() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);

  return <div>Originals</div>;
}

export default Originals;
