function startSim() {
  const os = document.getElementById("osSelect").value;
  const virus = document.getElementById("virusSelect").value;

  document.body.innerHTML = ""; // limpiamos pantalla

  // aplicar fondo según SO
  if (os === "xp") document.body.className = "fakeXP";
  if (os === "me") document.body.className = "fakeME";
  if (os === "w31") document.body.className = "fake31";

  // aplicar virus visual
  if (virus === "matrix") {
    showMatrix();
  } else if (virus === "bsodFake") {
    showBSOD();
  } else if (virus === "randomWindows") {
    showRandomWindows();
  }
}

function showMatrix() {
  setInterval(() => {
    const t = document.createElement("div");
    t.className = "matrix";
    t.innerText = Math.random().toString(16).substring(2, 15);
    t.style.position = "absolute";
    t.style.top = Math.random() * window.innerHeight + "px";
    t.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(t);
  }, 50);
}

function showBSOD() {
  document.body.style.color = "white";
  document.body.style.background = "navy";
  document.body.style.fontFamily = "Lucida Console, monospace";
  document.body.style.padding = "50px";

  document.body.innerHTML = `
    <h2>*** STOP: 0x000000D1</h2>
    <p>Un problema ha sido detectado y Windows ha sido apagado...</p>
    <p>Presiona CTRL+ALT+DEL para reiniciar</p>
  `;
}

function showRandomWindows() {
  setInterval(() => {
    const w = document.createElement("div");
    w.style.position = "absolute";
    w.style.top = Math.random()*window.innerHeight + "px";
    w.style.left = Math.random()*window.innerWidth + "px";
    w.style.padding = "10px";
    w.style.background = "lightgray";
    w.style.color = "black";
    w.style.border = "1px solid black";
    w.innerText = "Error: Acción no permitida.";
    document.body.appendChild(w);
  }, 300);
}
