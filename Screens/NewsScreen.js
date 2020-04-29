// import the  libraries 
import React from 'react';
import { ScrollView, View, StyleSheet, Text} from 'react-native';
//import Admob 
import {AdMobBanner, AdMobInterstitial,  PublisherBanner,  AdMobRewarded} from 'expo-ads-admob';
// import the Components
import ArticlesView from '../Components/ArticlesView';
import TopHeadlines from '../Components/TopHeadlines';
import Extra from '../Components/extra/Extra';
import { withNavigation } from 'react-navigation';

//Stylesheet
const styles = StyleSheet.create({
  AdsView:{
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
});

// The main screen
function NewsScreen({ navigation }) {
  return (

    <ScrollView>
      {/* Top headlines component */}
      <TopHeadlines />
      {/* Extra component */}
      <Extra />
      {/* Ads */}
      <View style={styles.AdsView}>
         <AdMobBanner
           bannerSize="largeBanner"
           adUnitID="ca-app-pub-3940256099942544/6300978111"
           testDeviceID="EMULATOR"
           servePersonalizedAds/>
      </View>
      {/* Articles component */}
      <ArticlesView/>
      <View style={{height:70}}>
      </View>
      {/* Ads */}
    </ScrollView>

  );
}
export default withNavigation(NewsScreen);