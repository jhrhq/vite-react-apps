import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "854e4cbf7b0c45908cbc5f305a4c21d9",
  },
});
