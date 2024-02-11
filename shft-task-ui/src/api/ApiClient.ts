import axios from "axios";
import Cookies from "universal-cookie";

const ApiClient = axios.create({
    baseURL: 'https://localhost:44390/',
    timeout: 1000,
    withCredentials: true,
    headers: {         
      'Accept': 'application/vnd.GitHub.v3+json',
      'Access-Control-Allow-Origin' : '*'
      //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
})

export default ApiClient