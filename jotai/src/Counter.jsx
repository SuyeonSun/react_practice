import { useAtom } from "jotai";
import { countAtom, doubledCountAtom } from "./store";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom); // 파생 상태 사용

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Doubled Count: {doubledCount}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
