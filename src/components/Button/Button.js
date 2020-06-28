import React, { Component } from 'react';
import './style.css';

// const Button = ({ children, loading, ...props }) => (
//     <button className='button' disabled={loading} {...props}>
//         {loading ? 'Loading ...' : children}
//     </button>
// );

class Button extends Component {
    render() {
        const { children, loading, ...props } = this.props;
        return (
            <button className='button' disabled={loading} {...props}>
                {loading ? 'Loading ...' : children}
            </button>
        )
    }
}

Button.defaultProps = {
    loading: false
};

export default Button;
