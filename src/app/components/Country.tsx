
interface CountryInfo {
  name: string;
  population: number;
  capital: string;
}
interface CountryDetailsProps {
 countryInfo?: CountryInfo;
 url: string
}

export default function CountryDetails({countryInfo, url}: CountryDetailsProps ) {
    return (
  
 <div className=" bg-green-300 text-gray   p-6 flex flex-col justify-center items-center mt-8 gap-3 ">
    {countryInfo? (
      <div>
          <h1>Country Name: {countryInfo.name}</h1>
          <h1>Country Population: {countryInfo.population}</h1>
          <h1>Country Capital: {countryInfo.capital}</h1>
          </div> 
    ) : 
    

    ( <div><h1>{url} Not Found</h1>
      </div>
    )}
    
   
  </div>
 
    );
  }
  