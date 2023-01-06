import Box from "./Box";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Box max_length={500} step_size={100} />
    </div>
  );
}
