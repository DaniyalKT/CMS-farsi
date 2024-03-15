import React, { useState, useEffect } from "react";

function useApiCrud(url) {
  let [getData, setGetData] = useState([]);
  let [deleteMassage, setDeleteMassage] = useState(false);

  // Get
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setGetData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete
  const deleteData = (deleteUrl) => {
    const fetchUrl = url + deleteUrl;

    fetch(fetchUrl, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        setDeleteMassage(true);
        return response.json();
      })
      .then((result) => {
        console.log("data deleted successfuly" + result);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [getData, deleteData, deleteMassage];
}

export default useApiCrud;
