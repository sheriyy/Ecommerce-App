import axios from "axios";

const request = async ({ url, formValues, method }) => {
  switch (method) {
    case "get":
      return await axios.get(
        url
      );
    case "post":
      return await axios.post(url, formValues);
    case "put":
      return await axios.put(url, formValues);
    case "delete":
      return await axios.delete(url + formValues);
  }
};

export { request };
