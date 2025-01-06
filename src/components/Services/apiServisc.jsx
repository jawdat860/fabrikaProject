import axios from "axios";
const apiUrl = 'https://a.darinafabrika.ru/api'
const apiService = {
  fetchData: async (url) => {
    try {
        url = apiUrl+url;
        console.log('url '+url);
      const response = await axios.get(url);
      if (response.data.success) {
        console.log('response.data.data '+response.data.data);
        return response.data.data;
      } else {
        console.error("Unexpected API response structure", response.data);
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default apiService;
