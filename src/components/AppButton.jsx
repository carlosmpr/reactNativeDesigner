import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppButton = ({text}) => {
    return (
        <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 12,
        borderRadius: 20,
        backgroundColor:'black'
       
      },
    
      textButton:{
          marginHorizontal:50,
          fontSize:16,
          color:'white',
          textAlign:'center'
      }
})
