import React, { Component } from 'react';
import { View, Text ,Button} from 'react-native';
import { Card, ListItem, Icon,Image } from 'react-native-elements'
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    
    
   ]
export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
            <Card title="La Gora">
<View  >
          <Image
           style = {{ 
           width: "100%",
           height: "80%",
           }}
            resizeMode="cover"
            source={require("../assets/lagora.jpg")}
          />
         <Button
        //onPress={onPressLearnMore}
        onPress={() => this.props.navigation.navigate('Scan')}
        title="Scan Qr code"
        color="#841584"
       
        />
        </View>
        
</Card>

        </View>


    );
  }
}
