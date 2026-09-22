import Button from "./Button";

function Function() {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default Function;
