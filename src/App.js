
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sending Emails with SendGrid API</h1>
      <form >
        <label>
          Name:
          <input type="text" name="name"  />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
