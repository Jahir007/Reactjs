import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "http://demos1.stral.in/PGCTechnologyServices/api/v1/course/catalog?_format=json"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    
    <div className="App">
      <h1>{data?.CourseID}</h1>
    </div>
    
  );
}

export default App;
