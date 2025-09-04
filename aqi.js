// URL for the AQI data
        //const url = 'https://api.waqi.info/feed/india/gurgaon/vikas-sadan-gurgaon/?token=21a6024d38c117f1f11408e86df27557aa2f7240';
        const url = 'https://api.waqi.info/feed/here/?token=21a6024d38c117f1f11408e86df27557aa2f7240';
        // Function to fetch AQI data
        async function fetchAQIData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const aqi = data.data.aqi;
                document.getElementById('data2').textContent = `AQI: ${aqi}`;
            } catch (error) {
                console.error('Error fetching the AQI data:', error);
                document.getElementById('aqi').textContent = 'Error fetching AQI data';
            }
        }

        // Fetch the AQI data when the page loads
        fetchAQIData();
  
