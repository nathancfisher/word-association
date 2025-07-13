import { useEffect, useReducer } from "react";
import "./App.css";
import Arrow from "./components/Arrow";
import CurrentDisplay from "./components/CurrentDisplay";
import Form from "./components/Form";
import Input from "./components/Input";
import LastWord from "./components/LastWord";
import Multiplier from "./components/Multiplier";
import Timer from "./components/Timer";
import Total from "./components/Total";
import Word from "./components/word";
import Words from "./components/Words";
import Loader from "./components/Loader";
import Button from "./components/Button";

/* Animations */
const fadeIn = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const beat = {
  initial: { scale: 0.9 },
  animate: {
    scale: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const initialState = {
  words: [],
  currentWord: "",
  total: 0,
  time: 15,
  end: true,
  isLoading: false,
};

const reducer = function (state, { type, payload }) {
  switch (type) {
    case "dec":
      if (state.time === 0) return { ...initialState };

      if (state.isLoading || state.words.length === 0) return { ...state };

      return { ...state, time: state.time - 1 };

    case "start":
      return {
        ...state,
        words: [...state.words, { word: payload, multiplier: 1 }],
      };

    case "key":
      return { ...state, currentWord: payload };

    case "fetching":
      return { ...state, isLoading: true };

    case "reject":
      return { ...state, isLoading: false, currentWord: "" };

    case "new":
      return { ...state, end: false };

    case "add":
      return {
        ...state,
        words: [...state.words, payload],
        currentWord: "",
        time: 15,
        total: Math.floor(state.total + state.time * payload.multiplier),
        isLoading: false,
      };

    default:
      return state;
  }
};

function App() {
  const [{ words, total, time, currentWord, isLoading, end }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    if (!end) {
      const getWord = async function () {
        const res = await fetch(
          `https://random-words-api.kushcreates.com/api?language=en&category=animals&type=capitalized&words=1`
        );
        const data = await res.json();
        dispatch({ type: "start", payload: data.at(-1).word });
      };
      getWord();
    }
  }, [end]);

  if (end)
    return (
      <>
        <Button animate={beat} dispatch={dispatch}>
          Start
        </Button>
      </>
    );

  return (
    <>
      <Words>
        {words.map((word, i) => {
          if (i === words.length - 1) return;

          return (
            <>
              <Word word={word} key={word.word} animate={fadeIn} />
              {i !== words.length - 2 && <Arrow key={i} animate={fadeIn} />}
            </>
          );
        })}
      </Words>

      <CurrentDisplay>
        {(isLoading || words.length === 0) && <Loader animate={fadeIn} />}

        {!isLoading && words.length > 0 && (
          <>
            <LastWord word={words.at(-1)} animate={fadeIn} />

            <Multiplier word={words.at(-1)} animate={fadeIn} />
          </>
        )}

        <Total animate={fadeIn}>{total}</Total>
      </CurrentDisplay>

      <Form
        dispatch={dispatch}
        words={words}
        currentWord={currentWord}
        animate={fadeIn}
      >
        <Timer dispatch={dispatch} time={time} />
        <Input control={currentWord} dispatch={dispatch}>
          Type here
        </Input>
      </Form>
    </>
  );
}

export default App;
