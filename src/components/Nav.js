import React, { useState,useEffect } from 'react';
import { View,Text,Switch,StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';


import { updateOnlineStatus } from '../redux/actions/itemAction';

const Nav = ({updateStatus}) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
          
          
          updateStatus(state.isConnected);
          setIsOnline(state.isConnected);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    return (
      <View style={styles.container}>
      {/* Your navigation links */}
      <View style={styles.statusContainer}>
        {isOnline ? <Text style={styles.statusText}>You are online</Text> : <Text style={styles.statusText}>You are offline</Text>}
        <Switch value={isOnline}  trackColor={{ false: '#999', true: 'red' }} 
          thumbColor={isOnline ? 'white' : '#f4f3f4'}   />
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#333",
    padding: 10,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  statusText: {
    color: 'white', 
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  isOnline: state.isOnline
})

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (isOnline) => dispatch(updateOnlineStatus(isOnline)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Nav);
