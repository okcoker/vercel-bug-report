"use client";

export const CONSTANT_RELATED_TO_COMPONENT = 30;

export default function Component() {
  return (
    <div>
      <h1>Component</h1>
      <p>constant: {CONSTANT_RELATED_TO_COMPONENT}</p>
      <button onClick={() => alert("Hello")}>Click me</button>
    </div>
  );
}
