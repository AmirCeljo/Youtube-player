import React, { useRef,useEffect,useState } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableOpacity, ScrollView,Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchAPI,loadFromAsyncStorage } from '../redux/actions/itemAction';
import CustomPlayer from '../components/CustomPlayer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ViewModel = ({ data, loading, error,isOnline, fetchAPI, loadFromAsyncStorage }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const handleVideoTimeUpdate = (videoTime) => {
    setCurrentTime(parseInt(videoTime));
  };

  const handleScroll = () => {
   setIsPlaying(false);
  };

  const handleScrollEnd = () => {
    setIsPlaying(true);
  };
  useEffect(() => {
 
    
    if(isOnline){
      fetchAPI();  
      
    }
    else{
      loadFromAsyncStorage();
    }
  }, [isOnline]);
  
  

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
    onScroll={handleScroll}
      onScrollEndDrag={handleScrollEnd}
      scrollEventThrottle={20}
    >
    {selectedVideo &&
    <CustomPlayer 
    
    videoRef={videoRef}
    videoUrl={selectedVideo}
    currentTime={currentTime}
    onProgress={handleVideoTimeUpdate}
    isPlaying={isPlaying}
    
    /> }
      <FlatList
        data={data.videos}
        renderItem={({ item, index }) =>{
            const handleItemClick = (video) => {
                
                setSelectedVideo(video);
                // cacheVideo(video.sources);
              };
            return (
              <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleItemClick(item)}
              >
                          <View style={styles.container}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.thumb }} style={styles.itemImage} />
            </View>
            <View style={styles.itemDetails}>
              <View style={{flexDirection:'row'}}>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:50,borderColor:'red'}}>
                <Image source={{ uri: item.thumb }} style={{width:40,height:40, borderRadius:50}}  />

      </View>
    
    <View style={{marginLeft:16}}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemChannel}>{item.subtitle}</Text>
    </View>
    </View>
    
    <View>
    <MaterialIcons name="more-vert" size={24} color="#888" />
    </View>
  </View>
</View>
              </TouchableOpacity>
            )
        }   
        }
        keyExtractor={(item,index) => index.toString()}
        
      />
    </ScrollView>
   
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
    // margin:10,
  },
  itemContainer: {
    // marginRight: 10,
    marginTop:10,
  },
  itemImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:0
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemChannel: {
    fontSize: 14,
    color: '#888',
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.api.data,
    loading: state.api.loading,
    error: state.api.error,
    isOnline: state.api.isOnline
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPI: () => dispatch(fetchAPI()),
    loadFromAsyncStorage: () => dispatch(loadFromAsyncStorage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);