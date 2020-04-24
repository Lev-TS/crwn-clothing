import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super ();
        
        this.state = {
            sections: [  
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }

// {id, ...otherSectionProps} passed in map is simply destructuring of a section 
// from this.state.sections.
// ...otherSectionProps is an ES6 syntaxt which is saying that keys in the sections 
// array equls to the property name and value that we are passing. So it is the equvalent
// of <MenuItem key={id} title={title} imageUrl={imageUrl} etc./> this in turn is same to 
// saying <MenuItem key={this.state.sections.id} title={this.state.sections.title} etc./>
    render() {
        return (
            <div className='directory-menu'>                 
                {this.state.sections.map(({id, ...otherSectionProps }) => ( 
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
};

export default Directory;