function generate(){
    let noOfRows=document.getElementById('rownumber').value;
    let noOfCols=document.getElementById('colnumber').value;
    var cellData=document.getElementById('celldata').value;
    var cellHeight=document.getElementById('cellheight').value;
    var cellWidth=document.getElementById('cellwidth').value;
    
    myTable=document.getElementById("myTable");
    tableBody=document.getElementById("myTBody");
    tableBody.innerHTML="";
    for(var y=0; y<noOfRows; y++){
        var tr=document.createElement('TR');
        tableBody.appendChild(tr);
        for(var x=0; x<noOfCols; x++){
            var td = document.createElement('TD');
            if(cellHeight){
                td.height=cellHeight;
            }else{
                td.height=10;
            }
            if(cellWidth){
                td.width = cellWidth;
            }else{
                td.width = 10;
            }
            var cellID = "cell [" + x + ", " + y + "]";
            td.setAttribute("id", cellID.toString());

            td.addEventListener("click", cellClicked(cellID.toString()) );
            td.addEventListener("mouseover", cellMouseOver(cellID.toString()) );
            if(cellData){
                td.appendChild(document.createTextNode(cellData));
            }else{
                td.appendChild(document.createTextNode("Cell " + x + "," + y));
            }
            
            tr.appendChild(td);

        }
    }
    
}
function cellMouseOver(id){
    console.log(id)
    var selColor=document.getElementById('sel_color').value;
    if(id){
        document.getElementById(id).style.backgroundColor =selColor;
    }
    
}
function cellClicked(id){
    if(id){
        document.getElementById(id).style.backgroundColor ="white";
    }
    
}
 
function clear_table(){
   
    tableBody=document.getElementById("myTBody");
    tableBody.innerHTML="";
}