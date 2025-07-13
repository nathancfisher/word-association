import { motion } from "framer-motion";

const fetchMultiplier = async function (Wi, Wj) {
  const data = await fetch(
    `https://api.conceptnet.io/relatedness?node1=/c/en/${Wi.trim().toLowerCase()}&node2=/c/en/${Wj.trim().toLowerCase()}`
  );
  const res = await data.json();
  return res.value;
};

function Form({ children, dispatch, words, currentWord }) {
  return (
    <motion.form
      onSubmit={async (e) => {
        e.preventDefault();

        // Duplicate Check
        if (
          !words.every(
            (word) => word.word.toLowerCase() !== currentWord.toLowerCase()
          )
        ) {
          dispatch({ type: "reject" });
          return;
        }

        // Setting to Loading
        dispatch({ type: "fetching" });

        // Fetching Score
        const value = await fetchMultiplier(words.at(-1).word, currentWord);

        // Threshold Gaurd Clause
        if (value < 0.1) {
          dispatch({ type: "reject" });
          return;
        }

        dispatch({
          type: "add",
          payload: {
            word: (
              currentWord.at(0).toUpperCase() +
              currentWord.slice(1).toLowerCase()
            ).trim(),
            multiplier: (value + 1).toFixed(1),
          },
        });
      }}
    >
      {children}
    </motion.form>
  );
}

export default Form;
