import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

  async function handleSearch() {
    setLoader(true);
    try {
      if (search.length === 0) {
        return;
      }

      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=157c4850&s=${search}`
      );

      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleSearch}>
          {loader ? "Searching..." : "Search"}{" "}
        </button>
      </div>
      <div>
        <h1> Results: </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {loader ? (
            <div>
              {" "}
              <h1> Searching... </h1>{" "}
            </div>
          ) : (
            data &&
            data.Search &&
            data.Search.map((item) => {
              return (
                <a
                  href={`https://imdb.com/title/${item.imdbID}`}
                  target="_blank"
                  key={item.imdbID}
                >
                  <div>
                    <img src={item.Poster} />
                    <div>
                      <h3> {item.Title} </h3>
                      <h3> {item.Year} </h3>
                    </div>
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
