let pageDob = document.getElementById("pageDob");
let pageMagicSquare = document.getElementById("pageMagicSquare");

function showMagicSquare() {


    let dob = document.getElementById("txtDob").value;

    if (!(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(dob))) {
        alert("Enter correct date");
        return;
    }

    dob = dob.split("/");

    let lblDate = parseInt(dob[0]);
    let lblMonth = parseInt(dob[1]);
    let lblYear1 = parseInt(dob[2].substr(0, 2));
    let lblYear2 = parseInt(dob[2].substr(2, 2));

    let lbl20 = lblYear2 + 1;
    let lbl21 = lblYear1 - 1;
    let lbl22 = lblMonth - 3;
    let lbl23 = lblDate + 3;

    let lbl30 = lblMonth - 2;
    let lbl31 = lblDate + 2;
    let lbl32 = lblYear2 + 2;
    let lbl33 = lblYear1 - 2;

    let lbl40 = lblYear1 + 1;
    let lbl41 = lblYear2 - 1;
    let lbl42 = lblDate + 1;
    let lbl43 = lblMonth - 1;

    pageDob.style.display = 'none';
    pageMagicSquare.style.display = 'flex';
    

    ["lblDate",
        "lblMonth",
        "lblYear1",
        "lblYear2",
        "lbl20",
        "lbl21",
        "lbl22",
        "lbl23",
        "lbl30",
        "lbl31",
        "lbl32",
        "lbl33",
        "lbl40",
        "lbl41",
        "lbl42",
        "lbl43"].forEach(v => {
            document.getElementById(v).innerHTML = eval(v);
         });

    
}