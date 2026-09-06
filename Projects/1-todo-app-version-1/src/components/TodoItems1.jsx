function TodoItems1() {
  let todoName = "Go to school";
  let todoDate = "05 / 10 / 2026";
  return (
    <div>
      <div class="container text-center">
        <div class="row kg-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItems1;
