import axios from "axios";

export const fetchData = async () => {
  console.log("fetching Data");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const Data = response.data;
  console.log("Data", Data);
  return Data;
};
