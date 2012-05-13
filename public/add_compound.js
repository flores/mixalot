// with help from 
// http://stackoverflow.com/questions/7340644/dynamically-add-input-type-select-with-options-in-javascript
function addInput(divName){
  var compounds = require('compounds.json');
  var newDiv=document.createElement('div');
  var selectHTML = "";
  selectHTML="<select name='" + divName + "'>";
  for(i = 0; i < compounds.diy.length; i = i+1){
    selectHTML+= "<option value='" + compounds.diy[i].name+  "'>" + compounds.diy[i].name + "</option>";
  }
  selectHTML += "</select>";
  newDiv.innerHTML= selectHTML;
  document.getElementById(divName).appendChild(newDiv);
};
