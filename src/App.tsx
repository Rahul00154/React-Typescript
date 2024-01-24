import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <h1>Hello TypeScript</h1>
      <Box
        heading={'Hello Man'}
        // count={13}
        func={(a: string, b: number) => {
          console.log(a, b);
        }}
      >
        <h1>Children Prop</h1>
      </Box>
    </div>
  );
}

export default App;
