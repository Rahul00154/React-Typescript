// import Box from './components/Box';
// import Generics from './components/Generics';
import Context from './components/Context';
import Reducer from './components/Reducer';
import State from './components/State';

function App() {
  // const [val, setVal] = useState<string>('');
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
      {/* // <h1></h1>
      <Generics
        label={'Search'}
        value={val}
        setter={setVal}
      /> */}

      <State />
      <Context />
      <Reducer />
    </div>
  );
}

export default App;
