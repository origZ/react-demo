import React, { memo, useEffect, useState } from "react";
import { GithubWrapper } from "./style";
import UserCard from "./userCard";

const GithubProfileFinder = memo(() => {
  const [userName, setUserName] = useState("origZ");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div>加载中!请等候...</div>;
  }

  return (
    <GithubWrapper>
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> : null}
    </GithubWrapper>
  );
});

export default GithubProfileFinder;
