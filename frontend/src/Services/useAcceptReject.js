export default function useAcceptReject(url) {
  const isAcceptReject = (status, ID, fetchData) => {
    fetch(`${url}/${status}/${ID}`, {
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

  const activeHandler = (subUrl, ID, isActive, fetchData) => {
    fetch(`${url}/${subUrl}/${ID}/${isActive}`, {
      method: "PUT",
    })
      .then((response) => {
        response.json();
        fetchData();
      })
      .then((result) => {
        console.log(result);
      });
  };

  return [isAcceptReject, activeHandler];
}
