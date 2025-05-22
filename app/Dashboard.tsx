import React from 'react';
import { Dimensions, Platform, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

export default function Dashboard() {
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f7fa' }}>
            <Navbar active="ViagemFree" />
        </SafeAreaView>
    );
}
