/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native';

/**
 * Button that presents the Cast icon.
 *
 * By default, upon pressing the button it opens the native Cast dialog.
 *
 * Wraps [GCKUICastButton](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_u_i_cast_button) and
 */
class CastButton extends React.Component {
  render() {
    return <GoogleCastButton triggersDefaultCastDialog={true} {...this.props} />;
  }
}

CastButton.propTypes = {
  /**
   * A flag that indicates whether a touch event on this button will trigger the display of the Cast dialog that is provided by the framework.
   *
   * By default this property is set to YES. If an application wishes to handle touch events itself, it should set the property to NO and register an appropriate target and action for the touch event.
   * */
  triggersDefaultCastDialog: PropTypes.bool
};

var GoogleCastButton = requireNativeComponent('GoogleCastButton', CastButton);

export default CastButton;