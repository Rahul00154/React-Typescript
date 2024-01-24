import { ReactNode } from 'react';

type PropsType = {
  heading: string;
  //agar hmlg ko props me default props use karte hain so we use option type
  count?: number;
  func: (a: string, b: number) => void; //function type
  //when we pass children as a props
  children: ReactNode;
};

//here we destructure props so we can not provide type like normal so we provide like desctructure in order and one another way is to we use type aliases or interface here
const Box = ({ heading, count = 14, func, children }: PropsType) => {
  func('Hello', 12);
  return (
    <div>
      {heading}
      <p>{count}</p>
      {children}
    </div>
  );
};

export default Box;
