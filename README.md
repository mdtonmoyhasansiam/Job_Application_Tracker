# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: JavaScript-এ HTML থেকে কোনো element select করতে এইগুলো ব্যবহার করা হয়। 

getElementById()

*একটা নির্দিষ্ট id দিয়ে element ধরতে ব্যবহার হয়

উদাহরণ:
<p id="demo">Hello</p>
let element = document.getElementById("demo");

 // এটা একটা মাত্র element রিটার্ন করে
//  id সবসময় ইউনিক হয় (একই id দুইবার হয় না)
// ID মানে একটাই element।

getElementsByClassName()

*একই class নামের অনেকগুলো element ধরতে ব্যবহার হয়

উদাহরণ:
<p class="text">One</p>
<p class="text">Two</p>
let elements = document.getElementsByClassName("text");

// এটা একাধিক element রিটার্ন করে
// এটা একটা HTMLCollection (array এর মতো) দেয়
// index দিয়ে ধরতে হয়:
elements [0]
// Class মানে অনেকগুলো হতে পারে।


querySelector()

*CSS selector ব্যবহার করে প্রথম matching element ধরে

উদাহরণ:
document.querySelector("#demo")     // id
document.querySelector(".text")     // class
document.querySelector("p")         // tag

// শুধু প্রথম element রিটার্ন করে
// CSS এর মতো করে select করা যায়
// খুব flexible method

querySelectorAll()

*CSS selector দিয়ে সব matching element ধরে

let items = document.querySelectorAll(".text");

// সবগুলো element রিটার্ন করে
// এটা NodeList দেয়
// এটাও index দিয়ে ধরতে হয়:
items [0]


# 2. How do you create and insert a new element into the DOM?
Ans: DOM মানে হলো HTML পেজের structure। নতুন element বানিয়ে ওয়েব পেজে যোগ করতে ৩টা ধাপ লাগে:

* ধাপ ১: নতুন element তৈরি করা

document.createElement() ব্যবহার করি।
let newDiv = document.createElement("div");

// এখন একটা নতুন <div> তৈরি হলো (কিন্তু এখনো পেজে দেখাবে না)

* ধাপ ২: ভেতরে লেখা বা কনটেন্ট যোগ করা

newDiv.innerText = "Hello World";
অথবা
newDiv.innerHTML = "<b>Hello World</b>";

* ধাপ ৩: পেজে যোগ করা (insert করা)

// কোনো existing element-এর ভিতরে দিতে হয়।

document.body.appendChild(newDiv);

***এখন এটা ওয়েব পেজে দেখা যাবে***


# 3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling হলো যখন কোনো element এ event (যেমন click) ঘটে, তখন সেই event শুধু ওই element এই না থেমে তার parent থেকে grandparent থেকে body থেকে document পর্যন্ত উপরে উঠতে থাকে। মানে event নিচ থেকে উপরের দিকে “bubble” করে ওঠে

// উদাহরণ

HTML-
<div id="parent">
  <button id="child">Click Me</button>
</div>

এখন যদি button এ click করা হয়, তাহলে:

// প্রথমে button-এর event চলবে
// তারপর div (parent)-এর event চলবে
// তারপর body
// তারপর document

এটি হচ্ছে Event Bubbling

*JavaScript দিয়ে উদাহরণ
HTML-
<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("child").addEventListener("click", function() {
    console.log("Button Clicked");
});

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent Clicked");
});
</script>

// Button এ click করলে console এ দেখাবে কারণ event নিচ থেকে উপরে উঠেছে।

Button Clicked
Parent Clicked


# 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো Parent element এ একটাই event listener বসিয়ে তার ভিতরের সব child element এর event handle করা।

এটা কাজ করে Event Bubbling এর কারণে (event নিচ থেকে উপরে ওঠে)।

# 5. What is the difference between preventDefault() and stopPropagation() methods?