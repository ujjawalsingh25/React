
// Video 11 -->> TimeStamp 00:00 & last Summary (t0 watch for )

import {useState} from "react"
import InputBox from "./CustomHooks/inputBox";
import useCurrencyInfo from "./CustomHooks/useCurrencyInfo"

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const swapCurrency = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convertedCurrency = () => {
        setConvertedAmount(amount * currencyInfo[to])               // user input amount * currency value 
    }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg")`
        }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertedCurrency()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={ (currency) => setAmount(amount)}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)} 
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swapCurrency}
                          >
                                Swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={ (currency) => setTo(currency)}
                              selectCurrenccy={from}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}  


export default App
