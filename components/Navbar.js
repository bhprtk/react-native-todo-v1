import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

class Navbar extends Component {
	render() {
		return (
			<Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
				style={{
					container: {
						marginTop: 20
					}
				}}
      />
		)
	}
}

export default Navbar;
