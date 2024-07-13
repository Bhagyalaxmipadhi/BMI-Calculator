import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import BMICalculator from "./Components/BMICalulator/BMICalculator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BMICalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
