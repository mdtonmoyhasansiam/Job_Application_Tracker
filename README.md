# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: JavaScript-এ HTML থেকে কোনো element select করতে এইগুলো ব্যবহার করা হয়। 

// getElementById

- নির্দিষ্ট id দিয়ে একটি element খুঁজে বের করে।
- একটি id পুরো পেজে একটাই হওয়া উচিত।
- সবসময় একটি element (বা না পেলে null) রিটার্ন করে।
- দ্রুত এবং সরাসরি পদ্ধতি।
- শুধুমাত্র id দিয়ে কাজ করে, অন্য কিছু নয়।
- যখন নির্দিষ্ট id-এর একটাই element আছে।

// getElementsByClassName

- নির্দিষ্ট class name দিয়ে element খুঁজে বের করে।
- একাধিক element থাকতে পারে।
- HTMLCollection রিটার্ন করে (এক ধরনের live collection)।
- “Live” মানে DOM-এ পরিবর্তন হলে এই লিস্ট নিজে নিজে আপডেট হয়।
- যখন একই class-এর একাধিক element নিয়ে কাজ করতে হবে।

// querySelector

- CSS selector ব্যবহার করে element খুঁজে বের করে।
- id, class, tag, attribute, এমনকি complex selectorও ব্যবহার করা যায়।
- শুধু প্রথম match হওয়া element রিটার্ন করে।
- না পেলে null দেয়।
- খুবই flexible।
- যখন নির্দিষ্ট pattern বা complex selector দিয়ে element খুঁজতে হয়।

// querySelectorAll

- এটাও CSS selector ব্যবহার করে।
- সব match হওয়া element রিটার্ন করে।
- NodeList রিটার্ন করে।
- সাধারণত এটি static (DOM পরিবর্তন হলে নিজে আপডেট হয় না)।
- যখন নির্দিষ্ট selector-এর সব element দরকার।


# 2. How do you create and insert a new element into the DOM?
Ans: DOM মানে হলো HTML পেজের structure। নতুন element বানিয়ে ওয়েব পেজে যোগ করতে ৩টা ধাপ লাগে:

// নতুন Element তৈরি করা

- প্রথমে JavaScript দিয়ে একটি নতুন HTML element তৈরি করা হয়। এটি তখনো পেজে দেখা যায় না।

// প্রয়োজনীয় কনটেন্ট ও অ্যাট্রিবিউট সেট করা

- Text যোগ করা যায়
- Class বা id দেওয়া যায়
- Attribute (যেমন src, href ইত্যাদি) সেট করা যায় 
- Style যোগ করা যায়
অর্থাৎ element-টিকে সম্পূর্ণভাবে প্রস্তুত করা হয়।

// DOM-এ Insert করা

*শেষ ধাপে element-টিকে DOM-এর কোনো existing element-এর ভেতরে বা পাশে যোগ করা হয়।

- কোনো parent element-এর ভিতরে (শেষে যোগ করা)
- কোনো parent element-এর শুরুতে যোগ করা
- কোনো নির্দিষ্ট element-এর আগে
- কোনো নির্দিষ্ট element-এর পরে
- পুরোনো element-এর জায়গায় replace করা


# 3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element এ ইভেন্ট ঘটলে (যেমন click), সেই ইভেন্ট ধাপে ধাপে তার parent থেকে grandparent থেকে আরও উপরের body, document পর্যন্ত যেতে পারে। কোনো element এ ইভেন্ট ঘটলে সেটা তার parent থেকে শুরু করে DOM এর উপরের দিকে ছড়িয়ে পড়ে। event নিচ থেকে উপরের দিকে bubble করে ওঠে।

# 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো Parent element এ একটাই event listener বসিয়ে তার ভিতরের সব child element এর event handle করা।

এটা কাজ করে Event Bubbling এর কারণে (event নিচ থেকে উপরে ওঠে)।

# 5. What is the difference between preventDefault() and stopPropagation() methods?