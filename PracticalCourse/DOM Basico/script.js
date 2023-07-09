const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const div = document.querySelector('div');

console.log(div);
div.innerHTML = div.innerHTML + '<h2> I have changed the div from JS </h2>';

h1.innerHTML = 'I have changed <br> the h1 from JS';
h1.innerText = 'I have changed <br> the h1 from JS';

console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'new-class');

h1.classList.add('new-class');
h1.classList.remove('green');
h1.classList.toggle('green');
console.log(h1.classList.contains('green'));

input.value = 'A new value from JS';

const img = document.createElement("img");
img.setAttribute('src', 'https://th.bing.com/th/id/R.b20656e67dd82633f11eb4f840a81560?rik=lTU%2bwQwOjoe89A&riu=http%3a%2f%2fmisimagenesde.com%2fwp-content%2fuploads%2f2017%2f05%2ffotos-cool-1.jpg&ehk=hR3hwFui5dvcHAj%2fdBzZaQI%2bTxCfmFHEAZMGT31X0w0%3d&risl=&pid=ImgRaw&r=0');
img.setAttribute('width', '200px');
img.setAttribute('height', '200px');

pid.appendChild(img);
