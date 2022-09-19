import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function showData(e) {
    e.preventDefault();

    alert('aaa');
  }

  return (
    <form onSubmit={(e) => showData(e)}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
