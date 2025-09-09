const fetchPromise = fetch(
  "https://mdn.ithub.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise
    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);            
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error)  => {
        console.error(`fuera mrd`)
    });

console.log("Started request…");