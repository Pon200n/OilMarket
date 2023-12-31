import { Context } from "../../context";
import CompareCard from "../../components/CompareCard/CompareCard";
import React, { useContext } from "react";

export function ComparePage() {
  const [context, setContext] = useContext(Context);

  let compItems = context.map((p) => <CompareCard key={p.id} p={p} />);
  console.log(context);
  return (
    <>
      <h1>Сравнение</h1>
      {compItems}
    </>
  );
}
