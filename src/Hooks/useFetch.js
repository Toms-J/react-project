import React, { useState, useEffect } from 'react'

const useFetch = (url, initialValue) => {

  const [ data, setData ] = useState(initialValue);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(res => res.json())
    .then(body => {
      setError(null);
      setData(body);
    })
    .catch(err => {
      setError(err);
      console.err(err);
    })
    .finally(() => {setLoading(false);});
  }, [url]);

  return { data, error, loading }
}

export default useFetch