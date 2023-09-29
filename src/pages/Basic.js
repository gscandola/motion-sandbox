import { motion } from "framer-motion";
import { useState } from "react";
import { randomNumber } from "../helpers/random";
const Basic = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const randomize = () => {
    setX(randomNumber(-150, 150));
    setY(randomNumber(-150, 150));
    setRotate(randomNumber(-180, 180));
  };

  return (
    <>
      <div>
        <div>
          <button onClick={randomize}>Random 🎉</button>
          {intervalId ? (
            <button
              onClick={() => {
                clearInterval(intervalId);
                setIntervalId();
                setX(0);
                setY(0);
                setRotate(0);
              }}
            >
              Stop it ! 🙅‍♂️
            </button>
          ) : (
            <button
              onClick={() => {
                randomize();
                setIntervalId(setInterval(randomize, 1000));
              }}
            >
              Crazy madness 🤪
            </button>
          )}
        </div>

        <input
          type="range"
          min="-150"
          max="150"
          step="1"
          value={x}
          onChange={(event) => {
            setX(+event.target.value);
          }}
        />
        {x}
      </div>
      <div>
        <input
          type="range"
          min="-150"
          max="150"
          step="1"
          value={y}
          onChange={(event) => {
            setY(+event.target.value);
          }}
        />
        {y}
      </div>
      <div>
        <input
          type="range"
          min="-180"
          max="180"
          step="1"
          value={rotate}
          onChange={(event) => {
            setRotate(+event.target.value);
          }}
        />
        {rotate}
      </div>

      <motion.div
        animate={{ x, y, rotate }}
        className="visibleBox"
        style={{ marginTop: "3rem" }}
      >
        Coucou 👋
      </motion.div>
    </>
  );
};

export default Basic;
