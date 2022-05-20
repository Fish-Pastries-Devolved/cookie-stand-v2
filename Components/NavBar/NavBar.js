import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav.Link href="/tableView">
        <Button>Table</Button>
      </Nav.Link>
    </Navbar>
  );
}
