function CurrentTime() {
  let time = new Date();
  return (
    <div>
      <p className="lead">
        This is current Date and Time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}{" "}
      </p>
    </div>
  );
}

export default CurrentTime;
