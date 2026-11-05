
// import useCalculator from "./calculator";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">

     
      <div className="w-full max-w-[330px] bg-gray-300 shadow-xl">

        
        <div className="h-20 bg-[#7B7B86] flex justify-end items-center px-4">
          <h1 className="text-white text-4xl font-light">
            0
          </h1>
        </div>

        
        <table className="w-full border-collapse">
          <tbody>

            
            <tr>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">AC</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">+/-</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">%</td>
              <td className="h-[93px] border border-gray-400 bg-[#F58A32] text-center text-2xl text-white">÷</td>
            </tr>

            
            <tr>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">7</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">8</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">9</td>
              <td className="h-[93px] border border-gray-400 bg-[#F58A32] text-center text-2xl text-white">×</td>
            </tr>

            
            <tr>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">4</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">5</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">6</td>
              <td className="h-[93px] border border-gray-400 bg-[#F58A32] text-center text-2xl text-white">-</td>
            </tr>

            
            <tr>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">1</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">2</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">3</td>
              <td className="h-[93px] border border-gray-400 bg-[#F58A32] text-center text-2xl text-white">+</td>
            </tr>

            
            <tr>
              <td colSpan="2" className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">0</td>
              <td className="h-[93px] border border-gray-400 bg-[#D8D8DA] text-center text-2xl text-black">.</td>
              <td className="h-[93px] border border-gray-400 bg-[#F58A32] text-center text-2xl text-white">=</td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
