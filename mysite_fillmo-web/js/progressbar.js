//alert('hello');

var bar = new ProgressBar.Circle( container, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    from: { color: '#aaa', width: 1 },
    to: { color: '#848484', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 10);
      if (value === 10) {
        circle.setText('<font size="5px">Max</font><br><div align="center">' + value + '</div>');
      } else {
        circle.setText('<font size="5px">Containers</font><br><div align="center">' + value + '</div>');
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);  // Number from 0.0 to 1.0