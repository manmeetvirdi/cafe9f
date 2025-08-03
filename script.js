async function fetchData() {
    const urlapiGET = 'https://6721c0ab98bbb4d93ca980e0.mockapi.io/api/v1/number/1';
    
    try {
        const response = await fetch(urlapiGET);
        const data = await response.json();
        document.getElementById('data1').innerText = data.value;
       //document.getElementById('data2').innerText = data.n1;
 
      
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('data1').innerText = `Error fetching data: ${error.message}`;
    }
}






// Call the function to fetch data when the window loads
window.onload = fetchData;
