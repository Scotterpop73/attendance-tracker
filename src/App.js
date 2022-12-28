import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  { name: "Scott", age: 24, gender: "Male" },
  { name: "Sophie", age: 36, gender: "Female" },
  { name: "Danny", age: 24, gender: "Male"},
]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>12/28</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td><Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default App;