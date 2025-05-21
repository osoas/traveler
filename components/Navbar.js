import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const {width, height} = Dimensions.get('window');


style = StyleSheet.create({
   navBar:{
    position:'relative',
    top:0,
    width:'100%',
    height:60 ,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#008000',

   },

   linkText: {
     color: '#FFFFFF',
     padding: 20,
     

   },



});
export default function NavBar() {
    return(
       <View style = {style.navBar}>
        <Link href='/' asChild>
           <TouchableOpacity>
             <Text style = {style.linkText}>Inicio</Text>
           </TouchableOpacity>
        </Link>
        
        <Link href=''>
            <TouchableOpacity>
               <Text style = {style.linkText}>Menu</Text> 
            </TouchableOpacity>        
        </Link>


       </View>

    );
    

};


