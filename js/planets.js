let planets = ["Mercury","Venus", "Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
planets.push ("Pluto");
console.log(planets);
const html = `
<ul>
<li>${planets[0]}</li>
<li>${planets[1]}</li>
<li>${planets[2]}</li>
<li>${planets[3]}</li>
<li>${planets[4]}</li>
<li>${planets[5]}</li>
<li>${planets[6]}</li>
<li>${planets[7]}</li>
<li>${planets[8]}</li>
</ul>
`;
document.body.innerHTML = html;