const key = "f68f309f";
const buscar = document.getElementById("search-button");


   buscar.addEventListener ("click",() => {
      
        const year = document.getElementById("year-Movie").value;
         const title = document.getElementById("title-Movie").value;
        buscarPelicula(title,year);
        });


async function buscarPelicula(title,year) {
   console.log(title);
   const url = `https://www.omdbapi.com/?apikey=${key}&s=${title}`;
        document.getElementById("year-Movie").value = "";
         document.getElementById("title-Movie").value =""; 

   try {
        response = await fetch(url);
        data = await response.json();
        console.log(data);
         
    
    }
    catch {
        console.log("erro");
    }
   };
    

