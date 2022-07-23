function ExportToTable() {
  let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;
  /*Checks whether the file is a valid excel file*/
  if (regex.test($("#excelfile").val().toLowerCase())) {
    let xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
    if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {
      xlsxflag = true;
    }
    /*Checks whether the browser supports HTML5*/
    if (typeof (FileReader) != "undefined") {
      let reader = new FileReader();
      reader.onload = function (e) {
        let data = e.target.result;
        /*Converts the excel data in to object*/
        if (xlsxflag) {
          let workbook = XLSX.read(data, { type: 'binary' });
        }
        else {
          let workbook = XLS.read(data, { type: 'binary' });
        }
        /*Gets all the sheetnames of excel in to a letiable*/
        let sheet_name_list = workbook.SheetNames;

        let cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
        sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
          /*Convert the cell value to Json*/
          if (xlsxflag) {
            let exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
          }
          else {
            let exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
          }
          if (exceljson.length > 0 && cnt === 0) {
            BindTable(exceljson, '#exceltable');
            cnt++;
          }
        });
        $('#exceltable').show();
      }
      if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
        reader.readAsArrayBuffer($("#excelfile")[0].files[0]);
      }
      else {
        reader.readAsBinaryString($("#excelfile")[0].files[0]);
      }
    }
    else {
      alert("Sorry! Your browser does not support HTML5!");
    }
  }
  else {
    alert("Please upload a valid Excel file!");
  }
}

function BindTable(jsondata, tableid) {/*Function used to convert the JSON array to Html Table*/
  let columns = BindTableHeader(jsondata, tableid); /*Gets all the column headings of Excel*/
  for (let i = 0; i < jsondata.length; i++) {
    let row$ = $('<tr/>');
    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let cellValue = jsondata[i][columns[colIndex]];
      if (cellValue == null)
        cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(tableid).append(row$);
  }
}
function BindTableHeader(jsondata, tableid) {/*Function used to get all column names from JSON and bind the html table header*/
  let columnSet = [];
  let headerTr$ = $('<tr/>');
  for (let i = 0; i < jsondata.length; i++) {
    let rowHash = jsondata[i];
    for (let key in rowHash) {
      if (rowHash.hasOwnProperty(key)) {
        if ($.inArray(key, columnSet) === -1) {/*Adding each unique column names to a letiable array*/
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
  }
  $(tableid).append(headerTr$);
  return columnSet;
}