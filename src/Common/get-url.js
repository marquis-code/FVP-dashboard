// export default function(endpoint, addendum) {
// 	if (window.location.hostname === "app.staging-staging.farmz2u.com" ||
// 	window.location.hostname === "localhost") {
// 		return `https://api.farmz2u.co/v1/${endpoint}/${addendum}`
// 	}else{
// 		return `https://api.farmz2u.co/v1/${endpoint}/${addendum}`
// 	}
// }

function isToConsumeStaging() {
	// rules of consuming staging
	const hostname = window.location.hostname;
	return (
	  hostname === "app.staging-staging.farmz2u.com" ||
	  hostname === "localhost"
	);
  }
  
  function getDomain() {
	if (isToConsumeStaging()) {
	  return "api.farmz2u.co";
	} else {
	  return "api.farmz2u.co";
	}
  }
  
  export default function (endpoint, addendum) {
	const subdomain = getDomain();
	addendum = addendum != null ? addendum : "";
  
	return `https://${subdomain}/v1/${endpoint}/${addendum}`;
	
	
}


  


// `https://api.staging.farmz2u.co/v1/${endpoint}`