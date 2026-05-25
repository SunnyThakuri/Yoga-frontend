import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("authtoken");
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  timeout: 15000,
});
