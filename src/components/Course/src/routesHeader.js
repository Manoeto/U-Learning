import React from "react";

import {SafeAreaView, View, Text, StyleSheet, ImageBackground,Image, ScrollView} from 'react-native';
import Ulearning from '../../../../assets/courses/ULearning.png'
import Cart from '../../../../assets/courses/_Cart.png'
import Profile from "../../../../assets/courses/ProfilePicture.png";
import DigitalMarketing from '../../../../assets/courses/DigitalMarketing.png'

const image = { uri: "../../../../assets/courses/DigitalMarketing.png" }; 

export default function Header(){
    return(
        <SafeAreaView>


            <View style={styles.header}>


            <Image
                source={Ulearning} style={{width: 30, height: 30}} resizeMode="contain"
            />
             <Image
                source={Profile} style={{width: 30, height: 30}} resizeMode="contain"
            />
             <Image
                source={Cart} style={{width: 30, height: 30}} resizeMode="contain"
            />

            </View>
            
            <ScrollView>
                <View style={styles.box }><ImageBackground style={styles.image} source={DigitalMarketing}/></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </ScrollView>


        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#FFF'

    },
    box:{
        height: 300,
        backgroundColor: "#FFF",
        margin: 7,
        borderRadius: 6},
        image:{
            flex: 1,
            justifyContent: 'center',
            resizeMode: "cover",
            


        }
})