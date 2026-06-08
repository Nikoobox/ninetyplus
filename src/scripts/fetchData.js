// Lightweight replacement for axios.get using the native fetch API.
// Returns the parsed JSON body wrapped as { data } to mirror axios' response shape.
const fetchData = (url) =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => ({ data }));

export default fetchData;
