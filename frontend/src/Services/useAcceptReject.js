import React from "react";

export default function useAcceptReject(url) {
  const isAcceptReject = (status, ID, fetchData) => {
    fetch(`http://localhost:8000/api/comments/${status}/${ID}`, {
      method: "POST",
    })
      .then((response) => {
        response.json();
        fetchData();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return isAcceptReject;
}
