import { toast } from 'react-toastify';
import './App.css';
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {

  const [courses, setcourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setcategory] = useState(filterData[0].title);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const result = await res.json();
        setcourses(result.data);

      }
      catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();

  }, []);


  return (
    <div className='min-h-screen flex flex-col bg-slate-700'>

      <div>
        <NavBar />
      </div>
      
    <div className='bg-slate-700'>
      
      <div>
        <Filter filterData={filterData} category={category} setcategory={setcategory}  />
      </div>

      <div className=' w-11/12 max-w-[1200px] mx-auto  flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner></Spinner>):( <Cards courses={courses} category={category} />) 
          }
      </div>
      </div>

    </div>
  );
}

export default App;
