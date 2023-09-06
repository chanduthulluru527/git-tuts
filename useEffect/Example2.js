import React,{useState,useEffect} from 'react'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Index = () => {
    const [drinksData,setdrinksData]=useState([]);
     const [SearchTerm,setSearchTerm] = useState(" ");
     const [loading,setloading] = useState(false);
    const [error,seterror] = useState({state:false,msg:""});

    const fecthDrinksData=async (url)=>{
       setloading(true)
       seterror({state:false,msg:""})
      try{
        const response = await fetch(url);
        const {drinks}= await response.json();
       
        setdrinksData(drinks);
        setloading(false)
        seterror({state:false,msg:""})
        if(!drinks){
          throw new Error("data not found");

        }
      }
      catch(error){
        setloading(false)
        seterror({status:true,msg:"Errror please try using correct link address"})

      }
        
        
    }
    useEffect(()=>{
      const correctURL=`${URL}${SearchTerm}`
        fecthDrinksData(correctURL);

    },[SearchTerm])
    
    
   
  return (
    <div>
      <div className="form-line">
       <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      </div>

      <hr className="horizantal" / >
      {loading && !error?.status && <h3>Loading....</h3>} 
      {error?.status && <h3 style={{
        
        color:'red',
        position:'relative',
        left:'430px'
       }}>{error.msg}</h3>} 
      {
        !loading && !error?.status &&<ul className='cocktail-data'>
        {drinksData.map((eachDrink)=>{
          const {idDrink,strDrink,strDrinkThumb}=eachDrink;
          return <li key={idDrink}>
            <div>
              <img src={strDrinkThumb} alt={strDrink}/>
            </div>
            <div className="text">
              <h3>{strDrink}</h3>

            </div>
          </li>
        })}
      </ul>
      }
      
    </div>
  )
  
}

export default Index;
