import React, { useState, useEffect } from "react";

function useApiCrud(url) {
  let [getData, setGetData] = useState([]);
  let [isShowMessage, setIsShowMessage] = useState(false);

  // Get
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setGetData(data.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete
  const deleteData = (ID) => {
    const fetchUrl = url + ID;

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
  const updateData = (ID, reqBody) => {
    const fetchUrl = url + ID;

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

  //  Post
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

  return [getData, fetchData, deleteData, updateData, insertData, isShowMessage];
}

export default useApiCrud;
