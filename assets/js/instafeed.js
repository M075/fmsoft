var request = new XMLHttpRequest();
			request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=8721639499.3127f6e.422f6afa32824ce8a17cd63e1acc22a0', true);

			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!
			    var data = JSON.parse(request.responseText);
			    for (var i=0;i < data.data.length;i++) {
			    	var container = document.getElementById('insta-feed');
			    	var imgURL = data.data[i].images.standard_resolution.url;
			    	console.log(imgURL);
					var div = document.createElement('div');
			        div.setAttribute('class','instapic');
			        container.appendChild(div);
			        var img = document.createElement('img');
			        img.setAttribute('src',imgURL)
			        div.appendChild(img);
			    }

			    console.log(data);
			  } else {
			  }
			};
			request.onerror = function() {
			  // There was a connection error of some sort
			};
			request.send();