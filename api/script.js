d3.json("/data.json")
.then(datajson => {

    d3.select("body")
    .selectAll("div")
    .data(datajson)
    .enter()
    .append("div")
    .text(d => `numéro ${d.rank}: ${d.personName} à ${d.city}    WOOOOOOOOOOOOOOO`);
    
});