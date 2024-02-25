import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      {/* <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p> */}
      <Container as={Button} />
    </main>
  );
}
