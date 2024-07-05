import { Button } from 'react-bootstrap'; //  COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // COMMENT IN FOR AUTH
import { useState } from 'react';
import { useAuth } from '../utils/context/authContext'; //  COMMENT IN FOR AUTH

function Home() {
  const [value, setValue] = useState(0);
  const { user } = useAuth(); //  COMMENT IN FOR AUTH

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  // const user = { displayName: 'Dr. T' }; /COMMENT OUT FOR AUTH
  return (
    <><h1>Hello {user.displayName}! </h1>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <Button onClick={handleClick}>Increment</Button>
      <Button onClick={() => setValue((prevState) => prevState - 1)}>Decrement</Button>
      <Button onClick={() => setValue(0)}>Reset</Button>
    </>
  );
}

export default Home;
