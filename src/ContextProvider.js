import React, { Component } from "react";

const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: "I am File Name",
      data: [],
      file: null
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setData: fileData => this.setState({ data: fileData }),
          setObjectsData: data => this.setState({ objectsData: data }),
          setFile: file => this.setState({ file, fileName: file.name })
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
