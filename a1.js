fin.desktop.main(setTimeout(init.bind(this), 10000));

var span = document.querySelector('span'),
		createIn = 10;

var iv = setInterval(function(){
	span.innerHTML = --createIn;
	
	if (!createIn) clearInterval(iv);
},1000);


function init() {
  var button = document.querySelector('button');

  var child1 = new fin.desktop.Window({
    url: 'child.a1.html',
    name: 'child1',
    autoShow: true
  }, function() {

		child1.setAsForeground();
		
		fin.desktop.System.addEventListener('session-changed', function (evnt) {
			console.log("The lock state  has changed to: ", evnt);
			if (evnt.reason === 'unlock') {
				console.log('sure');
				//child1.setAsForeground();
//				setTimeout(child1.setAsForeground.bind(child1), 1);
			}
			
		}, function () {},function () {});

		fin.desktop.System.addEventListener('idle-state-changed', function (evnt) {
			console.log("The idol state  has changed to: ", evnt);
			//setTimeout(child1.setAsForeground.bind(child1), 1000);
			child1.setAsForeground.bind;
		}, function () {},function () {});

    button.addEventListener('click', function() {
      setTimeout(function() {
        child1.setAsForeground();
      }, 3000);
    });
  });
}

