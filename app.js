const bodyend = document.getElementById("bodyend");
bodyend.addEventListener("click", show);
function show(e) {
  if (e.target.id === "linkpng") {
    addlinks();
  }
}

function addlinks() {}

{
  /* <div id="bodyend">
  <img id="avatarpng" src="./images/avatar-michelle.jpg" alt="" />
  <ul id="list">
    <li>Michelle Appleton</li>
    <li style="opacity: 0.6">28 Jun 2020</li>
  </ul>
  <img id="linkpng" src="./images/icon-share.svg" alt="" />
</div>; */
}

document.getElementById("linkpng").addEventListener("click", function () {
  tooltip();
});
