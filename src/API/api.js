import axios from "axios";

const API = async (location) => {
  const url = `https://ismartfolioapi.onrender.com/${encodeURIComponent(location)}`;
  try {
    const response = await axios.get(url, { timeout: 10000 });
    return response?.data?.data ?? null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; //
  }
};

export default API;
