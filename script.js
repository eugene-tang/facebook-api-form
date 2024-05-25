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
