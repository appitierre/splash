import React from 'react';
import LP from 'helpers/lp';

var Splash = React.createClass({

    render: function() {
        return (
            <div>
                Don't forget to <a href="login">login</a>
                {LP('splash', 'title')}
            </div>
        );
    }

});

export default Splash;