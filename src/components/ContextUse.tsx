import { useContext } from 'react';
import { ThemeContext } from './Context';

const ContextUse = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="box-container"
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
    >
      <h1>Context TypeScript</h1>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default ContextUse;
