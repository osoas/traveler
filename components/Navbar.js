import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const {width, height} = Dimensions.get('window');


const style = StyleSheet.create({
   navBar:{
    position:'relative',
    top:0,
    width:'100%',
    height:60 ,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#008000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
   },
   linkText: {
     color: '#FFFFFF',
     paddingVertical: 10,
     paddingHorizontal: 18,
     fontWeight: 'bold',
     fontSize: 16,
     borderRadius: 8,
     overflow: 'hidden',
   },
   linkTextActive: {
     backgroundColor: '#fff',
     color: '#008000',
   },
});

export default function NavBar({ active = 'ViagemFree' }) {
    return(
       <View style={style.navBar}>
        <Link href='/ViagemFree' asChild>
           <TouchableOpacity>
             <Text
  style={
    active === 'ViagemFree'
      ? [style.linkText, style.linkTextActive]
      : [style.linkText]
  }
>
  Viagem Free
</Text>
           </TouchableOpacity>
        </Link>
        <Link href='/ViagemVip' asChild>
           <TouchableOpacity>
             <Text 
               style={
    active === 'ViagemVip'
      ? [style.linkText, style.linkTextActive]
      : [style.linkText]
  }
  >Viagem VIP</Text>
           </TouchableOpacity>
        </Link>
       </View>
    );
};


