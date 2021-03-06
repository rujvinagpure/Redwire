import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ContentShow from '../../../../utils/contentShow'
import Youtube from 'react-native-youtube';

const VideoScreen = () => {
    return(
        <ScrollView>
            <View>
                <Youtube
                    apiKey="AIzaSyBSrLPI4rp1t4XVYVpMfSXRr3CgsbqCqMA"
                    videoId="Zfsg3oiPXGc"
                    play={false}

                    onReady={ e => console.log('ready')}
                    onChangeState={ e => console.log(e)}
                    onError={error => console.log(error)}

                    style={{alignSelf:'stretch',height:300}}
                />
                <ContentShow/>     
            </View>
        </ScrollView>
    )
}

export default VideoScreen;