async function fetchAQIData() {
    // We now ask our own domain (the Cloudflare Worker)
    const url = '/api/aqi';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const aqi = data.data.aqi;
        document.getElementById('data2').textContent = `AQI: ${aqi}`;
    } catch (error) {
        console.error('Error fetching AQI data:', error);
        document.getElementById('data2').textContent = 'Error fetching AQI';
    }
}

// Fetch the AQI data when the page loads
fetchAQIData();
