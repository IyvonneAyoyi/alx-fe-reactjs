import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;


/**
 * Fetch user data from GitHub API
 * @param {string} username
 * @returns {Promise<object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("User not found");
  }
};
