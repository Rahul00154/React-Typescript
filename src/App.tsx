// import Box from './components/Box';
import { useState } from 'react';
import Generics from './components/Generics';

function App() {
  const [val, setVal] = useState<string>('');
  return (
    <div className="App">
      <h1>Hello TypeScript</h1>
      {/* <Box
        heading={'Hello Man'}
        // count={13}
        func={(a: string, b: number) => {
          console.log(a, b);
        }}
      >
        {/* <h1>Children Prop</h1> */}
      {/* </Box> */}
      // <h1></h1>
      <Generics
        label={'Search'}
        value={val}
        setter={setVal}
      />
    </div>
  );
}

export default App;
