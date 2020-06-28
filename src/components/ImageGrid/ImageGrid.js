import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImage } from './../../actions';
import './styles.css';
import Button from './../Button';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImage();
    }

    render() {
        const { images, isLoading, loadImage } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                <Button
                    onClick={() => { !isLoading && loadImage() }}
                    loading={isLoading}>Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.isLoading,
        images: state.images,
        error: state.images
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadImage: () => {
            dispatch(loadImage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
