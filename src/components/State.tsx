import { FormEvent, useState } from 'react';

interface Person {
  name: string;
  age: number;
}

const State = () => {
  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="user">User:</label>
      <input
        type="text"
        placeholder="Name"
        value={user?.name || ''}
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, name: e.target.value }))
        }
        // we use here ! operator so that it not gives error of null||undefined
      />
      <label htmlFor="user">Age:</label>
      <input
        type="text"
        placeholder="Age"
        value={user?.age || ''} //this gives error that component changing an uncontrolled input to a control
        //so we provide or condition here that age is empty
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
        }
        // we use here ! operator so that it not gives error of null||undefined
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default State;
