import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };

  return (
    <div>
      <h3>GuestList</h3>
      <ul>
        {guest.map((guest, i) => (
          <li key={i}>{guest}</li>
        ))}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
