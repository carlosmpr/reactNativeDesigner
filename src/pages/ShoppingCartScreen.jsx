import React from 'react'
import { StyleSheet, Text, View,  } from 'react-native'
import AppButton from '../components/AppButton'
import Item from '../components/Item'
import Page from '../components/Page'
import hoodie from '../../assets/hoodie.png'
import leather from '../../assets/leather.png'
import purple from '../../assets/purple.png'
const data = [
    {image: hoodie},
    {image: leather},
    {image: purple},
    ,
    {image: purple}
    

]
const ShoppingCartScreen = () => {
    return (
       <Page>
           
           <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18}}>My Cart</Text>

         {data.map((item) => <Item {...item} />)}
         <AppButton text={"GO TO CHECKOUT"}/>
         <View style={{height:200}}></View>
       </Page>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({})
