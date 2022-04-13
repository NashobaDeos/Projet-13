import React, { Component } from 'react';



function News(props) {
    console.log(this.props.news);
    return (
        <div className="row">
            <div className="col s12">
            {/* {props.news.data.attributes.pics.data.attributes.url} */}
            </div>
            <div className="col s12"><p>s12</p></div>

        </div>
    )

}

export default News;