const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
};


App.prototype.generateLinks = function() {
  for (let website of this.websites){
    this.links.push(`"https://${website}.com"`);
  }
};


const app = new App();
app.generateLinks();
console.log(app.links);
