import React from 'react';
import Audio from 'react-audioplayer';
import fakeData from './playlist.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playlist: null };
  }
  componentDidMount() {
    // fetch('http://150.95.140.248/playlist')
    //   .then(function(response) {
    //     return response.json();
    //   }).then(function(json) {
    //     this.setState({ playlist: json.playlist });
    //   }.bind(this)).catch(function(ex) {
    //     alert('Sorry, network error: ' + ex)
    //   });

    // Do ajax request here,
    // just pretend already got the data...
    this.setState({ playlist: (fakeData.playlist) });
  }
  render() {
    const pl = this.state.playlist;
    return (
      <div style={{
        width: '800px',
        height: 'auto',
        margin: 'auto',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
      }}>
        <h1>react-audioplayer demo page</h1>
        <h2>FullPlayer with comments</h2>
        {
          pl ?
            <Audio
              width={700}
              height={360}
              fullPlayer={true}
              comment={true}
              color="#42A5F5"
              playlist={pl}
              style={{
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.28)'
              }}
            /> : null
        }
        <h2>FullPlayer without comments</h2>
        {
          pl ?
            <Audio
              width={500}
              fullPlayer={true}
              color="#00BFA5"
              playlist={pl}
              style={{
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.28)'
              }}
            /> : null
        }
        <h2>A tiny player</h2>
        {
          pl ?
            <Audio
              color="#FF5252"
              playlist={pl}
              style={{
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.28)',
                marginBottom: '100px'
              }}
            /> : null
        }
      </div>
    );
  }
}

export default App;
