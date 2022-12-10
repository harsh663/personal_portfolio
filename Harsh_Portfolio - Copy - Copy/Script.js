var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");

}

const text = document.querySelector(".sec-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Student";
        }, 0);
        setTimeout(() => {
            text.textContent = "Developer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Photographer";
        }, 8000); //1s = 1000 milliseconds
    }

    textLoad();
    setInterval(textLoad, 12000);

    $(document).ready(function() {
  $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
    )
});



 