import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideAbout } from '../../actions'

import { Alert } from 'reactstrap'

class AboutAlert extends Component {
  render () {
    const { dispatch, visible } = this.props
    return (
      <Alert color='info' isOpen={visible} toggle={() => dispatch(hideAbout())}>
        <h5 className='alert-heading'>What is naniviro?</h5>
        <p className='mb-0'>
          naniviro is an unofficial client for Crunchyroll. It provides an interface for Crunchyroll that is fast and easy to use, all while providing handy features, such as AniList updating.

          <br /><br />

          naniviro communicates directly with Crunchyroll - no data is ever stored.
        </p>
      </Alert>
    )
  }
}

export default connect((state) => {
  return {
    visible: state.Options.aboutVisible && state.Auth.guest
  }
})(AboutAlert)
