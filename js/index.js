const TABLE_ID = "tabulator-table";
const TABULATOR_ = {
    table: ""
};

document.addEventListener("load", (event) => {
    
});

function getBaptism(){
    // make ajax request

    let tabulatorNode = document.querySelector("#tabulator-table");
    let isHidden = tabulatorNode.style.display === 'none' ? true : false;
     
    if(isHidden)
        tabulatorNode.style.display = 'block';

    // then display tabulator
    TABULATOR_.table = new Tabulator("#" + TABLE_ID, {
        height: "100vh",
        layout: "fitDataStretch" ,
        columns: [
            {title: "Print", field: "print"},
            {title: "Edit", field: "edit"},
            {title: "Is Issued?", field: "isIssued"},
            {title: "Balang Shnong", field: "balangShnong"},
            {title: "Name", field: "name",  headerFilter:"input"},
            {title: "Date Of Birth", field: "dateOfBirth", headerFilter:"input"},
            {title: "Gender", field: "gender"},
            {title: "Date Baptist On", field: "dateBaptistOn"},
            {title: "Place Baptist At", field: "placeBaptistAt"},
            {title: "Father Name", field: "fatherName", headerFilter:"input"},
            {title: "Mother Name", field: "motherName", headerFilter:"input"},
            {title: "Current Address", field: "currentAddress"},
            {title: "Godparent Name", field: "godparentName"},
            {title: "Officiating Priest", field: "officiatingPriest"},
            {title: "Remarks", field: "remarks"}
        ],
        data: baptismData
    });
}
function getFirstHolyCommunion(){
    // make ajax request

    let tabulatorNode = document.querySelector("#tabulator-table");
    let isHidden = tabulatorNode.style.display === 'none' ? true : false;
     
    if(isHidden)
        tabulatorNode.style.display = 'block';

    // then display tabulator
    TABULATOR_.table = new Tabulator("#" + TABLE_ID, {
        height: "100vh",
        layout: "fitDataStretch" ,
        columns: [
            {title: "Print", field: "print"},
            {title: "Edit", field: "edit"},
            {title: "Is Issued?", field: "isIssued"},
            {title: "Balang Shnong", field: "balangShnong"},
            {title: "Name", field: "name"},
            {title: "Date Of Birth", field: "dateOfBirth"},
            {title: "Gender", field: "gender"},
            {title: "Current Address", field: "currentAddress"},
            {title: "Date Received Communion", field: "dateReceivedCommunion"},
            {title: "Date Baptist On", field: "dateBaptistOn"},
            {title: "Place Received Communion At", field: "placeReceivedCommunionAt"},
            {title: "Father Name", field: "fatherName"},
            {title: "Mother Name", field: "motherName"},
            {title: "Godparent Name", field: "godparentName"},
            {title: "Officiating Priest", field: "officiatingPriest"}
        ]
    });
}
function getConfirmation(){
    // make ajax request

    let tabulatorNode = document.querySelector("#tabulator-table");
    let isHidden = tabulatorNode.style.display === 'none' ? true : false;
     
    if(isHidden)
        tabulatorNode.style.display = 'block';

    // then display tabulator
    TABULATOR_.table = new Tabulator("#" + TABLE_ID, {
        height: "100vh",
        layout: "fitDataStretch" ,
        columns: [
            {title: "Print", field: "print"},
            {title: "Edit", field: "edit"},
            {title: "Is Issued?", field: "isIssued"},
            {title: "Balang Shnong", field: "balangShnong"},
            {title: "Name", field: "name"},
            {title: "Date Of Birth", field: "dateOfBirth"},
            {title: "Gender", field: "gender"},
            {title: "Shnong", field: "shnong"},
            {title: "Date Confirmed On", field: "dateConfirmedOn"},
            {title: "Date Baptist On", field: "dateBaptistOn"},
            {title: "Place Confirmed At", field: "placeConfirmedAt"},
            {title: "Father Name", field: "fatherName"},
            {title: "Mother Name", field: "motherName"},
            {title: "Godparent Name", field: "godparentName"},
            {title: "Officiating Priest", field: "officiatingPriest"}
        ]
    });
}
function getMarriage(){
    // make ajax request

    let tabulatorNode = document.querySelector("#tabulator-table");
    let isHidden = tabulatorNode.style.display === 'none' ? true : false;
     
    if(isHidden)
        tabulatorNode.style.display = 'block';

    // then display tabulator
    TABULATOR_.table = new Tabulator("#" + TABLE_ID, {
        height: "100vh",
        layout: "fitDataStretch" ,
        columns: [
            {title: "Print", field: "print"},
            {title: "Edit", field: "edit"},
            {title: "Is Issued?", field: "isIssued"},
            {title: "Place And Date", field: "placeAndDate"},
            {title: "Female Name Surname", field: "femaleNameSurname"},
            {title: "Male Name Surname", field: "maleNameSurname"},
            {title: "Female Date Of Birth", field: "femaleDateOfBirth"},
            {title: "Male Date Of Birth", field: "maleDateOfBirth"},
            {title: "Female Religion", field: "femaleReligion"},
            {title: "Male Religion", field: "maleReligion"},
            {title: "Female Nationality", field: "femaleNationality"},
            {title: "Male Nationality", field: "maleNationality"},
            {title: "Female Profession", field: "femaleProfession"},
            {title: "Male Profession", field: "maleProfession"},
            {title: "Female Residence", field: "femaleResidence"},
            {title: "Male Residence", field: "maleResidence"},
            {title: "Female Father Name", field: "femaleFatherName"},
            {title: "Male Father Name", field: "maleFatherName"},
            {title: "Female Mother Name", field: "femaleMotherName"},
            {title: "Male Mother Name", field: "maleMotherName"},
            {title: "Female First Witness", field: "femaleFirstWitness"},
            {title: "Male First Witness", field: "maleFirstWitness"},
            {title: "Female Second Witness", field: "femaleSecondWitness"},
            {title: "Male Second Witness", field: "maleSecondWitness"},
            {title: "Officiating Priest", field: "officiatingPriest"},
            {title: "Remarks", field: "remarks"}
        ]
    });
}
function getDeath(){
    // make ajax request

    let tabulatorNode = document.querySelector("#tabulator-table");
    let isHidden = tabulatorNode.style.display === 'none' ? true : false;
     
    if(isHidden)
        tabulatorNode.style.display = 'block';

    // then display tabulator
    TABULATOR_.table = new Tabulator("#" + TABLE_ID, {
        height: "100vh",
        layout: "fitDataStretch" ,
        columns: [
            {title: "Print", field: "print"},
            {title: "Edit", field: "edit"},
            {title: "Is Issued?", field: "isIssued"},
            {title: "Balang Shnong", field: "balangShnong"},
            {title: "Name", field: "name"},
            {title: "Date Of Birth", field: "dateOfBirth"},
            {title: "Gender", field: "gender"},
            {title: "Profession", field: "profession"},
            {title: "Village", field: "village"},
            {title: "Cause Of Death", field: "causeOfDeath"},
            {title: "Date Died On", field: "dateDiedOn"},
            {title: "Date Buried On", field: "dateBuriedOn"},
            {title: "Relative Name", field: "relativeName"},
            {title: "Is Anointed", field: "isAnointed"},
            {title: "Officiating Priest", field: "officiatingPriest"}
        ]
    });
}
function toggleForms(nodeId){
    let tabulatorNode = document.getElementById("tabulator-table");
    let formNode = document.getElementById("forms");
    let nodes = [
        document.getElementById("baptism"),
        document.getElementById("communion"),
        document.getElementById("confirmation"),
        document.getElementById("marriage"),
        document.getElementById("death"),
    ];
    
    tabulatorNode.style.display = 'none';
    formNode.style.display = 'block';

    nodes.forEach( n => {
        if(n.id === nodeId )
            n.style.display = 'block';
        else
            n.style.display = 'none';
    });
}
function showBaptismForm(){
    // show form
    let formNode = document.querySelector("#baptism");

    toggleForms(formNode.id);
}
function showFirstHolyCommunionForm(){
    // show form
    let formNode = document.querySelector("#communion");
    
    toggleForms(formNode.id);
}
function showConfirmationForm(){
    // show form
    let formNode = document.querySelector("#confirmation");
    
    toggleForms(formNode.id);
}
function showMarriageForm(){
    // show form
    let formNode = document.querySelector("#marriage");
    
    toggleForms(formNode.id);
}
function showDeathForm(){
    // show form
    let formNode = document.querySelector("#death");
    
    toggleForms(formNode.id);
}