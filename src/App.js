import './App.css';
import Topic1 from './ch1/Topic1';
import Topic4 from './ch4/Topic4';
import Topic5 from './ch5/Topic5';
import Topic7 from './ch7/Topic7';
import Main_Class from './ClassComponents/Main_Class';


function App() {
  return (

    <>
      {/* function Components */}
      
      
      {/* <Topic1 /> */}
      {/* <Topic4/> */}
      {/* <Topic5 /> */}


      {/* class components */}
      {/* <Main_Class/> */}

      {/* useEffcet */}
      <Topic7 />

          <HocRed cmpo={ClickCounter1}/>
     <HocGreen cmpo={ClickCounter1}/>
    </>

  );
}

export default App;
