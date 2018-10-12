import React, { Fragment } from 'react'
import { connect } from 'react-redux';




class Load extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }


    _renderModule = () => (
         <div>
            <img src={require('../../../assets/images/animation.gif')}
            className='loader__img'
            alt='...'
            />
            <h3 style={{ textAlign: 'center' }} >Message Sent <span role='img' aria-label='emoji_thumb'>👍</span></h3>
        </div> 
       )


    render() {
        const { app: { loading } } = this.props;
        return (
            loading &&
            <Fragment>
                {this._renderModule()}
            </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    app: state.app
})

export default connect(mapStateToProps, null) (Load)