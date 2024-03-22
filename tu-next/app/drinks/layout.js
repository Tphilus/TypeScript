function Drinkslayout({ children }) {
  return (
    <div className=" max-w-xl">
      <div className=" mockup-code mb-8">
        <pre data-prefix="$">
          <code> npx create-next-app@latest Project_name </code>
        </pre>
        <pre data-prefix="$">
          <code> yarn create next-app Project_name </code>
        </pre>
      </div>
      {children}
    </div>
  );
}

export default Drinkslayout;
