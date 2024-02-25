import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

export default function App() {
  // const input = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    // form.current.clear();
  }
  return (
    <main>
      {/* <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p> */}
      <Form>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Your age" type="number" />

        <Container as={Button}>Save</Container>
      </Form>
    </main>
  );
}
