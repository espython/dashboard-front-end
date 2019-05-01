import React, { Component } from "react";
import { Container, InputGroup, Button } from "react-bootstrap";
import papaParse from "papaparse";

import { AppConsumer } from "../../ContextProvider";

class LoadFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  /**
   * handle item frequency inside array
   * uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
    var  count = {};
    uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    console.log(count);
   */

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <AppConsumer>
          {context => (
            <div>
              <React.Fragment>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row"
                  }}
                >
                  <InputGroup className="mb-3">
                    <input
                      hidden
                      id="file-upload"
                      aria-describedby="basic-addon2"
                      type="file"
                      placeholder="Input File"
                      onChange={e => {
                        const { files } = e.target;
                        const file = files[0];
                        console.log(file);

                        context.setFile(file);
                        // Use reader
                        papaParse.parse(files[0], {
                          header: true,
                          complete(results) {
                            const objectData = results.data;
                            console.log("objectData", objectData);

                            context.setObjectsData(objectData);
                          },
                          dynamicTyping: true
                        });
                        papaParse.parse(files[0], {
                          complete(results) {
                            const rowData = results.data;
                            //console.log("Rowdata", rowData);

                            context.setData(rowData);
                          },
                          dynamicTyping: true
                        });
                      }}
                    />
                    <InputGroup.Append>
                      <Button
                        style={{ fontWeight: "bold" }}
                        variant="dark"
                        onClick={e => {
                          const uploadField = document.getElementById(
                            "file-upload"
                          );
                          uploadField.click();
                        }}
                      >
                        Upload File
                      </Button>
                    </InputGroup.Append>
                    <h4 style={{ marginLeft: "10px" }}>
                      {context.state.fileName}
                    </h4>
                  </InputGroup>
                </Container>
              </React.Fragment>
            </div>
          )}
        </AppConsumer>
      </div>
    );
  }
}

export default LoadFile;
