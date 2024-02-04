import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer ">
                    <span className="text-white mt-2 text-muted ">All Rights Reserved 2022 @micronsol.com</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
