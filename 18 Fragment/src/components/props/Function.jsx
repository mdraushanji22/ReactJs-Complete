import Button from "./Button";

function Function() {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div>
      <h1>I am using props</h1>
      <h2>send data parent to child</h2>c
      <h3>We can send data function to child</h3>c
      <Button onClick={handleClick} />
    </div>
  );
}

export default Function;
