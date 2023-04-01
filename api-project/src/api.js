import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID M-n7B7vZsm0pzE-Mv75jwNBMvMFr5KsNe4Dnmkpy434",
    },

    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
