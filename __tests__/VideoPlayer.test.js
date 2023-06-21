import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import CustomPlayer from '../src/components/CustomPlayer';


describe('CustomPlayer', () => {
    describe('CustomPlayer', () => {
        it('renders correctly', () => {
          const videoUrl = {
            sources: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNv2FCwDB7uKHYTHoSkgr7U2DxANdNd6BiQ&usqp=CAU',
            subtitle: 'By Blender Foundation',
            title: 'Big Buck Bunny',
            description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ait no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revengeLicensed under the Creative Commons Attribution licensehttps://www.bigbuckbunny.org',
          };
      
          const { getByText } = render(
            <CustomPlayer
              videoUrl={videoUrl}
              videoRef={null}
              currentTime={0}
              onProgress={() => {}}
              isPlaying={true}
            />
          );
      
          
          expect(getByText('Video Title')).toBeTruthy();
          expect(getByText('Video Subtitle')).toBeTruthy();
        
        });
      
      
      });
})