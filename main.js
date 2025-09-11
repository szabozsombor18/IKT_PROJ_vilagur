document.querySelectorAll('.kattintasikon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    var pe = e.target.parentElement;
    pe.style.height = "300px";

    setTimeout(function() {
      var nx = e.target.nextElementSibling;
      console.log(nx.id);

      if (nx.style.display === "none" || nx.style.display === "") {
        nx.style.display = "block";
        nx.style.padding = "5px";
        nx.style.marginTop = "10px";
      } else {
        nx.style.display = "none";
        pe.style.height = "150px";
      }
    }, 50);
  });
});
