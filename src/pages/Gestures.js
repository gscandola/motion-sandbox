import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Gestures = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <h4>Scaling on Hover / Tap</h4>
        <div style={{ marginLeft: "9rem", marginTop: "3rem" }}>
          <motion.button
            whileHover={{ scale: 2.5 }}
            whileTap={{ scale: 1.3 }}
            onClick={() => {
              setCount((c) => c + 1);
            }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          >
            {count > 3 ? "Yameteeeeeeeeeee !!!!! 😱" : "Poke me 😊"}
          </motion.button>
        </div>

        <h4>Drag 1-axe (w/ constraints)</h4>
        <motion.div
          className="visibleBox"
          drag="x"
          dragConstraints={{ left: -50, right: 300 }}
        >
          ↔️ Drag me baby
        </motion.div>

        <h4>Drag 1-axe (w/ constraints)</h4>
        <motion.div
          className="visibleBox"
          drag="y"
          dragConstraints={{ top: -10, bottom: 100 }}
        >
          ↕️ Drag me baby
        </motion.div>

        <h4>Drag 2-axes (w/ constraints)</h4>
        <motion.div
          className="visibleBox"
          drag={true}
          dragConstraints={{
            left: -10,
            bottom: 100,
            top: 0,
            right: 200,
          }}
        >
          Drag me baby
        </motion.div>
      </div>
      <div style={{ flex: 1 }}>
        <h4>With ref contraints</h4>
        <div ref={ref} className="boxConstaints">
          <motion.div
            className="constrainedBox"
            drag={true}
            dragConstraints={ref}
          >
            🧊 Momentuuuuum
          </motion.div>

          <motion.div
            className="constrainedBox"
            drag={true}
            dragConstraints={ref}
            dragMomentum={false}
          >
            🪵 Heavy
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gestures;
