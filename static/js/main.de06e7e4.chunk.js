(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s,a=c(8),n=c.n(a),l=c(5),r=c(2),i=c(4),o=c.n(i),d=c(1),j=(c(14),c(15),c(6)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":c===t}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:a})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:c===t?Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(0)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye-slash"})})}):Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(t)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},m=c(3);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var O=function(e){var t=e.onChange,c=e.filter,a=Object(d.useCallback)((function(e){if(t){var s=e.target.value;c.status!==s&&t(Object(m.a)(Object(m.a)({},c),{},{status:s}))}}),[c]),n=Object(d.useCallback)((function(e){if(t){var s=e.target.value.toLowerCase();c.searchTitle!==s&&t(Object(m.a)(Object(m.a)({},c),{},{searchTitle:s}))}}),[c]),l=Object(d.useCallback)((function(){if(void 0!==t){""!==c.searchTitle&&t(Object(m.a)(Object(m.a)({},c),{},{searchTitle:""}))}}),[c]);return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:c.status,onChange:a,children:[Object(b.jsx)("option",{value:s.All,children:"All"}),Object(b.jsx)("option",{value:s.Active,children:"Active"}),Object(b.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c.searchTitle,onChange:n}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==c.searchTitle&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:l})})]})]})},x=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p=function(e){var t=e.selectedTodoId,c=e.removeTodo,s=e.todos,a=Object(d.useState)(),n=Object(r.a)(a,2),i=n[0],j=n[1],h=Object(d.useState)(),m=Object(r.a)(h,2),O=m[0],p=m[1];return Object(d.useEffect)((function(){var e=s.find((function(e){return e.id===t}));j(e)}),[t]),Object(d.useEffect)((function(){if(i){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c=i.userId,f("/users/".concat(c));case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(null);case 10:case"end":return e.stop()}var c}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[i]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),i&&O?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",i.id]}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:i.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:u()({"has-text-success":i.completed,"has-text-danger":!i.completed}),children:i.completed?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(O.email),children:O.name})]})]})]}):Object(b.jsx)(x,{})]})},v=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(0),i=Object(r.a)(n,2),j=i[0],u=i[1],m=Object(d.useState)({status:s.All,searchTitle:""}),v=Object(r.a)(m,2),N=v[0],y=v[1];Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/todos");case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.length||a([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=Object(d.useMemo)((function(){if(N.status===s.All&&""===N.searchTitle)return c;var e=c;if(""!==N.searchTitle&&(e=e.filter((function(e){return e.title.toLowerCase().includes(N.searchTitle)}))),N.status!==s.All){var t=N.status===s.Completed;e=e.filter((function(e){return e.completed===t}))}return e||[]}),[c,N]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(O,{filter:N,onChange:y})}),Object(b.jsx)("div",{className:"block",children:c.length>0?Object(b.jsx)(h,{todos:g,selectedTodoId:j,selectTodo:u}):Object(b.jsx)(x,{})})]})})}),0!==j&&Object(b.jsx)(p,{selectedTodoId:j,removeTodo:function(){u(0)},todos:g})]})};n.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.de06e7e4.chunk.js.map