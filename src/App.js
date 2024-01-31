import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div style={{maxWidth:"430px",  margin:"auto", backgroundColor:"black", borderRadius:"30px"}} >
    
      {/* <Heading/>
      <MidSection text={"Courses for you"} subText={"Listen to byte-sized audio courses from top thinkers"}/>
      <MidSection text={"Article Reads"} subText={"Listen to audio versions of top web articles"}/>
      <Bottom/>  */}
      <AllRoutes/>
      
    </div>
  );
}

export default App;
