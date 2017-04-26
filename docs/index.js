// Fetch the 5 hottest posts on /r/awww
  reddit.hot('wallpapers').limit(9).fetch(function(res) {
    // res contains JSON parsed response from Reddit
    // console.log(res);
    

    var linkArr = res.data.children.map(getImageLinks);
    // var thumbArr = res.data.children.map(getThumNails);
    

    // console.log(linkArr);
    // console.log(thumbArr);

    var ul = document.querySelector('#ul');
    
    linkArr.forEach(function(n,i){

    	var a = document.createElement('a');
    	var li = document.createElement('div');
        var img = document.createElement('img');

    	a.href = n ;
        img.src = linkArr[i];

    	a.setAttribute('data-lightbox','test');
        li.setAttribute('class','li');
    	
    	

    	a.appendChild(img);
    	li.appendChild(a);
    	ul.appendChild(li);
    })

    

    function getImageLinks(n){
    	// console.log(n.data.url);
    	return n.data.url ;
    }

   
    function getThumNails(n){
    	// console.log(n.data.thumbnail);
    	return n.data.thumbnail ;
    }

  });