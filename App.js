import  React from 'react';

let contactsArray = [
    {
        name: 'Mary Margaret Blanchard',
        phone: '555-1234',
        email: 'snowwhite@ouatmail.com',
        address: '945 N. Storybrook Ln',
        image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
        isActive: true
    },
    {
        name: 'David Nolan',
        phone: '555-9876',
        email: 'princecharming@ouatmail.com',
        address: '945 N. Storybrook Ln',
        image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg',
        isActive: false
    },
    {
        name: 'Emma Swan',
        phone: '555-2345',
        email: 'thesavior@ouatmail.com',
        address: '693 N. Storybrook Ln',
        image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
        isActive: false
    },
    {
        name: 'Regina Mills',
        phone: '555-6667',
        email: 'evilqueen@ouatmail.com',
        address: '1313 E. Mayor St',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
        isActive: false
    },
    {
        name: 'Mr. Gold',
        phone: '555-4653',
        email: 'rumplestiltskin@ouatmail.com',
        address: '101 N. Main St',
        image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
        isActive: false
    },
    {
        name: 'Emma Swan',
        phone: '555-2345',
        email: 'thesavior@ouatmail.com',
        address: '693 N. Storybrook Ln',
        image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
        isActive: false
    },
    {
        name: 'Regina Mills',
        phone: '555-6667',
        email: 'evilqueen@ouatmail.com',
        address: '1313 E. Mayor St',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
        isActive: false
    },
    {
        name: 'Mr. Gold',
        phone: '555-4653',
        email: 'rumplestiltskin@ouatmail.com',
        address: '101 N. Main St',
        image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
        isActive: false
    }
];

class App extends React.Component {
 constructor() {
     super();
     this.state = {
         person: contactsArray[0]
     };
 }
 handleClick (contact) {
     this.setState({person: contact})
 }
 render() {
     return(
         <div className="app">
             <div className="contacts">
                 <h1>Contacts</h1>
                 <div className="list">
                     <div className="hidden">
                     {contactsArray.map((c, index) => {

                         let imageStyles = {
                             backgroundImage: 'url('+ c.image + ')'
                         };
                         let contactStyles = {
                             backgroundColor: c === this.state.person ? '#46733E' : ''
                         };

                         return (
                             <div className="contactList" key={index} onClick={this.handleClick.bind(this, c)} style={contactStyles}>
                                 <span className="image"  style={imageStyles}></span>
                                 <span className="name" >{c.name}</span>
                             </div>
                         );
                     })}
                         </div>
                 </div>
             </div>
             <div className="contact">
                 <ContactInfo  person={this.state.person}/>
             </div>
         </div>
     )
 }
}

class ContactInfo extends React.Component {
    render() {
        let styles = {
            backgroundImage: 'url('+ this.props.person.image +')'
        };
        return (
            <div className="contact-info">
                <header>
                    <span className="phones">&#x260E;</span>
                    <div className="image-contact"  style={styles}></div>
                    <h3 >{this.props.person.name}</h3>
                </header>
                <section>
                    <div className="phone" ><p><span>Phone:</span> {this.props.person.phone}</p></div>
                    <div className="email" ><p><span>Email:</span> {this.props.person.email}</p></div>
                    <div className="address" ><p><span>Address:</span> {this.props.person.address}</p></div>
                </section>
            </div>
        )
    }
}

export default App;