(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/ProfilePhoto.4ac9099b.jpg"},15:function(e,a,t){e.exports=t(26)},20:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(13),s=t.n(i),r=(t(20),t(2)),c=t(3),o=t(4),m=t(5),d=t(14),u=t.n(d),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#about"},l.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#resume"},"Resume")))))}}]),t}(n.Component),h=t(6),g=t(11),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{style:{fontSize:"5.3rem"},className:"mb-0"},this.landingData.firstName,"\xa0",l.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),l.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7 \xa0",l.a.createElement("a",{href:"mailto:".concat(this.landingData.email)},this.landingData.email)),l.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:this.landingData.linkedin,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(h.a,{icon:g.b})),l.a.createElement("a",{href:this.landingData.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(h.a,{icon:g.a})))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return l.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},e.position),l.a.createElement("div",{className:"subheading mb-3"},e.organization),l.a.createElement("p",null,e.aboutWork)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return l.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},e.university),l.a.createElement("div",{className:"subheading mb-3"},e.degree),l.a.createElement("p",null,e.gpa)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},e.fromDate,"  ",e.toDate),l.a.createElement("br",null)," ",e.location))}))))}}]),t}(n.Component),v=t(7),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Skills"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.a.createElement("div",null,l.a.createElement("ul",{class:"list-inline dev-icons"},l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:c-plusplus",color:"#010101"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:java"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:python"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:django"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:html-5"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:css-3"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:javascript"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:react"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:sass"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"mdi:microsoft-office",color:"#DC3E15"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"logos:aws"})),"\xa0",l.a.createElement("li",{class:"list-inline-item"},l.a.createElement("span",{class:"iconify","data-icon":"simple-icons:mysql",color:"#DC3E15",width:"60",height:"60"}))),l.a.createElement("div",{class:"subheading mb-3"},"Workflow"),l.a.createElement("ul",{class:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("span",{class:"fa-li"},l.a.createElement(h.a,{icon:v.b,color:"#34994f"})),"Data Structures and Algorithms in C++ and Java"),l.a.createElement("li",null,l.a.createElement("span",{class:"fa-li"},l.a.createElement(h.a,{icon:v.b,color:"#34994f"})),"Full Stack Development"),l.a.createElement("li",null,l.a.createElement("span",{class:"fa-li"},l.a.createElement(h.a,{icon:v.b,color:"#34994f"})),"Cross Functional Teams"),l.a.createElement("li",null,l.a.createElement("span",{class:"fa-li"},l.a.createElement(h.a,{icon:v.b,color:"#34994f"})),"Agile Development & Scrum")))))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,this.interests.paragraphOne),l.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),l.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(h.a,{icon:v.a,color:"#ffc107"}),l.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),k=t(8),D=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={landingData:k.landing,experience:k.experience,education:k.education,skills:k.skills,interests:k.interests,awards:k.awards},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{sidebarData:this.state.landingData}),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(f,{landingData:this.state.landingData}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(E,{experience:this.state.experience}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(b,{education:this.state.education}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(N,{skills:this.state.skills}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(w,{interests:this.state.interests}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(y,{awards:this.state.awards}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("div",null,l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"resume"},l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"mb-5"},"Resume")),l.a.createElement("div",{className:"embed-responsive embed-responsive-1by1"},l.a.createElement("iframe",{className:"embed-responsive-item",src:"https://drive.google.com/file/d/1FRGpUUjX-xWLvegO1P7DLQvZLZyD09HP/preview",title:"Resume",allowfullscreen:!0})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Gopal Krishna","lastName":"Singanoodi","phoneNumber":"+91-7406058845","bio":"I am a Software Development Engineer with a strong hold on data structures and algorithms in Java and Python. Currently I am working at Cimpress India. Always on lookout for opportunities to utilize my skills and achieve personal and professional growth while being resourceful, innovative and dynamic in my work that leads to a learning experience.","email":"gopalk.jagannath@gmail.com","linkedin":"https://www.linkedin.com/in/gopal-krishna-s-279014174/","github":"https://github.com/gk100799"},"experience":[{"position":"Software Development Engineer Intern","organization":"Cimpress India","aboutWork":"I interned with the Alexa team building awesome software for Amazon\'s internal customers. I primarily worked on the backend services writing code in Java. We utilized Amazon Web Services and developed on top of that to provide customers with delightful experiences. My internship project was to automate a manual workflow that was causing a bottleneck in the pipeline. I saved 12 hrs/week of manual effort.","fromDate":"Feb 2020","toDate":"July 2020"},{"position":"Software Development Engineer Intern","organization":"Yobny Tech","aboutWork":"Worked on e-Scroll Auto-Audit which is a auditing software built on top of Django framework with Python and PHP. Designed the user authentication feature to work in sync with the existing MS-SQL database. Used MD5 hashing technique. Designed Django model for existing tables in the database. Worked on redesigning the existing components of the app. Deployed the app to production.","fromDate":"June 2019","toDate":"July 2019"}],"education":[{"university":"Jaypee Institute of Information Technology","degree":"Bachelor of Technology in Computer Science","gpa":"C.G.P.A : 7.7","fromDate":"2016","toDate":"- 2020","location":"Noida, India"},{"university":"Kulachi Hansraj Model School","degree":"12th Standard | CBSE ","gpa":"95.6%","fromDate":"2016","toDate":"","location":"Delhi, India"},{"university":"Kulachi Hansraj Model School","degree":"10th Standard | CBSE ","gpa":"C.G.P.A : 9.6","fromDate":"2014","toDate":"","location":"Delhi, India"}],"skills":[],"interests":{"paragraphOne":"Apart from being a software developer, I enjoy most of my time being outdoors. I am passionate about photography and film making and aspire to start a YouTube channel of my own one day.","paragraphTwo":"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the consumer tech field like new products and apps via blogs and podcasts."},"awards":[{"awardDetail":"SQL and Relational Databases by IBM (04/2019)"},{"awardDetail":"Certificate of Achievement in C++ DS Algo by Coding Blocks [Pitampura , Delhi] "},{"awardDetail":"NPTEL online certification in Introduction to Modern Aplication Development (Elite)"},{"awardDetail":"Reached to top 120 teams across India in Deloitte TechnoUtsav 2.0(Round 2 Phase 3)"},{"awardDetail":"2 time silver medalist in iIO cyber olympiad conducted by Silver Zone"},{"awardDetail":"Won the price of best Technocrat of the school for the year 2015-16 by former chairman of ISRO Mr. G. Madhavan Nair"},{"awardDetail":"Ranked 8th in classroom program of C++ at Coding BLocks"},{"awardDetail":"Secured 98% marks in class XII C++ board exam"}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.d90fd359.chunk.js.map