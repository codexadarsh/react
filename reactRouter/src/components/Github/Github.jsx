import { useState, useEffect } from "react";
import { FaLink, FaXTwitter, FaLocationDot, FaRegBuilding } from "react-icons/fa6";


const Github = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Fetch function
  async function fetchUser(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
      setError("");
    } catch (err) {
      console.error(err);
      setUser(null);
      setError("User not found");
    }
  }

  // Load default user (codexadarsh) on mount
  useEffect(() => {
    fetchUser("codexadarsh");
  }, []);

  // Handle form submit
  async function handleSearch(e) {
    e.preventDefault();
    if (search.trim().length === 0) return;
    fetchUser(search);
  }

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center p-4 rounded-xl lg:rounded-3xl lg:p-8 lg:w-[60%] lg:mx-auto m-8">
      <img
        src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
        alt="GitHub Icon"
      />
      <h1 className="text-3xl font-bold text-center text-white">
        Fetch Github Profile
      </h1>
      <form className="w-full rounded-lg flex" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter User Name"
          className="w-full rounded-l-lg bg-stone-800 text-lg text-orange-700 border-none outline-none lg:p-4 lg:text-xl"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-700 rounded-r-lg font-semibold text-md text-white cursor-pointer lg:p-6 lg:text-xl"
        >
          Fetch
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {user && (
        <div className="bg-black rounded-2xl shadow-md p-6 w-full max-w-2xl mx-auto mt-8 text-white font-sans transition-all">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={user.avatar_url}
              alt={`GitHub avatar of ${user.login}`}
              className="w-24 h-24 mx-auto md:mx-0"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between">
                <h2 className="text-2xl font-bold">{user.name || "No Name"}</h2>
                <span className="text-sm text-gray-500 mt-1 md:mt-0">
                  Joined{" "}
                  {new Date(user.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-md block"
                >
                  @{user.login}
                </a>
              </div>
              <div className="bg-white rounded-xl p-4 flex justify-around text-center mt-4">
                <div>
                  <p className="text-xs text-black">Repos</p>
                  <p className="text-lg text-black font-semibold">
                    {user.public_repos}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-black">Followers</p>
                  <p className="text-lg text-black font-semibold">
                    {user.followers}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-black">Following</p>
                  <p className="text-lg text-black font-semibold">
                    {user.following}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm text-white">
                <div className="flex items-center gap-2">
                  <FaLocationDot /> {user.location || "Not Available"}
                </div>
                <div className="flex items-center gap-2">
                  <FaXTwitter />{" "}
                  {user.twitter_username ? (
                    <a
                      href={`https://twitter.com/${user.twitter_username}`}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{user.twitter_username}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <FaLink />{" "}
                  {user.blog ? (
                    <a
                      href={
                        user.blog.startsWith("http")
                          ? user.blog
                          : `https://${user.blog}`
                      }
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.blog}
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <FaRegBuilding/> {user.company || "Not Available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Github;
