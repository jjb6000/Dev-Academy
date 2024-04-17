
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");

  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];

    // liest Wert des Attributs aus = header.html
    file = element.getAttribute("w3-include-html") // header.html ist der Dateipfad zur header Datei
    // und speichert Dateipfad in variable 'file'
    
    // jetzt fetchen wir die Datei und speichern in der variable reponse
    let resp = await fetch(file);
    let content = await resp.text(); // resp als text in variable content speichern
    
    element.innerHTML = content; // contert in den container einfügen
  }
}


