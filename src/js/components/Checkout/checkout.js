var React = require('react');
var Link = require('react-router-component').Link;
var Checkout = React.createClass({
    render:function(){
        return (
            <div className="row">
                <div className="col-sm-2">
                    <h3>In Progress..</h3>
                </div>
                <div className="container">
                    <Link href='/'>Back to home</Link>
                </div>
            </div>
        );
    }
});

module.exports = Checkout;
