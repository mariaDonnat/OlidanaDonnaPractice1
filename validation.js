/*
Ma.Donna Rose M. Olidana 2ITG
*/

function validate()
{

    let et = document.getElementById("eventTitle").value
    let ed1 = document.getElementById("eventDate1").value
    let ed2 = document.getElementById("eventDate2").value
    let pd = document.getElementById("postingDate").value

    
    if (et == "")
    {
        alert("Please fill out the EVENT TITLE");
    }
    else if (ed1 == "")
    {
        alert("Please fill out the FIRST EVENT DATE");
    }
    else if (ed2 == "")
    {
        alert("Please fill out the SECOND EVENT DATE");
    }
    else if (pd.value == "")
    {
        alert("Please fill out the POSTING DATE");
    }
    else{
        alert("submission success.");
    }
    

}