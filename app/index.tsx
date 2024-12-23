import { addData, getData, removeData, updateData } from "./firebase/usedatabase";

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => {
        addData("test", { name: "John Doe", age: 31 });
      }}>add data</button>
      <button onClick={() => {
        removeData("test");
      }}>remove data</button>
      <button onClick={async () => {
        const data = await getData("test");
        console.log(data);
      }}>get data</button>
      <button onClick={() => { updateData("test", { name: "Jane Doe", age: 25 }) }}>update data</button>

    </div>
  );
}