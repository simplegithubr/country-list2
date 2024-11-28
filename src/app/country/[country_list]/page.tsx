"use client"
import { useRouter } from "next/navigation"
import Country from "@/app/components/Country"

export default function CountryList ({params}  : {params: {country_list : string}}) {
  const router = useRouter()
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Check if there is history to navigate back
      router.back(); // Go back to the previous page
    } else {
      router.push("/"); // Fallback to home page if no history
    }
  }
  const countries : {
    name: string,
    population : number,
    capital : string 
  } [] = [
    {
      name: "Pakistan",
      population : 248000000 ,
      capital : "islamabad" 

  },
  {
    name: "India",
    population : 1430000000,
    capital : "New Delhi" 

},
{
  name: "Korea",
  population :52000000 ,
  capital : "Seoul" 

},  
{
  name: "Japan",
  population : 124000000,
  capital : "Tokyo" 

},
{
name: "England",
population : 57000000,
capital : "London" 

}, 
]
function countryfind( country_url : string){
return countries.find(country=> country.name.toLowerCase() === country_url.toLowerCase())
}
const result = countryfind(params.country_list)
    return (
      <div className=" flex justify-center flex-col items-center ">
        <Country countryInfo = {result}  url = {params.country_list} />
  
   <button onClick={handleBack} className="bg-blue-600 rounded py-2  text-white px-4 mt-8  hover:bg-purple-600 ml-5 "> Back to</button>
   
  </div>
  
    );
  } 