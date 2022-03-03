import React, { Component } from "react"
import { 
    Text,
    View,
    StyleSheet
} from "react-native"

class Headers extends Component {

    constructor(props){
        super(props)

        this.state = {
            judul : this.props.judul
        }
    }

    render(){

        return(

            <View style={styles.container}>
                <Text style={styles.textOne}>Tugas 3 React Native</Text>
                <Text style={styles.textTwo}>Tugas 3 React Native</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flex : 2,
        margin : 10,
        backgroundColor : 'darkseagreen'
    },
    textOne : {
        textAlign : 'center',
        color : 'white',
        marginTop : 5
    },
    textTwo : {
        textAlign : 'center',
        color : '#8a2be2',
        fontSize : 30
    }
})

export { Headers }