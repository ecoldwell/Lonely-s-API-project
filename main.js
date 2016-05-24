// start with the empty main variable == space
// need to get the variables to display
// need to do 
// use the handlebars to display the final answer stuff!!! 

// $("form").on("submit", function(e){
// 	e.preventDefault();

// });

// const bookTemplate = $('#bookTemplate').html();
// const compiledTemplate = Handlebars.compile(bookTemplate);

var lonely = {};
var idk = '';
var idc= '';
var response = {

}

// initialize the data
lonely.init = function() {
	nytEsp.getData ();
	nytPolitical.getData ();
	nytManga.getData();
	nytCrime.getData();
	nytHumor.getData();



};
var nytEsp = {};
var nytPolitical = {};
var nytManga = {};
var nytCrime = {};
var nytHumor = {};


var espBooks = [];
var politicalBooks = [];
var mangaBooks = [];
var crimeBooks = [];
var humorBooks = [];


		var readOne = $('input[id=oneRead]:checked').val();
		var listenOne = $('input[id=oneListen]:checked').val();
		var outsideOne = $('input[id=oneOutside]:checked').val();
		var readTwoE = $('input[id=esp]:checked').val();
		var readTwoP = $('input[id=political]:checked').val();
		var readTwoC = $('input[id=crime]:checked').val();
		var readTwoH = $('input[id=humor]:checked').val();
		var readTwoM = $('input[id=manga]:checked').val();

$("input[type=radio]").on("click", function(e) {
	idk = $(this).val()
	// console.log(idk);
});

$(".submitOne").on("click", function(e) {
	e.preventDefault();
	$(".secondRead").hide();
	$(".listenSongs").hide();
	$(".outside").hide();

	console.log(idk);
	
		if (idk === 'read') {
			$(".secondRead").show();
		}
		else if (idk === 'listen') {
			$(".listenSongs").show();

		}
	    else if (idk === 'outside') {
			$(".goOutside").show();
			$("header").hide();
			$('.blank').hide();
		};

	$(".first").hide();
});





$(".submitTwo").on("click", function(e){
	e.preventDefault();
	$(".secondRead").hide();

	if (idk === 'esp') {
		var i = 0;
		espBooks.forEach(function(){
			i = i + 1;
			console.log(espBooks[i]);
		var bookTitle = $('<h2>').text(espBooks[i].title);
		var bookAuthor = $("<h3>").text(espBooks[i].author);
		var bookDes = $('<p>').text(espBooks[i].description);

		$('#dave').append(bookTitle, bookAuthor, bookDes);

		});
	}
			
		else if (idk === 'political') {
			var i = 0;
			politicalBooks.forEach(function(){
				i = i + 1;
				console.log(espBooks[i]);
			var bookTitle = $('<h2>').text(politicalBooks[i].title);
			var bookAuthor = $("<h3>").text(politicalBooks[i].author);
			var bookDes = $('<p>').text(politicalBooks[i].description);

			$('#dave').append(bookTitle, bookAuthor, bookDes);

			});
		}
			else if (idk === "manga") {
			var i = 0;
			mangaBooks.forEach(function(){
				i = i + 1;
				console.log(espBooks[i]);
			var bookTitle = $('<h2>').text(mangaBooks[i].title);
			var bookAuthor = $("<h3>").text(mangaBooks[i].author);
			var bookDes = $('<p>').text(mangaBooks[i].description);

			$('#dave').append(bookTitle, bookAuthor, bookDes);

			});
		} 
			
			else if (idk === 'crime') {
			var i = 0;
			crimeBooks.forEach(function(){
				i = i + 1;
				console.log(crimeBooks[i]);
			var bookTitle = $('<h2>').text(crimeBooks[i].title);
			var bookAuthor = $("<h3>").text(crimeBooks[i].author);
			var bookDes = $('<p>').text(crimeBooks[i].description);

			$('#dave').append(bookTitle, bookAuthor, bookDes);

			});
		} 

			else if (idk === 'humor') {
			var i = 0;
			humorBooks.forEach(function(){
				i = i + 1;
				console.log(espBooks[i]);
			var bookTitle = $('<h2>').text(humorBooks[i].title);
			var bookAuthor = $("<h3>").text(humorBooks[i].author);
			var bookDes = $('<p>').text(humorBooks[i].description);

			$('#dave').append(bookTitle, bookAuthor, bookDes);

			});
		};

		// $(".secondRead").hide();
	});
	
	$("input[type=submit]").on("click", function(e) {
		idc = $(this).val()
	});

	$('.buttonThree').on("click", function (e){
		if (idc === 'nextOne') {
			$(".te").show();
			$(".psychic").hide();
		}
	});

	$('.buttonThree').on("click", function (e){
		if (idc === 'nextTwo') {
			$(".te").hide();
			$(".hockey").show();
		}
	});
	$('.buttonThree').on("click", function (e){
		if (idc === 'nextThree') {
			$(".egg").show();
			$(".hockey").hide();
		}
	});
	$('.buttonThree').on("click", function (e){
		if (idc === 'nextFour') {
			$(".egg").hide();
			$(".craft").show();
		}
	});
	$('.buttonThree').on("click", function (e){
		if (idc === 'nextFive') {
			$(".rr").show();
			$(".craft").hide();
		}
	});

	// var userClickOne = $('input[value=nextOne]:checked').val();

	$('.nextOne').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextTwo'
		});
	});
	$('.nextTwo').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextThree'
		});
	});
	$('.nextThree').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextFour'
		});
	});
	$('.nextFour').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextFive'
		});
	});
	$('.nextFive').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextSix'
		});
	});
	$('.nextSix').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextOne'
		});
	});

	var userClickOne = $('input[value=nextOne]:checked').val();

	$('.nextOne').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextTwo'
		});
	});
	$('.nextTwo').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextThree'
		});
	});
	$('.nextThree').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextFour'
		});
	});
	$('.nextFour').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextFive'
		});
	});
	$('.nextFive').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextSix'
		});
	});
	$('.nextSix').on('click', function (e){
		$.smoothScroll({
			scrollTarget: '.nextOne'
		});
	});



	


	// if(idk = $("input[value=esp]")) {
// need to go back to later and make more specific






// New York Times list items 


// Espionage 

var nytEspUrl = "https://api.nytimes.com/svc/books/v3/lists.json";
nytEspUrl += '?' + $.param({
  'api-key': "e3b87792c9254655ac2cb52e84bcfa1d",
  'list': "Espionage"
});
nytEsp.getData = function (){
	$.ajax({
		url: nytEspUrl,
		method: 'GET',
			}).done(function(data) {
		  		console.log(data.results);
		  		data.results.forEach(function(book) {
		  			var espbookObject = {
		  				title: book.book_details[0].title,
		  				author: book.book_details[0].author,
		  				description: book.book_details[0].description,

			  		};
			  		espBooks.push(espbookObject);

		  		});
		}).fail(function(err) {
		  throw err;
		});
	};

// Hard Cover Political Books
var nytPoliticalUrl = "https://api.nytimes.com/svc/books/v3/lists.json";
nytPoliticalUrl += '?' + $.param({
  'api-key': "e3b87792c9254655ac2cb52e84bcfa1d",
  'list': "Hardcover Political Books"
});
nytPolitical.getData = function (){
	$.ajax({
		url: nytPoliticalUrl,
		method: 'GET',
			}).done(function(data) {
		  		console.log(data.results);
		  		data.results.forEach(function(book) {
		  			var politicalbookObject = {
		  				title: book.book_details[0].title,
		  				author: book.book_details[0].author,
		  				description: book.book_details[0].description,

			  		};
			  		politicalBooks.push(politicalbookObject);
		  		});
		}).fail(function(err) {
		  throw err;
		});
	};
	// nytPolitical.displayData = function(reviewPolitical) {
	// 	console.log(reviewPolitical)
	// }
	nytPolitical.displayData = function(reviewPolitical) {
		console.log(reviewPolitical)
	}

// Manga

var nytMangaUrl = "https://api.nytimes.com/svc/books/v3/lists.json";
nytMangaUrl += '?' + $.param({
  'api-key': "e3b87792c9254655ac2cb52e84bcfa1d",
  'list': "Manga"
});
nytManga.getData = function (){
	$.ajax({
		url: nytMangaUrl,
		method: 'GET',
			}).done(function(data) {
		  		console.log(data.results);
		  		data.results.forEach(function(book) {
		  			var mangabookObject = {
		  				title: book.book_details[0].title,
		  				author: book.book_details[0].author,
		  				description: book.book_details[0].description,

			  		};
			  		mangaBooks.push(mangabookObject);
		  		});
		}).fail(function(err) {
		  throw err;
		});
	};
	nytManga.displayData = function(reviewManga) {
		console.log(reviewManga)
	}

// Crime
var nytCrimeUrl = "https://api.nytimes.com/svc/books/v3/lists.json";
nytCrimeUrl += '?' + $.param({
  'api-key': "e3b87792c9254655ac2cb52e84bcfa1d",
  'list': "Crime and Punishment"
});

// what are the filters for the data

nytCrime.getData = function (){
	$.ajax({
		url: nytCrimeUrl,
		method: 'GET',
			}).done(function(data) {
		  		console.log(data.results);
		  		data.results.forEach(function(book) {
		  			var crimebookObject = {
		  				title: book.book_details[0].title,
		  				author: book.book_details[0].author,
		  				description: book.book_details[0].description,

			  		};
			  		crimeBooks.push(crimebookObject);
		  		});
		}).fail(function(err) {
		  throw err;
		});
	};
	nytCrime.displayData = function(reviewCrime) {
		console.log(reviewCrime)
	}

	var nytHumorUrl = "https://api.nytimes.com/svc/books/v3/lists.json";
	nytHumorUrl += '?' + $.param({
	  'api-key': "e3b87792c9254655ac2cb52e84bcfa1d",
	  'list': "Humor"
	});
	nytHumor.getData = function (){
		$.ajax({
			url: nytHumorUrl,
			method: 'GET',
				}).done(function(data) {
			  		console.log(data.results);
			  		data.results.forEach(function(book) {
			  			var humorbookObject = {
			  				title: book.book_details[0].title,
			  				author: book.book_details[0].author,
			  				description: book.book_details[0].description,

				  		};
				  		humorBooks.push(humorbookObject);
			  		});
			}).fail(function(err) {
			  throw err;
			});
		};
		nytHumor.displayData = function(reviewCrime) {
			console.log(reviewCrime)
		}
// var SC=SC||{};SC.Widget=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function o(n){return!!(n&&n.constructor&&n.call&&n.apply)}function i(n){return!(!n||1!==n.nodeType||"IFRAME"!==n.nodeName.toUpperCase())}function a(n){var t,e=!1;for(t in b)if(b.hasOwnProperty(t)&&b[t]===n){e=!0;break}return e}function s(n){var t,e,r;for(t=0,e=I.length;e>t&&(r=n(I[t]),r!==!1);t++);}function u(n){var t,e,r,o="";for("//"===n.substr(0,2)&&(n=window.location.protocol+n),r=n.split("/"),t=0,e=r.length;e>t&&3>t;t++)o+=r[t],2>t&&(o+="/");return o}function c(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function l(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(n[t]);return e}function d(n,t,e){e.callbacks[n]=e.callbacks[n]||[],e.callbacks[n].push(t)}function E(n,t){var e,r=!0;return t.callbacks[n]=[],s(function(t){return e=t.callbacks[n]||[],e.length?(r=!1,!1):void 0}),r}function p(n,t,e){var r,o,i=c(e);return i.postMessage?(r=e.getAttribute("src").split("?")[0],o=JSON.stringify({method:n,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),void i.postMessage(o,r)):!1}function f(n){var t;return s(function(e){return e.instance===n?(t=e,!1):void 0}),t}function v(n){var t;return s(function(e){return c(e.element)===n?(t=e,!1):void 0}),t}function h(n,t){return function(e){var r=o(e),i=f(this),a=!r&&t?e:null,s=r&&!t?e:null;return s&&d(n,s,i),p(n,a,i.element),this}}function S(n,t,e){var r,o,i;for(r=0,o=t.length;o>r;r++)i=t[r],n[i]=h(i,e)}function R(n,t,e){return n+"?url="+t+"&"+g(e)}function g(n){var t,e,r=[];for(t in n)n.hasOwnProperty(t)&&(e=n[t],r.push(t+"="+("start_track"===t?parseInt(e,10):e?"true":"false")));return r.join("&")}function m(n,t,e){var r,o,i=n.callbacks[t]||[];for(r=0,o=i.length;o>r;r++)i[r].apply(n.instance,e);(a(t)||t===L.READY)&&(n.callbacks[t]=[])}function w(n){var t,e,r,o,i;try{e=JSON.parse(n.data)}catch(a){return!1}return t=v(n.source),r=e.method,o=e.value,t&&A(n.origin)!==A(t.domain)?!1:t?(r===L.READY&&(t.isReady=!0,m(t,C),E(C,t)),r!==L.PLAY||t.playEventFired||(t.playEventFired=!0),r!==L.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,m(t,L.PLAY,[o])),i=[],void 0!==o&&i.push(o),void m(t,r,i)):(r===L.READY&&T.push(n.source),!1)}function A(n){return n.replace(Y,"")}var _,y,O,D=e(1),b=e(2),P=e(3),L=D.api,N=D.bridge,T=[],I=[],C="__LATE_BINDING__",k="http://wt.soundcloud.dev:9200/",Y=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",w,!1):window.attachEvent("onmessage",w),n.exports=O=function(n,t,e){if(r(n)&&(n=document.getElementById(n)),!i(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(e=e||{},n.src=R(k,t,e));var o,a,s=v(c(n));return s&&s.instance?s.instance:(o=T.indexOf(c(n))>-1,a=new _(n),I.push(new y(a,n,o)),a)},O.Events=L,window.SC=window.SC||{},window.SC.Widget=O,y=function(n,t,e){this.instance=n,this.element=t,this.domain=u(t.getAttribute("src")),this.isReady=!!e,this.callbacks={}},_=function(){},_.prototype={constructor:_,load:function(n,t){if(n){t=t||{};var e=this,r=f(this),o=r.element,i=o.src,a=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){e.bind(L.READY,function(){var n,e=r.callbacks;for(n in e)e.hasOwnProperty(n)&&n!==L.READY&&p(N.ADD_LISTENER,n,r.element);t.callback&&t.callback()})},o.src=R(a,n,t)}},bind:function(n,t){var e=this,r=f(this);return r&&r.element&&(n===L.READY&&r.isReady?setTimeout(t,1):r.isReady?(d(n,t,r),p(N.ADD_LISTENER,n,r.element)):d(C,function(){e.bind(n,t)},r)),this},unbind:function(n){var t,e=f(this);e&&e.element&&(t=E(n,e),n!==L.READY&&t&&p(N.REMOVE_LISTENER,n,e.element))}},S(_.prototype,l(b)),S(_.prototype,l(P),!0)},function(n,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(n,t){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(n,t){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);

// widgetIframe = document.getElementById('sc-widget'),widget = SC.Widget(widgetIframe);



// var iframeElement   = querySelector('iframe');
// var iframeElementID = iframeElement;
// var widget1         = SC.Widget(iframeElement);
// var widget2         = SC.Widget(iframeElementID)
// widget1 === widget2

	// need to get the information on to the html page, 

// have document ready
$(document).ready(function(){
	lonely.init();
});




// what is the response that appears with that data-- what is the significance of the filters, 

// what did the user choose for the responding event
	// either print it
	// make it into a sticker
	// make it into a button


// the filters needed for the data
// ask about the soundcloud app tomorrow and get it to display the random record label playlists

// read
// choose between 
	// book
	// news
	// fun things?
// if click, book-- selection pops up of different kinds of books to read , or just random-- make the array larger and have it -- filter the book section on type? display 5? variable for type, fyckin whatever.... blah blah blah


// soundcloud 

// psychic handshake
// <iframe width="100%" height="450 scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5919317&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// telephone explosion
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2411218&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// hockey dad records
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9007611&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// egg paper factory
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/114765750&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// craft singles
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/134307659&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// relapse records
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1078690&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// var nytEspUrl = "https://api.nytimes.com/svc/books/v3/lists.json"


// make the first function communicate with the next one so it will run and display!!!! I need to make it fucking display!!!! 


// getting the data for nyt espoonage
// nytEspUrl.getData = function() {
// $.ajax({
//   url: nytEspUrl,
//   method: 'GET',
//   dataType: 'json',
//   data: {
//   	key: "e3b87792c9254655ac2cb52e84bcfa1d",
//   	list:"Espionage",
//   	format: 'json',
//   }
// }).then(function(res) {
//   nytEsp.displayData(res);
//   console.log(res);
// });
// }
// based upon that data, what will be displayed on the page

