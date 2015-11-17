'use strict';

var React = require('react');
var boxStyle = {'height':'100px',
'width': '100px'}

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   'getInitialState': function onGetInitialState() {
	   return {
		   'value': this.props.initialValue
	   };
   },
  'render': function onRender () {
    return (
         <button style = {boxStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);

var MessageBox = React.createClass({
  render: function() {
    return <div>{'Mr. ' + this.props.name}</div>;
  }
});

ReactDOM.render(<MessageBox name="Rogers"/>, mountNode);