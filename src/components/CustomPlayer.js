import React from 'react';
import { View, Text,StyleSheet,Dimensions,Image } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


const CustomPlayer = ({ videoUrl,videoRef,currentTime,onProgress,isPlaying }) => {
  console.log(typeof videoUrl)
  const {height} = Dimensions.get('screen');

  return (
 
    <View style={{width: '100%'}}>
      <View style={{width:'100%', height:300}}>
      <VideoPlayer 
        source={{ uri: videoUrl.sources }} 
        ref={videoRef}
        currentTime={currentTime}
        onProgress={onProgress}
        paused={!isPlaying}
        style={styles.videoPlayer}
        
        onEnterFullscreen={true}
        seekColor={'red'}
        />
        </View>
      
      <View style={styles.playerContainer}>
        <View style={styles.mainDesc}>
      <Image source={{ uri: videoUrl.thumb }} style={{width:40,height:40, borderRadius:50}}  />
      <Text style={styles.playerSubtitle}>{videoUrl.subtitle}</Text> 
     
      </View>
      <Text style={styles.playerTitle}>{videoUrl.title}</Text> 
     
      <Text style={styles.playerDesc}>{videoUrl.description}</Text> 
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    videoPlayer: {
     
      borderRadius:10,
    },
    playerContainer:{
        paddingTop:15,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10,
    },
    playerTitle:{
        fontSize:20,
        fontWeight:'500',
        
    },
    playerSubtitle:{
        fontSize:12,
        fontWeight:'500',
        marginLeft:15
    },
    playerDesc:{
        fontSize:10,
        fontWeight:'500',
    },
    mainDesc:{
      flexDirection:'row',
      alignItems:'center',
      marginBottom:20
    }
  });

export default CustomPlayer;