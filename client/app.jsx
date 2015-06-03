var React = require('react');
require('./app.css');

var App = React.createClass({
  render() {
    var s = getStyle();
    // var font = require('../assets/fonts/AdamCG.otf');
    // var logo = ;
    return (
      <div>
        <div style={s.backContainer}></div>
        <div style={s.mainContainer}>
          <img src={require('../assets/images/beaupixel__small.png')} style={s.logo}/>
          <div style={s.subtitle}> CRAFTING YOUR DIGITAL LOOK </div>
          <div style={s.footer}> DIGITAL AGENCY - LONDON - 2015 </div>
        </div>
      </div>
    )
  }
});

React.render(<App />, document.body);

function getStyle() {
  return {
    backContainer: {
      backgroundImage: 'url('+require('../assets/images/mac1.jpeg')+')',
      backgroundSize: '100%',
      height: '900px',
      WebkitFilter: 'brightness(0.5)',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      width: '100%',
    },
    logo: {
      width: '80%',
      margin: '10%',
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '50px',
      width: '100%',
      marginTop: '50px',
      color: 'white',
    },
    footer: {
      marginTop: '80px',
      textAlign: 'center',
      fontSize: '20px',
      color: 'white',
    },
    mainContainer: {
      position: 'relative',
      height: '900px',
    }
  }
}
