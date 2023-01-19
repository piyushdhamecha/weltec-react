import { useState } from "react";
import Header from "./Header";
import MobileDetails from "./MobileDetails";

const App = () => {
  const [cartCount, setCartCount] = useState(0)

  const handleButtonClick = () => {
    setCartCount(cartCount + 1)
    window.localState = {
      cartCount: cartCount + 1
    }
  }

  return (
    <div>
      <Header cartCount={cartCount} />
      <MobileDetails onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
