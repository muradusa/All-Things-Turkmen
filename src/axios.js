import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:
    "https://us-central1-all-things-turkmen-4e22c.cloudfunctions.net/api",
  // http://localhost:5001/clone-5e751/us-central1/api
});

export default instance;
