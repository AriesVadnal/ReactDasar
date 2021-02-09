import React, {Component} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component {

    render(){
        return (
            <div>
               <p>YouTube Component</p>
              <hr/>
              <YouTubeComp time="11.11" title="Fashion 1" desc="Nautica 2010"/>
              <YouTubeComp time="22.22" title="Fashion 2" desc="Nautica 2011"/>
              <YouTubeComp time="33.33" title="Fashion 3" desc="Nautica 2012"/>
              <YouTubeComp time="44.44" title="Fashion 4" desc="Nautica 2013"/>
              <YouTubeComp/> 
            </div>
        )
    }
}

export default YoutubeCompPage;