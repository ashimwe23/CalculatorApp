
import useCalculator from "./calculator";

function App() {
  const {
    display,
    handleNumber,
    handleOperator,
    handleEquals,
    handleClear,
    
  } = useCalculator();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      
      <div className="w-[330px]">

      
        <div className="h-[53px] bg-[#80808c] text-white text-right text-[40px] px-3 flex items-center justify-end overflow-hidden">
          {display}
        </div>

       
        <table className="w-full border-collapse">
          <tbody>

            
            <tr>
              <td onClick={handleClear} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">
                AC
              </td>

              <td  className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">
                +/-
              </td>

              <td  className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">
                %
              </td>

              <td onClick={() => handleOperator("÷")} className="h-[93px] border border-[#a5a5ad] bg-[#f58a32] text-white text-center text-2xl cursor-pointer">
                ÷
              </td>
            </tr>

            
            <tr>
              <td onClick={() => handleNumber("7")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">7</td>

              <td onClick={() => handleNumber("8")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">8</td>

              <td onClick={() => handleNumber("9")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">9</td>

              <td onClick={() => handleOperator("×")} className="h-[93px] border border-[#a5a5ad] bg-[#f58a32] text-white text-center text-2xl cursor-pointer">×</td>
            </tr>

          
            <tr>
              <td onClick={() => handleNumber("4")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">4</td>

              <td onClick={() => handleNumber("5")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">5</td>

              <td onClick={() => handleNumber("6")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">6</td>

              <td onClick={() => handleOperator("-")} className="h-[93px] border border-[#a5a5ad] bg-[#f58a32] text-white text-center text-2xl cursor-pointer">-</td>
            </tr>

            
            <tr>
              <td onClick={() => handleNumber("1")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">1</td>

              <td onClick={() => handleNumber("2")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">2</td>

              <td onClick={() => handleNumber("3")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">3</td>

              <td onClick={() => handleOperator("+")} className="h-[93px] border border-[#a5a5ad] bg-[#f58a32] text-white text-center text-2xl cursor-pointer">+</td>
            </tr>

           
            <tr>
              <td colSpan="2" onClick={() => handleNumber("0")} className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">
                0
              </td>

              <td  className="h-[93px] border border-[#a5a5ad] bg-[#d6d6d8] text-black text-center text-2xl cursor-pointer">
                .
              </td>

              <td onClick={handleEquals} className="h-[93px] border border-[#a5a5ad] bg-[#f58a32] text-white text-center text-2xl cursor-pointer">
                =
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
