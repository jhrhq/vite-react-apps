import { Users as UsersIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Users from "./Components/Users/Users";

function App() {
  const [people, setPeople] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  const addMember = (person) => {
    setFriends((prev) => {
      const exists = prev.some(
        (f) => f.login.uuid === person.login.uuid
      );

      if (exists) return prev;

      return [...prev, person];
    });
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-5xl font-bold tracking-tight">
              Discover People
            </h1>

            <p className="mt-3 max-w-xl text-zinc-400">
              Build your network and connect with people from
              around the world.
            </p>
          </div>

          <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 lg:w-80">
            <div className="flex items-center gap-3">
              <UsersIcon className="h-5 w-5 text-violet-400" />

              <span className="text-zinc-400">
                Friend Requests
              </span>
            </div>

            <h2 className="mt-3 text-4xl font-bold">
              {friends.length}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {friends.slice(0, 4).map((friend) => (
                <span
                  key={friend.login.uuid}
                  className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                >
                  {friend.name.first}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {people.map((person) => (
            <Users
              key={person.login.uuid}
              ppl={person}
              addMember={addMember}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;