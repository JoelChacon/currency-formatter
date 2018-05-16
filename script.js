let app = new Vue({
  el: '#app',
  data: {
    help: 'Help!',
    dissy: true,
    amount: 1000000,
  },
  methods: {
  	
  	btnHelp() {
  		this.dissy = !this.dissy;
  		if(this.dissy) {
  			this.help = "Help!";
  		} else {
  			this.help = "Helped!";
  		}
  	},

  	boom() {
  		let str = "Dynamite goes Boom!";
  		let revStr = str.split(' ').reverse().join(' ');
  		alert(revStr);
  		console.log(this.money);
  	}
  }
})
