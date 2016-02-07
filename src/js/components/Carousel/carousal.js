var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;
var Link = require('react-router-component').Link;
function onChange() {
    console.log('onChange', arguments);
}

function onClickItem() {
    console.log('onClickItem', arguments);
}

function onClickThumb() {
    console.log('onClickThumb', arguments);
}

var CCarousel = React.createClass({
    render() {
        return (
            <Carousel axis="horizontal" showThumbs={true|false} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>

                    <div>
                        <img src="../assets/carousal-images/1.jpeg" />
                        <p className="legend">Product Category 1</p>
                    </div>

                <div>
                    <img src="../assets/carousal-images/2.jpeg" />
                    <p className="legend">Product Category  2</p>
                </div>
                <div>
                    <img src="../assets/carousal-images/3.jpeg" />
                    <p className="legend">Product Category 3</p>
                </div>
                <div>
                    <img src="../assets/carousal-images/4.jpeg" />
                    <p className="legend">Product Category 4</p>
                </div>
                <div>
                    <img src="../assets/carousal-images/5.jpeg" />
                    <p className="legend">Product Category 5</p>
                </div>
            </Carousel>
        );
    }
});

module.exports = CCarousel;
