import axios from "axios";

const api = axios.create({ baseURL: "/api" }); // adjust later if needed
export const fetcher = <T,>(url: string) => api.get<T>(url).then(r => r.data);
export default api; 