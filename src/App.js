import axios from "axios";
import { Component, useEffect, useState } from "react";

// class component
class App extends Component {
  constructor() {
    super();
    this.state = {
      facts: undefined,
    };
  }

  componentDidMount() {
    axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
      this.setState({
        facts: res.data,
      });
    });
  }

  render() {
    let componentToRender;

    if (!this.state.facts) {
      componentToRender = <h1>loading</h1>;
    } else {
      componentToRender = (
        <div>
          {this.state.facts.map((fact) => (
            <p>{fact.text}</p>
          ))}
        </div>
      );
    }

    return <div className="App">{componentToRender}</div>;
  }
}

// Functional component
// function App() {
//   const [facts, setFacts] = useState();

//   useEffect(() => {
//     axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
//       setFacts(res.data);
//     });
//   }, []);

//   console.log(facts);

//   return (
//     <div className="App">
//       {!facts ? (
//         <h1>loading</h1>
//       ) : (
//         <div>
//           {facts.map((fact) => (
//             <p>{fact.text}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
