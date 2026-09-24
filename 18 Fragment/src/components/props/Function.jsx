import Button from "./Button";

function Function() {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div>
      <h1>I am using props</h1>
      <h2>send data parent to child</h2>

      <Button onClick={handleClick} />
    </div>
  );
}

export default Function;
