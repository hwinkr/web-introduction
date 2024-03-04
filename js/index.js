const visitForm = document.getElementById("visit-form");

visitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(visitForm);

  const visitorName = formData.get("visitorName");
  const checkedMovieLength = formData.getAll("movie").length;
  alert(`${visitorName}님, 저와 ${checkedMovieLength}개의 취향이 같으시네요!`);
  visitForm.reset();
});
