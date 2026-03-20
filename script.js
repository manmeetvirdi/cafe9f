async function fetchData() {
    // We now ask our own domain (the Cloudflare Worker)
    const url = '/api/queue'; 
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // The Worker sends back the JSON from mockapi.io
        document.getElementById('data1').innerText = data.value;
    } catch (error) {
        console.error('Error fetching queue data:', error);
        document.getElementById('data1').innerText = `Error: ${error.message}`;
    }
}

// Call the function to fetch data when the window loads
window.onload = fetchData;
