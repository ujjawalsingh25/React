import React from 'react'

function InputBox({ 
    label, 
    amountValue, 
    selectCurrency = "USD",
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amountDisabled = false,
}) {
  return (
    <div className='w-full bg-white p-3 rounded-lg text-sm flex'>
        <div className="w-1/2 flex flex-col">
            <label  className="text-gray-600 font-bold mb-2 inline-block">
                {label}
            </label>
            <input
                className="outline-none w-full px-6 mb-2 rounded-2xl bg-[#d3d3d3] py-1.5 text-lg text-gray-700 font-bold"
                placeholder='Amount'
                type="number"
                value={amountValue}
                disabled={amountDisabled}                
                onChange={event => onAmountChange && onAmountChange(event.target.value)} // if amount change then setChanged val
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-gray-600 font-bold mb-2 w-full">
                Currency Type
            </p>
            <select className="rounded-lg px-1 py-1 bg-teal-400 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                // disabled={currencyDisabled} 
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox;