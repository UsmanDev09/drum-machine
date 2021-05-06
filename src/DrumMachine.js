import react,{Component} from 'react';
const DrumPad = ({ drumKey, song,handleClick,url }) => {
    return (
        <button className="drum-pad" id={song} onClick={handleClick(drumKey,song)}>
            {drumKey}
            <audio className="clip" src={url} id={drumKey}/>
        </button>
    );
};
class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drumPads: [
                {
                    "key": "Q",
                    "song": "Audio-1",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/drum-roll_by_jlaudio_preview.mp3"
                },
                {
                    "key": "W",
                    "song": "Audio-2",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/fail_by_grach_preview.mp3"
                },
                {
                    "key": "E",
                    "song": "Audio-3",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/magic-wand_by_maxtecb_preview.mp3"
                },
                {
                    "key": "A",
                    "song": "Audio-4",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/magic-wand_by_maxtecb_preview.mp3"
                },
                {
                    "key": "S",
                    "song": "Audio-5",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/magic-wand_by_maxtecb_preview.mp3"
                },
                {
                    "key": "D",
                    "song": "Audio-6",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/pouring-coffee-into-china-mug_by_hypernation_preview.mp3"
                },
                {
                    "key": "Z",
                    "song": "Audio-7",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/shower_by_yio_preview.mp3"
                },
                {
                    "key": "X",
                    "song": "Audio-8",
                    "url": "https://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/shower_by_yio_preview.mp3"
                },
                {
                    "key": "C",
                    "song": "Audio-9",
                    "url": "hhttps://cms-assets.tutsplus.com/uploads/users/1631/posts/30079/audio/pouring-coffee-into-china-mug_by_hypernation_preview.mp3"
                }
            ],
           
            currentSongText: '',
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        // will click the button when the corresponding key pressed
        window.addEventListener('keypress', this.handleKeyPress);
    }
    // handler for the click button on the DrumPad Component
    handleButtonClick(key, song) {
        return () => {
            document.getElementById(key).play();
            this.setState({
                currentSongText: song,
            });
        };
    }
    render() {
        return (
            <div id="drum-machine">
                <div className="app_title">
                    <h1>Drum Machine App</h1>
                </div>
                <div className="display-container">
                    <div id="display-pads">
                        {this.state.drumPads.map(item => (
                            <DrumPad
                                song={item.song}
                                key={item.key}
                                drumKey={item.key}
                                handleClick={this.handleButtonClick}
                                url={item.url}
                            />
                        ))}
                    </div>
                    <p id="display" className="current-text">{this.state.currentSongText}</p>
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        window.removeEventListener('keypress', this.handleKeyPress);
    }

    handleKeyPress(e) {
        const pad = this.state.drumPads.find(
            item => item.key === e.key.toUpperCase(),
        );
        // click the button
        if (pad) document.getElementById(pad.song).click();
    }
}

export default DrumMachine