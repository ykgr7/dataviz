//recup de données JSON et mise en forme.
d3.json("/data.json")
.then(datajson => {

    d3.select(".lesbourges")
    .selectAll("div")
    .data(datajson)
    .enter()
    .append("div")
    .text(d => `numéro ${d.rank}: ${d.personName} à ${d.city}`)
    .attr("class","rich");


      
      //scroll intéractif (💀💀 j'en pleure j'ai l'impression de me complexifier mon code)
      const scrollerOutput = document.querySelector(".scrolloutput");
      const pageheight = document.body.clientHeight;
      const screenheight = window.innerHeight;
      
      document.addEventListener("scroll", (event) => {
          let scrollpercentage = (Math.round((scrollY*100)/screenheight))/100

          //a voir comment réduire le code, le code fait bloquer chiffre sur les div
          if (scrollpercentage <= 1.5) {
            var scrollCase = 10
          }
          if (scrollpercentage <= 3.5 && scrollpercentage >= 2.5) {
            var scrollCase = 9
          }
          if (scrollpercentage <= 5.5 && scrollpercentage >= 4.5) {
            var scrollCase = 8
          }
          if (scrollpercentage <= 7.5 && scrollpercentage >= 6.5) {
            var scrollCase = 7
          }
          if (scrollpercentage <= 9.5 && scrollpercentage >= 8.5) {
            var scrollCase = 6
          }
          if (scrollpercentage <= 11.5 && scrollpercentage >= 10.5) {
            var scrollCase = 5
          }
          if (scrollpercentage <= 13.5 && scrollpercentage >= 12.5) {
            var scrollCase = 4
          }
          if (scrollpercentage <= 15.5 && scrollpercentage >= 14.5) {
            var scrollCase = 3
          }
          if (scrollpercentage <= 17.5 && scrollpercentage >= 16.5) {
            var scrollCase = 2
          }
          if (scrollpercentage <= 19.5 && scrollpercentage >= 18.5) {
            var scrollCase = 1
          }


          //incrément hors div, code hyper long doit y avoir plus court.

          if (scrollpercentage > 1.5 && scrollpercentage < 2.5) {
            var scrollCase = (Math.round((scrollpercentage - 1.5)*100))
          }
          if (scrollpercentage > 3.5 && scrollpercentage < 4.5) {
            var scrollCase = (Math.round((scrollpercentage - 3.5)*100))
          }
          if (scrollpercentage > 5.5 && scrollpercentage < 6.5) {
            var scrollCase = (Math.round((scrollpercentage - 5.5)*100))
          }
          if (scrollpercentage > 7.5 && scrollpercentage < 8.5) {
            var scrollCase = (Math.round((scrollpercentage - 7.5)*100))
          }
          if (scrollpercentage > 9.5 && scrollpercentage < 10.5) {
            var scrollCase = (Math.round((scrollpercentage - 9.5)*100))
          }
          if (scrollpercentage > 11.5 && scrollpercentage < 12.5) {
            var scrollCase = (Math.round((scrollpercentage - 11.5)*100))
          }
          if (scrollpercentage > 13.5 && scrollpercentage < 14.5) {
            var scrollCase = (Math.round((scrollpercentage - 13.5)*100))
          }
          if (scrollpercentage > 15.5 && scrollpercentage < 16.5) {
            var scrollCase = (Math.round((scrollpercentage - 15.5)*100))
          }
          if (scrollpercentage > 17.5 && scrollpercentage < 18.5) {
            var scrollCase = (Math.round((scrollpercentage - 17.5)*100))
          }
          scrollerOutput.textContent = `scroll: ${scrollpercentage} ${scrollCase}`;
      
        });
});


