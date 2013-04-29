App = Em.Application.create({});
App.Router.map(function() {});
var dbg = Em.debug;
App.listController = Ember.ArrayController.create({});
App.IndexRoute = Ember.Route.extend();

App.FXView = Em.View.extend({
	tagName: "div",
	content: null,
	attributeBindings: ['style'],
	style: function(){
	    
	  var styler = "";
	  if(this.get('hoover'))
	       styler =  this.get('baseCss') + this.get('toCss');
	  else
	       styler =  this.get('baseCss') + this.get('fromCss');  
	       
	  // dbg(styler);
	  Em.warn(styler);
	   return styler;
	}.property('hoover', 'baseCss', 'fromCss', 'toCss'),
	
	hoover: false,
	baseCss: null,
	fromCss: null,
	toCss: null,
	
	click: function(){
	    this.toggleProperty('hoover');
	    dbg('CLICK');
	}
});



App.FX = Em.Object.extend({
    content: null,
    baseCss: null,
    fromCss: null,
    toCss: null 
});

App.fxObj = App.FX.create({
    content: Em.Handlebars.compile("RAD"),
    baseCss: " height: 125px; width: 600px; transition-duration: 4s; -webkit-transition-duration: 4s; /* Safari */ ",
    fromCss: "",
    toCss: ""
});

App.listController.pushObject(App.fxObj);

App.fxViewOne = App.FXView.create({
    template: Em.Handlebars.compile("RAD"),
    baseCss: Em.get('App.fxObj.baseCss'),
    fromCss: "background-color: black; color: yellow",
    toCss: " transform: rotateX(45deg); -webkit-transform: rotateX(45deg); /* Safari and Chrome */"
});

App.fxViewTwo = App.FXView.create({
    template: Em.Handlebars.compile("RAD2"),
    baseCss: Em.get('App.fxObj.baseCss'),
    fromCss: "background-color: black;",
    toCss: " background-color: red; transform: rotateY(60deg);transform-style: preserve-3d;-webkit-transform: rotateY(60deg); /* Safari and Chrome */-webkit-transform-style: preserve-3d; /* Safari and Chrome */"
});
App.fxViewThree = App.FXView.create({
    template: Em.Handlebars.compile("RAD3"),
    baseCss: Em.get('App.fxObj.baseCss'),
    fromCss: "background-color: yellow;",
    toCss: " background-color: green; -webkit-transform: translateX( -100% ) rotateY( -180deg );-moz-transform: translateX( -100% ) rotateY( -180deg );-o-transform: translateX( -100% ) rotateY( -180deg ); transform: translateX( -100% ) rotateY( -180deg );"
});

App.fxViewFour = App.FXView.create({
    template: Em.Handlebars.compile("RAD4"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-image: linear-gradient(-45deg, transparent 25%, black 25%, black 50%, transparent 50%, transparent 75%, black 75%, black); background-size:50px 50px;",
    fromCss: "background-position: 0 0;",
    toCss: " background-position: 100% 100%; "
});

App.fxViewFive = App.FXView.create({
    template: Em.Handlebars.compile("RAD5"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; border-style:solid; border-color: yellow; color: green;",
    fromCss: "border-width: 0",
    toCss:   "border-width: 75%"
});

App.fxViewSix = App.FXView.create({
    template: Em.Handlebars.compile("RAD6"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black;border-style:solid; border-color: pink; color: pink;",
    fromCss: "border-radius: 0",
    toCss:   "border-radius: 50%"
});

App.fxViewSeven = App.FXView.create({
    template: Em.Handlebars.compile("RAD7"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black;border-style:solid; border-color: pink; color: pink;",
    fromCss: "border-radius: 0 100%",
    toCss:   "border-radius: 100% 0"
});

App.fxViewEight = App.FXView.create({
    template: Em.Handlebars.compile("RAD8"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: green;",
    fromCss: "border-style:dashed; border-color: yellow; border-width: 35px;",
    toCss:   "border-style:solid; border-color: black; border-width: 2px;"
});

App.fxViewNine = App.FXView.create({
    template: Em.Handlebars.compile("RAD9"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: white;",
    fromCss: "border-style:double; border-color: yellow; border-width: 0;",
    toCss:   "border-style:double; border-color: yellow; border-width: 75px;"
});


App.fxViewTen = App.FXView.create({
    template: Em.Handlebars.compile("RAD10"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: blue;",
    fromCss: "transform:rotate(0deg); -webkit-transform:rotate(0deg);",
    toCss:   "transform:rotate(360deg); -webkit-transform:rotate(360deg); background-color: transparent;"
});

App.fxViewEleven = App.FXView.create({
    template: Em.Handlebars.compile("RAD11"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: blue;",
    fromCss: "transform:perspective(400px) rotate3d(0,1,0,0deg); -webkit-transform:perspective(400px) rotate3d(0,1,0,0deg);",
    toCss:   "transform:perspective(400px) rotate3d(0,1,0,-180deg); -webkit-transform:perspective(400px) rotate3d(0,1,0,-180deg);"
});

App.fxViewTwelve = App.FXView.create({
    template: Em.Handlebars.compile("RAD12"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: slategray;",
    fromCss: "transform:perspective(400px) translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0); -webkit-transform:perspective(400px) translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0);",
    toCss:   "transform:perspective(400px) translate3d(0,0,-5000px) rotateX(720deg) rotateY(360deg) rotateZ(-360deg); -webkit-transform:perspective(400px) translate3d(0,0,-5000px) rotateX(720deg) rotateY(360deg) rotateZ(-360deg);"
});

App.fxViewThirteen = App.FXView.create({
    template: Em.Handlebars.compile("RAD13 - Text Indent"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: pink; border-style: solid; border-size: 8%; font-size 24%; ",
    fromCss: "text-indent: 0;",
    toCss:   "text-indent: 100px;"
});

App.fxViewFourteen = App.FXView.create({
    template: Em.Handlebars.compile("RAD14 - Outline Color"),
    baseCss: Em.get('App.fxObj.baseCss') + "outline-width: 30px; outline-style: solid;background-color: black; color: orange; border-style: solid; border-size: 8%; font-size 24%; ",
    fromCss: "outline-color: transparent;",
    toCss:   "outline-color: red;"
});
App.fxViewFifteen = App.FXView.create({
    template: Em.Handlebars.compile("RAD15 - Padding"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: pink;",
    fromCss: "padding: 0;",
    toCss:   "padding: 50px 200px 50px 50px;"
});
App.fxViewSixteen = App.FXView.create({
    template: Em.Handlebars.compile("RAD16 - SKEWING"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: pink;",
    fromCss: "transform:skewX(0deg); -webkit-transform: skewX(180deg);",
    toCss:   "background-color: red; transform:skewX(180deg); -webkit-transform: skewX(180deg);"
});
App.fxViewSeventeen = App.FXView.create({
    template: Em.Handlebars.compile("RAD17 - Scale"),
    baseCss: Em.get('App.fxObj.baseCss') + "background-color: black; color: pink;",
    fromCss: "transform:scale(1); -webkit-transform: scale(1);",
    toCss:   "transform:scale(2); -webkit-transform: scale(2);"
});


// -webkit-transform: translateX( -100% ) rotateY( -180deg );-moz-transform: translateX( -100% ) rotateY( -180deg );-o-transform: translateX( -100% ) rotateY( -180deg ); transform: translateX( -100% ) rotateY( -180deg );
//App.fxViewOne.append();

App.fxContainer = Em.CollectionView.create({
    childViews: [App.fxViewOne, 
    App.fxViewTwo, App.fxViewThree, 
    App.fxViewFour,App.fxViewFive,
    App.fxViewSix,App.fxViewSeven,
    App.fxViewEight, App.fxViewNine,
    App.fxViewTen, App.fxViewEleven, 
    App.fxViewTwelve, App.fxViewThirteen,
    App.fxViewFourteen, App.fxViewFifteen,
    App.fxViewSixteen, App.fxViewSeventeen]
});
App.fxContainer.append();

setInterval(function(){
    App.fxViewOne.toggleProperty('hoover');
    App.fxViewTwo.toggleProperty('hoover');
    App.fxViewThree.toggleProperty('hoover');
    App.fxViewFour.toggleProperty('hoover');
    App.fxViewFive.toggleProperty('hoover');
    App.fxViewSix.toggleProperty('hoover');
    App.fxViewSeven.toggleProperty('hoover');
    App.fxViewEight.toggleProperty('hoover');
    App.fxViewNine.toggleProperty('hoover');
    App.fxViewTen.toggleProperty('hoover');
    App.fxViewEleven.toggleProperty('hoover');
    App.fxViewTwelve.toggleProperty('hoover');
    App.fxViewThirteen.toggleProperty('hoover');
    App.fxViewFourteen.toggleProperty('hoover');
    App.fxViewFifteen.toggleProperty('hoover');
    App.fxViewSixteen.toggleProperty('hoover');
    App.fxViewSeventeen.toggleProperty('hoover');
    
}, 4500);










