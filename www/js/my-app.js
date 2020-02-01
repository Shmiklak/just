//Detect whether Android or iOS is used
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;
if (!Framework7.prototype.device.ios === true) {
    isAndroid = true;
}

var apiHost = "just.dst.uz";

var Url = function (apiHost) {
    this.apiHost = apiHost;
};
Url.prototype.to = function (endpoint) {
    return this.apiHost + endpoint;
};

Template7.global = {
    android: isAndroid,
    ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

if (isAndroid) {
    $$('head').append(
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.bundle.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">\n' +
        '    <link rel="stylesheet" href="css/styles.css">'
    );
}
else {
    $$('head').append(
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.bundle.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">\n' +
        '    <link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">\n' +
        '    <link rel="stylesheet" href="css/styles.css">'
    );
}

if (isAndroid) {
    // Change class
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    $$('.view .navbar').prependTo('.view .page');
}

// Initialize app
var myApp = new Framework7({
    swipePanel: 'left'
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

});

// $$('form.ajax-submit').on('form:success', function (e) {
//     var xhr = e.detail.xhr; // actual XHR object
//     var data = e.detail.data; // Ajax response from action file
//     console.log(xhr, data);
// });

$$(document).on('click', '#login-button', function(e) {
    mainView.router.load({
        url: 'tablesheet.html'
    });
});