import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Repo() {
  const [repo, setRepo] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/users/OlhaGr/repos')
      .then((response) => setRepo(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container" id="repos">
      <h3>Repositories</h3>
      <ul>
        {Object.values(repo).map((item) => (
          <li key={item.id}>
            <a href={'https://github.com/' + item.full_name}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
