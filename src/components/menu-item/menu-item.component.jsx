import React from 'react';
import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

// { title, imageUrl, size } passed in the MenuItem function 
// is destructuring of this.props.title and this.props.imageUrl
// passed from the directory.jsx parent component.
// ----
// Style attribute to div JSX is a standard useage of inline css 
// styles in HTML, main difference is that the css properties 
// should be in camelCase. It enables us to assign URL dynamically
// that is, each MenuItem will get respective url.
// ----
// we are passing size to the MenuItem because two of our menu-items 
// are rendered larger than others. In state only those items that 
// will be big should have this property, so that others will not 
// receive it.
// ----
// <div className='background-item' gets css property of 
// display: absolute, that is why the <div className='content' 
// is not nested inside it

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

// To power up our MenuItem to have access to those things 
// related to router import withRouter high-order component
// from the react-dom-library and pass MenuItem here.
export default withRouter(MenuItem);