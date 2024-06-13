import React, { useState, useRef, useEffect } from "react";

interface userState {
  name: string;
  age: number;
}

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 15,
  },
  {
    name: "Michael",
    age: 25,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<userState | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      UserSearch
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}> Find User </button>
      <div>
        {user && (
          <div>
            {user.name} is {user.age} years old
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
