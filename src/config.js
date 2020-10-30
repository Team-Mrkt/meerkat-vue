let token;

let configObject = {
    apiBaseUrl: "https://mrkt-api.herokuapp.com",
    authConfig: configObjectFunc().authConfig,
    authConfigForUpload: configObjectFunc().authConfigForUpload
}



function configObjectFunc() {
  console.log('oi')
  if (localStorage.getItem("userDetails")) {
    token = JSON.parse(localStorage.getItem("userDetails")).token;
  }else {
    token = null;
  }
  
  if (token) {
      const exp = JSON.parse(localStorage.getItem("userDetails")).jwtExpiry
      const now = Date.now()
      if (now > exp) {
        localStorage.clear()
        window.location.href = window.location.origin
      }

      return {
          authConfig: {
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json',  }
          },
          authConfigForUpload: {
            headers: { 'Content-Type': 'multipart/form-data', Authorization: "bearer " + token, 'Accept': '*/*',  }
          },
      };
  }
  else {
      return {
          authConfig: {
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
          },
          authConfigForUpload: {
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
          }
      };
  }
}


export default configObject;
