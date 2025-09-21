import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Advanced user search
 * @param {string} username
 * @param {string} location
 * @param {string|number} minRepos
 * @returns {Promise<object>}
 */
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch {
    throw new Error("User not found");
  }
};
