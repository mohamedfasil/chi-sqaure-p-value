!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("chi-square-p-value",[],r):"object"==typeof exports?exports["chi-square-p-value"]=r():t["chi-square-p-value"]=r()}(window,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)n.d(e,a,function(r){return t[r]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _matrix__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_matrix__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_matrix__WEBPACK_IMPORTED_MODULE_0__),_this=void 0;const madd=t=>t/sum,mpwr=t=>t*t,div=(t,r)=>t/r,LogGamma=t=>{const r=1+76.18009173/t-86.50532033/(t+1)+24.01409822/(t+2)-1.231739516/(t+3)+.00120858003/(t+4)-536382e-11/(t+5);return(t-.5)*Math.log(t+4.5)-(t+4.5)+Math.log(2.50662827465*r)},Gcf=(t,r)=>{let n=0,e=1,a=1,i=t,o=0,u=0;for(;Math.abs((a-o)/a)>1e-5;)o=a,a=t*(n=a+((u+=1)-r)*n)+u*a,n/=i=t*(e=i+(u-r)*e)+u*i,e/=i,a/=i,i=1;return 1-Math.exp(r*Math.log(t)-t-_this.LogGamma(r))*a},Gser=(t,r)=>{let n=1/r,e=n,a=1;for(;n>1e-5*e;)e+=n=n*t/(r+a),a+=1;return e*=Math.exp(r*Math.log(t)-t-_this.LogGamma(r))},Gammacdf=(t,r)=>{let n;return n=t<=0?0:t<r+1?_this.Gser(t,r):_this.Gcf(t,r)},computeP=(chi,df)=>{const Z=eval(chi),DF=eval(df);let Chisqcdf;return DF<=0?console.error("Degrees of freedom must be positive"):Chisqcdf=_this.Gammacdf(Z/2,DF/2),Chisqcdf=Math.round(1e5*Chisqcdf)/1e5,Chisqcdf<1?(1-Chisqcdf).toFixed(5):0};__webpack_exports__.default=computeP},function(t,r){var e="Matrix 1.01",a=new function(){this.version=e;var t=Math.abs,r=Math.pow(2,-40);function i(n){return t(n)<r?0:n}function o(t,r,n){if(!n.isMatrix)throw"***ERROR: Argument "+r+" of Matrix."+t+' is not a Matrix; its value is "'+n+'".'}function u(t){for(var r=t.length,n=0;n<r;n++){if(!(t[n]instanceof Array))throw"***ERROR: in Matrix.create: argument 1 is not a 2D array.";if(t[n].length!=t[0].length)throw"***ERROR: in Matrix.create: argument 1 has different length rows."}for(var e=t[0].length,a=new Array(r),n=0;n<r;n++){a[n]=new Array(e);for(var o=0;o<e;o++)a[n][o]=i(t[n][o])}var u=new Object;return u.m=r,u.n=e,u.mat=a,u.isMatrix=!0,u}function f(t,r){for(var n=new Array(t),e=0;e<t;e++)n[e]=new Array(r);var a=new Object;return a.m=t,a.n=r,a.mat=n,a.isMatrix=!0,a}this.getEPS=function(){return r},this.setEPS=function(t){r=t},this.create=function(t,r){var n=t instanceof Array;if(!n&&"number"!=typeof t)throw"***ERROR: in Matrix.create: argument 1 is not an array or a number.";if(n&&null!=r)throw"***ERROR: in Matrix.create: argument 1 is an array but argument 2 is also present.";return n?u(t):f(t,r)},this.identity=function(t,r){for(var n=f(t,r),e=0;e<t;e++)for(var a=0;a<r;a++)mat[e][a]=0;for(var e=0;e<Math.min(t,r);e++)mat[e][e]=1;return n},this.unit=function(t,r){for(var n=f(t,r),e=0;e<t;e++)for(var a=0;a<r;a++)mat[e][a]=1;return n},this.random=function(t,r){for(var n=f(t,r),e=0;e<t;e++)for(var a=0;a<r;a++)mat[e][a]=i(Math.random());return n},this.copy=function(t,r,n,e,a){o("copy",1,t);for(var i=f(e,a),u=0;u<e;u++)for(var m=0;m<a;m++)mat[u][m]=t.mat[u+r][m+n];return i},this.transpose=function(t){o("transpose",1,t);for(var r=f(t.n,t.m),e=0;e<m;e++)for(var a=0;a<n;a++)mat[e][a]=t.mat[a][e];return r},this.diagOf=function(t){o("diagOf",1,t);for(var r=f(Math.min(t.m,t.n),1),n=0;n<m;n++)mat[n][0]=t.mat[n][n];return r},this.diag=function(t){if(o("diag",1,t),1!=t.n)throw"***ERROR: in Matrix.diag: argument 1 is not a column vector.";for(var r=a.identity(t.m,t.m),n=0;n<m;n++)mat[n][n]=t.mat[n][0];return r},this.max=function(t){o("max",1,t);for(var r=mat[0][0],e=0;e<m;e++)for(var a=0;a<n;a++)mat[e][a]>r&&(r=mat[e][a]);return i(r)},this.min=function(t){o("min",1,t);for(var r=mat[0][0],e=0;e<m;e++)for(var a=0;a<n;a++)mat[e][a]<r&&(r=mat[e][a]);return i(r)},this.scale=function(t,r){o("scale",1,t);for(var e=u(t.mat),a=0;a<m;a++)for(var f=0;f<n;f++)mat[a][f]=i(r*mat[a][f]);return e},this.add=function(t,r){if(o("add",1,t),o("add",2,r),t.m!=r.m||t.n!=r.n)throw"***ERROR: in Matrix.add: matrix dimensions don't match.";for(var e=f(t.m,t.n),a=0;a<m;a++)for(var u=0;u<n;u++)mat[a][u]=i(t.mat[a][u]+r.mat[a][u]);return e},this.sub=function(t,r){if(o("sub",1,t),o("sub",2,r),t.m!=r.m||t.n!=r.n)throw"***ERROR: in Matrix.sub: matrix dimensions don't match.";for(var e=f(t.m,t.n),a=0;a<m;a++)for(var u=0;u<n;u++)mat[a][u]=i(t.mat[a][u]-r.mat[a][u]);return e},this.mult=function(t,r){if(o("mult",1,t),o("mult",2,r),t.n!=r.m)throw"***ERROR: in Matrix.mult: matrix dimensions don't match.";for(var e,a=f(t.m,r.n),u=0;u<m;u++)for(var s=0;s<n;s++){e=0;for(var c=0;c<t.n;c++)e+=t.mat[u][c]*r.mat[c][s];mat[u][s]=i(e)}return a},this.map=function(t,r){o("map",2,r);for(var e=f(r.m,r.n),a=0;a<m;a++)for(var u=0;u<n;u++)mat[a][u]=i(t(r.mat[a][u]));return e},this.combine=function(t,r,e){if(o("combine",1,r),o("combine",2,e),r.m!=e.m||r.n!=e.n)throw"***ERROR: in Matrix.combine: matrix dimensions don't match.";for(var a=f(r.m,r.n),u=0;u<m;u++)for(var s=0;s<n;s++)mat[u][s]=i(t(r.mat[u][s],e.mat[u][s]));return a},this.trace=function(t){o("trace",1,t);for(var r=0,e=0;e<Math.min(m,n);e++)r+=mat[e][e];return i(r)},this.det=function(t){if(o("det",1,t),t.m!=t.n)throw"***ERROR: in Matrix.det: argument is not square.";return i(det(create(t)))},this.inverse=function(t){return o("inverse",1,t),a.solve(t,a.identity(t.m,t.m))},this.solve=function(t,r){if(o("solve",1,t),o("solve",2,r),t.m==t.n)return solve(create(t),r);if(t.m>t.n){var n=create(t);return solve(n,r)}throw"***ERROR: in Matrix.solve: argument 1 has fewer rows than columns."},this.eigenstructure=function(t){if(o("eigenstructure",1,t),t.m!=t.n)throw"***ERROR: in Matrix.eigenstructure: argument is not a square matrix.";return EVDecomposition.create(t)},this.display=function(t,r){o("display",1,t),null==r&&(r=3),displayMat(t.mat,null,null,r)}};window.Matrix=a}])});