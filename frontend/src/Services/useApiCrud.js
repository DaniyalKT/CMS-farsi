import React, { useState, useEffect } from "react";

function useApiCrud(url) {
  let [getData, setGetData] = useState([]);
  let [isShowMessage, setIsShowMessage] = useState(false);

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
        setIsShowMessage(true);
        response.json();
      })
      .then((result) => {
        console.log("data deleted successfuly" + result);

        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Put
  const updateData = (updateUrl, reqBody) => {
    const fetchUrl = url + updateUrl;

    fetch(fetchUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        setIsShowMessage(true);
        response.json();
      })
      .then((result) => {
        console.log("data updated successfuly" + result);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertData = (reqBody) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        setIsShowMessage(true);
        response.json();
      })
      .then((result) => {
        console.log("data inserted Succssfuly " + result);
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  return [getData, deleteData, updateData, insertData, isShowMessage];
}

export default useApiCrud;
