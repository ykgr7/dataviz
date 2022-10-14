//recup de données JSON et mise en forme.
d3.json("/data.json")
.then(datajson => {

    // d3.select(".lesbourges")
    // .selectAll("div")
    // .data(datajson)
    // .enter()
    // .append("div")
    // .text(d => `numéro ${d.rank}: ${d.personName} à ${d.city} avec ${Math.round(d.finalWorth*10)/10} Billion dollars`)
    // .attr("class","rich");


      
      //scroll intéractif (💀💀 j'en pleure j'ai l'impression de complexifier le code)
      const scrollerOutput = document.querySelector(".scrolloutput");
      
      document.addEventListener("scroll", (event) => {
          let screenheight = window.innerHeight; // dynamique au changement de la page
          let scrollpercentage = (Math.round((scrollY*100)/screenheight))/100

          //a voir comment réduire le code, le code fait bloquer chiffre sur les div
          if (scrollpercentage <= 1.5) {
            var scrollCase = Math.round(datajson[9].finalWorth*10)/10
          d3.select(".scrolloutput")
          .style("font-size","1.2rem")
          }
          
          if (scrollpercentage <= 3.5 && scrollpercentage >= 2.5) {
            var scrollCase = Math.round(datajson[8].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 5.5 && scrollpercentage >= 4.5) {
            var scrollCase = Math.round(datajson[7].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 7.5 && scrollpercentage >= 6.5) {
            var scrollCase = Math.round(datajson[6].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 9.5 && scrollpercentage >= 8.5) {
            var scrollCase = Math.round(datajson[5].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 11.5 && scrollpercentage >= 10.5) {
            var scrollCase = Math.round(datajson[4].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 13.5 && scrollpercentage >= 12.5) {
            var scrollCase = Math.round(datajson[3].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 15.5 && scrollpercentage >= 14.5) {
            var scrollCase = Math.round(datajson[2].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage <= 17.5 && scrollpercentage >= 16.5) {
            var scrollCase = Math.round(datajson[1].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }
          if (scrollpercentage >= 18.5) {
            var scrollCase = Math.round(datajson[0].finalWorth*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1.2rem")
          }


          //incrément hors div, code hyper long doit y avoir plus court.

          if (scrollpercentage > 1.5 && scrollpercentage < 2.5) {
            var scrollCase = Math.round((datajson[9].finalWorth +((scrollpercentage - 1.5)*((datajson[8].finalWorth - datajson[9].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 3.5 && scrollpercentage < 4.5) {
            var scrollCase = Math.round((datajson[8].finalWorth +((scrollpercentage - 3.5)*((datajson[7].finalWorth - datajson[8].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 5.5 && scrollpercentage < 6.5) {
            var scrollCase = Math.round((datajson[7].finalWorth +((scrollpercentage - 5.5)*((datajson[6].finalWorth - datajson[7].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 7.5 && scrollpercentage < 8.5) {
            var scrollCase = Math.round((datajson[6].finalWorth +((scrollpercentage - 7.5)*((datajson[5].finalWorth - datajson[6].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 9.5 && scrollpercentage < 10.5) {
            var scrollCase = Math.round((datajson[5].finalWorth +((scrollpercentage - 9.5)*((datajson[4].finalWorth - datajson[5].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 11.5 && scrollpercentage < 12.5) {
            var scrollCase = Math.round((datajson[4].finalWorth +((scrollpercentage - 11.5)*((datajson[3].finalWorth - datajson[4].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 13.5 && scrollpercentage < 14.5) {
            var scrollCase = Math.round((datajson[3].finalWorth +((scrollpercentage - 13.5)*((datajson[2].finalWorth - datajson[3].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 15.5 && scrollpercentage < 16.5) {
            var scrollCase = Math.round((datajson[2].finalWorth +((scrollpercentage - 15.5)*((datajson[1].finalWorth - datajson[2].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          if (scrollpercentage > 17.5 && scrollpercentage < 18.5) {
            var scrollCase = Math.round((datajson[1].finalWorth +((scrollpercentage - 17.5)*((datajson[0].finalWorth - datajson[1].finalWorth))))*10)/10
            d3.select(".scrolloutput")
            .style("font-size","1rem")
          }
          scrollerOutput.textContent = `$ ${scrollCase} Billion`;
          
        });
});


