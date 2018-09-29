var links = [
  "http://google.com",
  "http://ima.nyu.sh",
  "http://shanghai.nyu.edu",
  "http://nytimes.com",
  "http://bbc.com",
  "http://github.com",
  "http://apple.com",
  "http://rouxpz.com",
  "http://washingtonpost.com",
  "http://twitter.com"
];

for (i = 0; i < links.length; i++) {
  var a = document.createElement("A");
  a.href = links[i];
  document.body.appendChild(a);

  var b = document.createElement("BUTTON");
  var t = document.createTextNode("Click me for " + links[i]);
  b.appendChild(t);
  a.appendChild(b);

  var br = document.createElement("BR");
  document.body.appendChild(br);
}
