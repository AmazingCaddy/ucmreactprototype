import React from 'react';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class UcmApp extends React.Component {
  render() {
    return (
      <div className="ucma-container">
        <DefaultButton
          text="Hello World"
          primary={true}
        />
      </div>
    )
  }
}

export default UcmApp;