// import React, { Component } from 'react';
//
// class CarouselSlide extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentSlide: 0,
//         };
//     }
//
//     // 切换到下一张幻灯片
//     nextSlide = () => {
//         const nextSlideIndex = (this.state.currentSlide + 1) % 2; // 因为您只有两张图片，所以这里是% 2
//         this.setState({ currentSlide: nextSlideIndex });
//     }
//
//     // 切换到上一张幻灯片
//     prevSlide = () => {
//         const prevSlideIndex = (this.state.currentSlide - 1 + 2) % 2; // 同上
//         this.setState({ currentSlide: prevSlideIndex });
//     }
//
//     render() {
//         const slideStyle = {
//             background: 'url(http://placehold.it/1920x605) no-repeat left center',
//             backgroundSize: 'cover',
//         };
//
//         return (
//             <div id="carousel-example-generic" className="carousel slide">
//
//                 <div className="carousel-inner" role="listbox">
//                     <div className={`item ${this.state.currentSlide === 0 ? 'active' : ''}`} id="slide1" style={slideStyle}>
//                         <div className="carousel-caption">
//                             <div className="caption sfr slider-title">Breathtaking views</div>
//                             <div className="caption sfl slider-subtitle">Relaxation in the Bay of Belfalas</div>
//                             <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
//                         </div>
//                     </div>
//                     <div className={`item ${this.state.currentSlide === 1 ? 'active' : ''}`} id="slide2" style={slideStyle}>
//                         <div className="carousel-caption">
//                             <div className="caption sfr slider-title">The simple life</div>
//                             <div className="caption sfl slider-subtitle">Lush gardens in Mordor</div>
//                             <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div id="home-search-section"></div>
//
//                 <a className="left carousel-control" href="#carousel-example-generic" role="button" onClick={this.prevSlide}>
//                     <span className="glyphicon glyphicon-chevron-left"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="right carousel-control" href="#carousel-example-generic" role="button" onClick={this.nextSlide}>
//                     <span className="glyphicon glyphicon-chevron-right"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>
//         );
//     }
// }
//
// export default CarouselSlide;


import React, { Component } from 'react';

class CarouselSlide extends Component {
    render() {
        return (
            <div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                        <div className="item active" id="slide1"
                             style={{ background: 'url(http://placehold.it/1920x605) no-repeat left center', backgroundSize: 'cover' }}>
                            <div className="carousel-caption">
                                <div className="caption sfr slider-title">Breathtaking views</div>
                                <div className="caption sfl slider-subtitle">Relaxation in the Bay of Belfalas</div>
                                <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
                            </div>
                        </div>
                        <div className="item" id="slide2"
                             style={{ background: 'url(http://placehold.it/1920x605) no-repeat left center', backgroundSize: 'cover' }}>
                            <div className="carousel-caption">
                                <div className="caption sfr slider-title">The simple life</div>
                                <div className="caption sfl slider-subtitle">Lush gardens in Mordor</div>
                                <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div id="home-search-section"></div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button"
                       data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>
        );
    }
}

export default CarouselSlide;

