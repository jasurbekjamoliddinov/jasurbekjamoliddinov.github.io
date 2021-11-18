function makeGrid(ev) {
    ev.preventDefault();
  
    //держать подобные заявления вместе
    var rows = document.getElementById("inputHeight").value;
    var cols = document.getElementById("inputWidth").value;
    var table = document.createElement('TABLE');
    var body = document.getElementById("pixelCanvas");
   
    //сбросить  pixelCanvas
    while (body.firstChild)
        body.removeChild(body.firstChild);
    for (var i=0; i<rows; i++){
      var tr = document.createElement('TR');
      for (var j=0; j<cols; j++) {
        var td = document.createElement('td');
        td.onclick = function() {
          this.style.backgroundColor = document.getElementById("colorPicker").value;
        };
        tr.appendChild(td);
      }
      table.appendChild(tr);
   }
  
   body.append(table);
  }
  