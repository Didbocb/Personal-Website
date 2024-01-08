import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
