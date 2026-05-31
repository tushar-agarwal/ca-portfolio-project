import { useState, useEffect } from "react";

const useFetch = (callback) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    callback().then((res) => {
      setData(res);
    });
  }, []);

  return data;
};

export default useFetch;