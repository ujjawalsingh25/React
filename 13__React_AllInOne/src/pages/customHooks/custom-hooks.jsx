import React, { useState } from 'react'
import InputBox from '../../components/InputBox';
import useCurrencyInfo from '../../hooks/useCurrenyInfo';

function CustomHooks() {
  const[userAmount, setUserAmount] = useState(0);
  const[convertedAmount, setConvertedAmount] = useState(0);
  const[toCurrency, setToCurrency] = useState("INR");
  const[fromCurrency, setFromCurrency] = useState("USD");

  const currencyLists = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyLists);

  // const valueConverted = useCurrencyInfo("usd");
  // console.log("Value in INR: ",valueConverted["INR"]);
  const convertedCurreny = () => {
    setConvertedAmount(userAmount * currencyLists[toCurrency]);
  }

  const handleSwap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setUserAmount(convertedAmount);
    setConvertedAmount(userAmount);
  }

  return (
    <div className="w-full h-screen bg-[#313131] flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertedCurreny();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amountValue={userAmount}
                onAmountChange={amount => setUserAmount(amount)}
                currencyOptions={options}
                selectCurrency={fromCurrency}
                onCurrencyChange={currency => setFromCurrency(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute rounded-2xl left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-600 text-white px-2 py-1.5"
                  onClick={handleSwap}
                >
                  swap
                </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amountValue={convertedAmount}
                amountDisabled
                selectCurrency={toCurrency}
                currencyOptions={options}
                onCurrencyChange={currency => setToCurrency(currency)}                    
              />
            </div>
            <button type="submit" className="w-1/2 flex justify-center ml-auto mr-auto text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-3">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>                        
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomHooks;