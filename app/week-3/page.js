import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
        <h1 className = "text-center font-extrabold">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }