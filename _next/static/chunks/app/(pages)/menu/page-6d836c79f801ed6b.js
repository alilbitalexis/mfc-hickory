(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{1629:(e,i,l)=>{Promise.resolve().then(l.bind(l,9705))},5565:(e,i,l)=>{"use strict";l.d(i,{default:()=>s.a});var n=l(4146),s=l.n(n)},4146:(e,i,l)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var l in i)Object.defineProperty(e,l,{enumerable:!0,get:i[l]})}(i,{default:function(){return c},getImageProps:function(){return r}});let n=l(306),s=l(666),d=l(7970),a=n._(l(5514));function r(e){let{props:i}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(i))void 0===l&&delete i[e];return{props:i}}let c=d.Image},9705:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>r});var n=l(5155),s=l(2115);function d(e){let{label:i,description:l,price:s,dots:d}=e;return(0,n.jsxs)("div",{className:"item",children:[(0,n.jsxs)("div",{className:"item-label-row",children:[(0,n.jsx)("span",{className:"label",children:i}),(0,n.jsx)("span",{className:"price",children:s&&Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(s)})]}),l&&(0,n.jsx)("span",{className:"item-desc",children:l})]})}function a(e){let{section:i}=e,{id:l,title:a,list:r,img:c,description:t,items:p}=i;return(0,n.jsxs)("section",{id:l,children:[(0,n.jsx)("h4",{children:a}),r&&(0,n.jsx)("div",{className:"list",children:r.map((e,i)=>e.label).join(" | ")}),c&&(0,n.jsx)("div",{className:"img-container",children:(0,n.jsx)("img",{src:c})}),t&&(0,n.jsx)("div",{className:"description",children:t}),(0,n.jsx)("div",{className:"items",children:p.map((e,i)=>e.subItems?(0,n.jsxs)("div",{className:"subItems",children:[(0,n.jsx)("h6",{children:e.label},i),e.subItems.map((e,i)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(d,{label:e.label,description:e.description,price:e.price,dots:!1})},i))]},i):(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(d,{label:e.label,description:e.description,price:e.price,dots:!1})},i))})]})}function r(){let[e,i]=(0,s.useState)("dinner");function l(e,l){e.preventDefault(),i(l)}let d={note:null,sections:[{id:1,title:"Traditional Wings",description:"Dipping sauces available: Hot, Ranch, Honey Mustard, BBQ. Extra sauce is $0.28 each.",img:"wings.jpg",items:[{id:1,label:"Snack",description:"6pc wings, 1 side, and 1 roll",price:9.45},{id:2,label:"Special",description:"10pc wings, 1 side, and 1 roll",price:13.78},{id:3,label:"Moose",description:"15pc wings, 1 side, and 2 rolls",price:19.51},{id:4,label:"Individual wings",description:null,price:null,subItems:[{id:1,label:"5",price:6.39},{id:2,label:"10",price:12.95},{id:3,label:"25",price:30.92},{id:4,label:"50",price:61.24},{id:5,label:"75",price:91.83},{id:6,label:"100",price:121.25}]}]},{id:2,title:"Boneless Wings",description:null,img:null,items:[{id:1,label:"Deal",description:"6pc wings, 1 side, and 1 roll",price:8.1},{id:2,label:"Meal",description:"10pc wings, 1 side, and 1 roll",price:13.31},{id:3,label:"Feast",description:"15pc wings, 1 side, and 1 rolls",price:18.9}]},{id:3,title:"Tenders",description:null,img:null,items:[{id:1,label:"2 Pc Tenders",description:"2 tenders, 2 sides, and 1 roll",price:8.93},{id:2,label:"Snack",description:"3 tenders, 1 side, and 1 roll",price:7.89},{id:3,label:"Dinner",description:"4 tenders, 2 sides, and 1 roll",price:11.19},{id:4,label:"Meal",description:"9 tenders, 2 pints, and 4 rolls",price:29.21}]},{id:4,title:"Chicken Dinners",description:null,img:"chicken.jpg",items:[{id:1,label:"1pc white, 2 sides, and 1 roll",description:"",price:7.71},{id:2,label:"1pc dark, 2 sides, and 1 roll",description:"",price:6.05},{id:3,label:"2pc dark, 2 sides, and 1 roll",description:"",price:7.44},{id:4,label:"2pc (breasts), 2 sides, and 1 roll",description:"",price:10.64},{id:5,label:"2pc (breast & dark), 2 sides, and 1 roll",description:"",price:9.04},{id:6,label:"2pc (breast & wing), 2 sides, and 1 roll",description:"",price:8.99},{id:7,label:"3pc, 2 sides, and 1 roll",description:"",price:10.09},{id:8,label:"4pc, 2 sides, and 2 rolls",description:"",price:11.3},{id:9,label:"9pc, 2 pint sides, and 4 rolls",description:"",price:26.18},{id:10,label:"15pc, 3 pint sides, and 7 rolls",description:"",price:37.98},{id:11,label:"21pc, 2 quart sides, and 10 rolls",description:"",price:52.36},{id:12,label:"Chicken only",description:null,price:null,subItems:[{id:1,label:"9pc",price:18.36},{id:2,label:"15pc",price:28.56},{id:3,label:"21pc",price:41.29}]},{id:13,label:"Kids (Under 13) and Seniors",description:"2 legs, 3 wings, or 2 tenders, plus side, roll, and drink",price:6.67}]},{id:5,title:"Daily Specials",description:"Valid until 4:00 p.m. ET",img:null,items:[{id:1,label:"Mon, Wed, and Fri",description:"1pc white or 2pc dark, with 1 side and drink",price:7},{id:2,label:"Tuesday",description:"2 tenders, with 1 side and drink",price:7.89},{id:3,label:"Thursday",description:"Chicken dumplings or brunswick stew, with 1 side and drink",price:7.89}]},{id:6,title:(0,n.jsxs)(n.Fragment,{children:["Dumplings/",(0,n.jsx)("br",{}),"Brunswick Stew"]}),description:null,img:null,items:[{id:1,label:"Dinner",description:"Dumplings or stew, 2 sides, and 1 roll",price:8.47},{id:2,label:"Individual",description:null,price:2.76},{id:3,label:"Half Pint",description:null,price:3.53},{id:4,label:"Pint",description:null,price:7.27},{id:5,label:"Quart",description:null,price:12.12}]},{id:7,title:(0,n.jsxs)(n.Fragment,{children:["Salads and",(0,n.jsx)("br",{}),"Sandwiches"]}),description:"Salad dressings available: Italian, Ranch, Thousand Island. Extra dressing is $0.25 each.",img:null,items:[{id:1,label:"Chicken Salad",description:null,price:9.36},{id:2,label:"House Salad",description:null,price:5.5},{id:3,label:"Side Salad",description:null,price:3.3},{id:4,label:"Chicken Sandwich",description:"Plain",price:5.13},{id:5,label:"Chicken Sandwich",description:"With lettuce and tomato",price:5.79}]},{id:8,title:"Sides",description:null,img:"sides1.jpg",list:[{id:1,label:"Tater Wedges"},{id:2,label:"Mashed Taters"},{id:3,label:"Green Beans"},{id:4,label:"Baked Beans"},{id:5,label:"Pinto Beans"},{id:6,label:"Black Eyes"},{id:7,label:"Sweet Potatoes"},{id:8,label:"Tater Salad"},{id:9,label:"Turnip Greens"},{id:10,label:"Cabbage"},{id:11,label:"Pasta Salad"},{id:12,label:"Cole Slaw"},{id:13,label:"Spiced Apples"},{id:14,label:"Stewed Corn"},{id:15,label:"Corn on the Cob"},{id:16,label:"Mac and Cheese (with Tomato Sauce)"}],items:[{id:1,label:"Individual",description:null,price:2.37},{id:2,label:"Half-pint",description:null,price:3.14},{id:3,label:"Pint",description:null,price:6.12},{id:4,label:"Quart",description:null,price:11.52},{id:5,label:"Vegetable Plate",description:"Any 3 sides and 1 roll",price:6.9}]},{id:9,title:"Drinks",description:null,img:null,list:[{id:1,label:"Pepsi"},{id:2,label:"Diet Pepsi"},{id:3,label:"Mountain Dew"},{id:4,label:"Diet Mountain Dew"},{id:5,label:"Starry"},{id:6,label:"Lemonade"},{id:7,label:"Cheerwine"},{id:8,label:"Sweet Tea"},{id:9,label:"Unsweetened Tea"}],items:[{id:1,label:"All drinks",description:null,price:2.19}]},{id:10,title:"Desserts",description:null,img:"desserts.png",list:[{id:1,label:"Peach Cobbler"},{id:2,label:"Banana Pudding"}],items:[{id:1,label:"Individual",description:null,price:2.76},{id:2,label:"Half-pint",description:null,price:3.53},{id:3,label:"Pint",description:null,price:7.27},{id:4,label:"Quart",description:null,price:12.12}]}]},r={note:(0,n.jsxs)(n.Fragment,{children:["For takeout orders, call ",(0,n.jsx)("a",{href:"tel:8288551333",children:"828-855-1333"}),"."]}),sections:[{id:1,title:"Chicken",description:"Only chicken, no sides or rolls. Prices per piece.",img:"chicken.jpg",list:null,items:[{id:1,label:"1-9 dark pieces",description:null,price:1.76},{id:2,label:"1-9 white pieces",description:null,price:3.2},{id:3,label:"10-24 dark pieces",description:null,price:1.65},{id:4,label:"10-24 white pieces",description:null,price:3.08},{id:5,label:"25+ dark pieces",description:null,price:1.55},{id:6,label:"25+ white pieces",description:null,price:2.98}]},{id:2,title:"Tenders",description:"Prices per piece.",img:null,list:null,items:[{id:1,label:"1-9 pieces",description:null,price:1.93},{id:2,label:"10-19 pieces",description:null,price:1.82},{id:3,label:"20+ dark pieces",description:null,price:1.71}]},{id:3,title:"Wings",description:null,img:null,list:null,items:[{id:1,label:"Per wing",description:null,price:1.33},{id:2,label:"50 wings",description:null,price:61.24},{id:3,label:"75 wings",description:null,price:91.83},{id:4,label:"100 wings",description:null,price:121.25}]},{id:4,title:"Sides",description:null,img:"sides1.jpg",list:[{id:1,label:"Tater Wedges"},{id:2,label:"Mashed Taters"},{id:3,label:"Green Beans"},{id:4,label:"Baked Beans"},{id:5,label:"Pinto Beans"},{id:6,label:"Black Eyes"},{id:7,label:"Sweet Potatoes"},{id:8,label:"Tater Salad"},{id:9,label:"Turnip Greens"},{id:10,label:"Cabbage"},{id:11,label:"Pasta Salad"},{id:12,label:"Cole Slaw"},{id:13,label:"Spiced Apples"},{id:14,label:"Stewed Corn"},{id:15,label:"Corn on the Cob"},{id:16,label:"Mac and Cheese (with Tomato Sauce)"}],items:[{id:1,label:"Half Pan",description:"Feeds 20",price:28.39},{id:2,label:"Full Pan",description:"Feeds 40",price:54.57}]},{id:5,title:(0,n.jsxs)(n.Fragment,{children:["Other Foods",(0,n.jsx)("br",{}),"and Desserts"]}),description:null,img:null,list:[{id:1,label:"Peach Cobbler"},{id:2,label:"Banana Pudding"},{id:3,label:"Brunswick Stew"},{id:4,label:"Chicken & Dumplings"}],items:[{id:1,label:"Half Pan",description:"Feeds 20",price:31.42},{id:2,label:"Full Pan",description:"Feeds 40",price:59.42}]},{id:6,title:"Drinks/Misc",description:null,img:null,list:null,items:[{id:1,label:"1/2 Gallon Sweet Tea",description:null,price:3.58},{id:2,label:"Full Gallon Sweet Tea",description:null,price:7.17},{id:3,label:"24-pack rolls",description:null,price:4.69},{id:4,label:"Plates",description:null,price:.11},{id:5,label:"Cups",description:null,price:.11},{id:6,label:"Kits",description:null,price:.11}]}]};return(0,n.jsxs)("main",{className:"menu",children:[(0,n.jsx)("div",{className:"header-image",children:(0,n.jsx)("h1",{children:"Menu"})}),(0,n.jsxs)("nav",{className:"menu-buttons",children:[(0,n.jsx)("button",{className:"dinner"===e?"active":"",onClick:e=>l(e,"dinner"),children:"Lunch and Dinner"}),(0,n.jsx)("button",{className:"catering"===e?"active":"",onClick:e=>l(e,"catering"),children:"Catering"})]}),"catering"===e&&(0,n.jsxs)("p",{className:"catering-num",children:["For catering, please call ",(0,n.jsx)("a",{href:"tel:8288551333",children:"828.855.1333"})]}),(0,n.jsx)("div",{className:"left-menu".concat("dinner"===e?" active":""),children:d.sections.slice(0,4).map((e,i)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(a,{section:e})},i))}),(0,n.jsx)("div",{className:"right-menu".concat("dinner"===e?" active":""),children:d.sections.slice(4).map((e,i)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(a,{section:e})},i))}),(0,n.jsx)("div",{className:"left-menu".concat("catering"===e?" active":""),children:r.sections.slice(0,3).map((e,i)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(a,{section:e})},i))}),(0,n.jsx)("div",{className:"right-menu".concat("catering"===e?" active":""),children:r.sections.slice(3).map((e,i)=>(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(a,{section:e})},i))})]})}l(9757),l(5565),l(8173)}},e=>{var i=i=>e(e.s=i);e.O(0,[742,757,441,517,358],()=>i(1629)),_N_E=e.O()}]);