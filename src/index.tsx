import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { DOMtoString } from './checkOrder';

// var images; //list of item images
// var items; //list of item names + associated properties
// var links = []; //list of urls for items (reordering purposes)
// var url; //string, url of current tab open

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     url = tabs[0].url;
// });

// chrome.runtime.onMessage.addListener(function(request, sender) {
//   console.log(request)
//   // if (request.action == "getSource") {
//   //    var parser = new DOMParser();
//   //    var message = parser.parseFromString(request.source, 'text/html');

//   //    //Instacart Orders/Checkout
//   //    console.log(url);
//   //    if (url.match("https://www.instacart.com/orders/*")) {
//   //      images = message.getElementsByClassName("item-image");
//   //      console.log(images[5].getElementsByTagName('img')[0].src);
//   //      items = message.getElementsByClassName("item-name");
//   //    }
//   //    //Instacart Cart (Before checkout)
//   //    else if (url.match("https://www.instacart.com/store/*")) {
//   //      images = message.querySelectorAll('[aria-label="product"]');

//   //      console.log(images);
//   //      items = message.getElementsByClassName("rmq-9484430c clamped-name");
//   //      linkTags = message.querySelectorAll('a.rmq-9484430c');
//   //      links = []
//   //      for(i = 0; i < linkTags.length; i += 1) {
//   //         tag = linkTags[i].href.split("store/");
//   //         link = "https://www.instacart.com/store/" + tag[1];
//   //         console.log(link);
//   //         links.push(link);
//   //      }
//   //    }
     
//   //    //Amazon Fresh Cart
//   //    else if (url.match("https://www.amazon.com/cart/localmarket?")) {
//   //     console.log("HELLO BEZOS");
//   //     images = message.getElementsByClassName("sc-product-image");
//   //     items = [];
//   //     for (i = 0; i < images.length; i += 1) {
//   //       let text = images[i].alt;
//   //       items.push(text.split(",")[0]);
//   //     }
//   //     console.log(items);
//   //    }
//   // }
// });

// function injectedScript() {
//   console.log("hello");

//   chrome.tabs.executeScript({
//     file: "checkOrder.js"
//   }, function() {
//     // If you try and inject into an extensions page or the webstore/NTP you'll get an error
//     if (chrome.runtime.lastError) {
//       console.log(chrome.runtime.lastError.message);
//     }
//   });

//   console.log("messaged");
// }

// window.onload = injectedScript;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
