(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{300:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),l=a(67),c=a.n(l),s=(a(78),a(68)),o=a(69),r=a(72),m=a(71),u=(a(79),a(80),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("div",{className:"face"},i.a.createElement("p",{className:"content"},"SSA")),i.a.createElement("h2",{className:"main-name"},"Sarfaraz Ahammed"),i.a.createElement("p",{className:"subtitle"},'"Programming Addict"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),d=(a(81),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t.data),i.a.createElement("quote",null,t.quote))}),p=(a(82),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),h=(a(83),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Industry Knowledge"),i.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(p,{skill:e})}))))}),f=(a(84),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("center",null,i.a.createElement("p",null,i.a.createElement("b",{style:{alignItems:"center",fontVariant:"petite-caps"}},t.name))),i.a.createElement("p",null,i.a.createElement("b",{style:{fontVariant:"petite-caps"}},"Description:")," ",t.description),i.a.createElement("p",null,i.a.createElement("b",{style:{fontVariant:"petite-caps"}},"Link:")," ",i.a.createElement("a",{href:t.link,target:"blank"},t.link)," "))}),k=(a(85),function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(f,{project:e})}))))}),E=(a(86),function(e){var t=e.selectedHeading,a=e.selectedQuote,n=e.selectedSection,l=e.about,c=e.skills,s=e.projects;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h2",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},a)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(d,{bio:l.bio}),skills:i.a.createElement(h,{skills:c}),projects:i.a.createElement(k,{projects:s})}[n]))}),v=(a(87),function(e){var t=e.handleSectionClick,a=e.selectedHeading,n=e.selectedQuote,l=e.selectedSection,c=e.about,s=e.skills,o=e.projects;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(u,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(E,{selectedSection:l,selectedHeading:a,selectedQuote:n,about:c,skills:s,projects:o})))}),b={heading:"About Me",quote:"Feels HAPPY when I make others HAPPY",bio:{data:"A developer by passion, a tech enthusiast, a full-stack developer with Spring boot and React, motivator and mentor for those who want to learn programming, and recent technologies, Sarfaraz has been continuously helping the buds of India to achieve their dreams.",quote:"Being educated is not enough, educating others define your life! - Sarfaraz"}},g={heading:"Skills",quote:"Hire for Character, Train for skills! - Michael Josephson ",techSkills:["Java","Python","Spring","Spring Boot","Spring Microservices","JavaScript","ReactJS","React Native","Redux","C++","C#","C","HTML","CSS","jQuery","Bootstrap","Git","GitHub","SQL","PostgreSQL","MongoDB"],industryKnowledge:["Software","Web Content","Frontend","Backend","Design","Web","Android"],interpersonalSkills:["Communication","Teaching","Time Management","Leadership","Management","Adaptability"]},S={heading:"Projects",quote:"Implementation reflects your capability",projectList:[{name:"Shot Mail",description:"A simple mailing client to mail multiple persons with their specific data in one click.",link:"https://github.com/sarfarazsyed/shotmail"},{name:"Portfolio",description:"A simple portfolio using JS.",link:"https://syedsarfarazahammed.github.io"}]},y=a(70),N=a.n(y),j=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e.handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.setState({about:b,skills:g,projects:S,selectedHeading:b.heading,selectedQuote:b.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{style:{position:"absolute"},params:{fpsLimit:120,particles:{number:{value:70},size:{value:2},shape:{type:"triangle"},lineLinked:{enable:!1},color:{value:"rgba(120,219,120)"}},interactivity:{events:{onHover:{enable:!0,mode:"bubble",parallax:{enable:!1,force:2,smooth:10}},onClick:{enable:!0,mode:"push"}},modes:{bubble:{distance:50,duration:2,opacity:1,size:3,speed:3},emitters:{quantity:2}}},detectRetina:!0}}),i.a.createElement("div",{className:"App"},i.a.createElement(v,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(300)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.a9081ab0.chunk.js.map