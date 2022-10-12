d3.json("/data.json")
.then(datajson => {

    d3.select(".lesbourges")
    .selectAll("div")
    .data(datajson)
    .enter()
    .append("div")
    .text(d => `numéro ${d.rank}: ${d.personName} à ${d.city}`)
    .attr("class","rich");
});

const scrollerOutput = document.querySelector(".scrolloutput");
const pageheight = document.body.clientHeight;
const screenheight = window.innerHeight;

document.addEventListener("scroll", (event) => {
    let scrollpercentage = Math.round((scrollY*100)/screenheight)
    let scrollCase = 0
    scrollerOutput.textContent = `scroll: ${scrollpercentage}% ${scrollCase}`;
  });


//   let scrollpercentage = Math.round((scrollY*100)/(pageheight-screenheight))