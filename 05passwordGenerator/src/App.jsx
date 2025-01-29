import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copy, setCopy] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "123456789";
    }
    if (charAllowed) {
      str += "!@#$";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
    setCopy("Copy");
  }, [length, numAllowed, charAllowed, passwordGenerator, setCopy]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
  }, [password]);
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        {/* ------------- */}
        <div
          className="w-[90%] md:w-[40%]  mx-auto rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800 flex flex-col gap-5"
          style={{
            boxShadow: "2px 2px 25px 5px rgba(0,0,0,0.3)",
          }}
        >
          <h1 className="text-2xl font-bold text-center text-white my-5">
            Password Generator
          </h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 border-2 border-white">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-4 text-[20px] font-medium"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClip}
              className="bg-orange-500 text-white px-5 w-[100px] text-center font-medium cursor-pointer shrink-0"
            >
              {copy}
            </button>
          </div>

          <div className="flex md:flex-row flex-col gap-5 justify-center items-center text-sm gap-x-5">
            <div className="flex justify-center items-center gap-x-2 mx-auto md:w-[40%] w-[100%]">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer w-[70%]"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="w-[30%]">Length {length}</label>
            </div>

            <div className="flex flex-row justify-center items-center gap-10 md:w-[60%] w-[100%]">
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id="numInput"
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numInput">Number</label>
              </div>

              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="charInput">Character</label>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- */}
      </div>
    </>
  );
}

export default App;
