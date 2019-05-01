import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { AppConsumer } from "../../ContextProvider";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = { recordedDates: [] };
  }

  componentDidMount() {}

  handleRecordData = rowData => {
    let recordDateData = rowData.map(item => {
      const str = item.recordedDate;
      return str;
    });
    let newRecordDateData = recordDateData.map(item => {
      if (!item || !item.length) {
        return;
      }
      return item.slice(0, 10);
    });
    var recordData = {};
    newRecordDateData.forEach(function(i) {
      recordData[i] = (recordData[i] || 0) + 1;
    });

    // recordData = recordData.map((item, i) => {
    //   return [i, item];
    // });
    // let headerRow = [["x", "frequency"]];
    // let chartData = headerRow.concat(recordData);
    console.log("chart Data", recordData);
    //return chartData;
  };

  render() {
    //const chartData = [...this.props.data];
    let yAxisData = [];
    if (this.props.data) {
      yAxisData = this.handleRecordData(this.props.data);
    }
    console.log("Data", yAxisData);

    const chartEvents = [
      {
        eventName: "select",
        callback({ chartWrapper }) {
          console.log("Selected ", chartWrapper.getChart().getSelection());
        }
      },
      {
        eventName: "click",
        callback({ context }) {
          console.log(context.objectsData);
        }
      }
    ];
    return (
      <div>
        <AppConsumer>
          {context => (
            <div
            // onClick={evt => this.handleRecordData(context.state.objectsData)}
            >
              {this.props.data ? (
                <Chart
                  width={"600px"}
                  height={"400px"}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  //data={}
                  options={{
                    hAxis: {
                      title: "Time"
                    },
                    vAxis: {
                      title: "Popularity"
                    }
                  }}
                  chartEvents={chartEvents}
                  rootProps={{ "data-testid": "1" }}
                />
              ) : (
                <h3>Loading ...</h3>
              )}
            </div>
          )}
        </AppConsumer>
      </div>
    );
  }
}
