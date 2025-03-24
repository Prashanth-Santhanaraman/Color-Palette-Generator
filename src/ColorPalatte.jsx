import { useEffect, useState } from "react";

export default function ColorPalatte() {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");

  const [colorLock1, setColorLock1] = useState(false);
  const [colorLock2, setColorLock2] = useState(false);
  const [colorLock3, setColorLock3] = useState(false);
  const [colorLock4, setColorLock4] = useState(false);
  const [colorLock5, setColorLock5] = useState(false);

  useEffect(() => {
    handleGenerateBtn();
  }, []);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColorCode = `#${randomColor}`;
    console.log(randomColorCode);
    return randomColorCode;
  };

  const handleGenerateBtn = (e) => {
    if (e) e.preventDefault();
    console.log("checking");

    if (colorLock1 === false) {
      const colorCode1 = generateColor();
      setColor1(colorCode1);
    }

    if (colorLock2 === false) {
      const colorCode2 = generateColor();
      setColor2(colorCode2);
    }

    if (colorLock3 === false) {
      const colorCode3 = generateColor();
      setColor3(colorCode3);
    }

    if (colorLock4 === false) {
      const colorCode4 = generateColor();
      setColor4(colorCode4);
    }

    if (colorLock5 === false) {
      const colorCode5 = generateColor();
      setColor5(colorCode5);
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl mb-3 sm:text-4xl" style={{ color: color3 }}>
          Color Palatte Generator
        </h1>
        <div className=" p-5 rounded-md">
          <div className="flex flex-col sm:flex-row">
            <div
              style={{ backgroundColor: color1 }}
              className="w-52 h-32 sm:h-96 p-10 rounded-md mx-2 font-medium flex items-center justify-center flex-col"
            >
              <h1 className="text-lg">{color1.toUpperCase()}</h1>
              <button
                className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900"
                onClick={() => setColorLock1(!colorLock1)}
              >
                {!colorLock1 ? "🔓" : "🔒"}
              </button>

              {/* {!colorLock1 ? (
                <>
                  <button className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900">
                    &#x1F513;
                  </button>
                </>
              ) : (
                <>
                  <button className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900">
                  &#x1F512;
                  </button>
                </>
              )} */}
            </div>
            <div
              style={{ backgroundColor: color2 }}
              className="w-52  h-32 sm:h-96 p-10 rounded-md mx-2 font-medium flex items-center justify-center flex-col"
            >
              <h1 className="text-lg">{color2.toUpperCase()}</h1>
              <button
                className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900"
                onClick={() => setColorLock2(!colorLock2)}
              >
                {!colorLock2 ? "🔓" : "🔒"}
              </button>
            </div>

            <div
              style={{ backgroundColor: color3 }}
              className="w-52 h-32 sm:h-96 p-10 rounded-md mx-2 font-medium flex items-center justify-center flex-col"
            >
              <h1 className="text-lg">{color3.toUpperCase()}</h1>
              <button
                className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900"
                onClick={() => setColorLock3(!colorLock3)}
              >
                {!colorLock3 ? "🔓" : "🔒"}
              </button>
            </div>
            <div
              style={{ backgroundColor: color4 }}
              className="w-52 h-32 sm:h-96 p-10 rounded-md mx-2 font-medium flex items-center justify-center flex-col"
            >
              <h1 className="text-lg">{color4.toUpperCase()}</h1>
              <button
                className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900"
                onClick={() => setColorLock4(!colorLock4)}
              >
                {!colorLock4 ? "🔓" : "🔒"}
              </button>
            </div>
            <div
              style={{ backgroundColor: color5 }}
              className="w-52 h-32 sm:h-96 p-10 rounded-md mx-2 font-medium flex items-center justify-center flex-col"
            >
              <h1 className="text-lg">{color5.toUpperCase()}</h1>
              <button
                className="p-2 bg-white px-4 rounded-md mt-2 hover:bg-amber-100 text-cyan-900"
                onClick={() => setColorLock5(!colorLock5)}
              >
                {!colorLock5 ? "🔓" : "🔒"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              className=" ml-2 p-4 bg-amber-300 px-4 rounded-md mt-2 hover:bg-amber-200 text-cyan-900"
              onClick={handleGenerateBtn}
              disabled={
                colorLock1 &&
                colorLock2 &&
                colorLock3 &&
                colorLock4 &&
                colorLock5
                  ? true
                  : false
              }
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
