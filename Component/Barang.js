import React, { Component } from "react"
import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from "react-native"

class Barang extends Component {
    
    state = {
        jumlah : 0
    }
    // constructor(){

    // }

    handleFunction1 = () => {
        this.setState({jumlah:this.state.jumlah+1})

    }
    
    handleFunction2 = () => {
        this.setState({jumlah:this.state.jumlah-1})
        
        if(this.state.jumlah > 0)
        {
            Alert.alert(`Anda Membeli Barang Dengan Jumlah ${this.state.jumlah}`)
        } else {
            
            Alert.alert('Jumlah Tidak Boleh Kurang Dari 0')
            this.setState({jumlah:0})
            
        }
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.textTwo}>Jumlah : {this.state.jumlah}</Text>
                <TouchableOpacity 
                style={styles.touchOne}
                onPress={this.handleFunction1}
                >
                    <Text> + </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.touchTwo}
                onPress={this.handleFunction2}
                >
                    <Text> - </Text>
                </TouchableOpacity>
                <Text style={styles.textOne}>{this.state.jumlah}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({

    container : {
        flex : 5,
        backgroundColor : 'red',
        margin : 10,
        justifyContent : 'center',
        alignContent : 'center'
    },
    touchOne : {
        alignItems : 'center',
        backgroundColor : 'green',
        margin : 10,
        height : 50
    },
    touchTwo : {
        alignItems : 'center',
        backgroundColor : 'blue',
        margin : 10,
        height : 50
    },
    textOne : {
        marginTop : 10,
        textAlign : 'center',
        fontSize : 30,
        color : 'blue'
    },
    textTwo : {
        marginBottom : 50,
        textAlign : 'center',
        fontSize : 20,
        color : 'blue'
    }
})

export { Barang }