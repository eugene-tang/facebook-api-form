document.addEventListener('DOMContentLoaded', function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '408342358854411',
      cookie     : true,
      xfbml      : true,
      version    : 'v20.0'
    });
    console.log('Facebook SDK initialized');
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

function submitForm(event) {
  event.preventDefault();

  console.log("Logging in...");
  FB.login(function(response) {
    if (response.authResponse) {
      let accessToken = response.authResponse.accessToken;
      console.log('Access Token:', accessToken);
      alert('Logged in successfully!');
    } else {
      alert('User cancelled login or did not fully authorise.');
    }
  }, {scope: 'publish_actions'});
}
