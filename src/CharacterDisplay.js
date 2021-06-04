import React, {Component} from "react";

class CharacterDisplay extends Component{
    constructor(props){
        super(props)
    }

    state = {
        characterData: [],
        isSignedIn: this.props.isSignedIn
    }

    componentDidMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let characterId = params.get('id');
        fetch(`https://l3mbw2dg9b.execute-api.us-west-2.amazonaws.com/prod/character/${characterId}`) //characterId
        .then(response => response.json())
        .then(data => {
            this.setState({
                characterData: data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    deleteCharacter(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let characterId = params.get('id');
        fetch(`https://l3mbw2dg9b.execute-api.us-west-2.amazonaws.com/prod/character/${characterId}`)
        .then(response => console.log(response))
        .then(window.location.href="/home")
        .catch(err => {
            console.error(err)
        });
    }

    render(){
        return(
            <>
                <div className="characterDisplay">
                    <div className="basicCharacterInfo">
                        <h3>Basic Character Info</h3>
                        <p className="characterDisplayName">Name: {this.state.characterData.name}</p>
                        <span className="characterDisplayGender">Gender: {this.state.characterData.gender}</span>
                        <p className="characterDisplayClass">Starting Class: {this.state.characterData.startingClass}</p>
                        <p className="characterDisplayClass">Covenant: {this.state.characterData.covenant}</p>
                    </div>
                    <div className="attackDefenseOtherStats">
                        <div className="attackStats">
                            <h3>Attack</h3>
                        </div>
                    </div>
                </div>
                <div className="characterDeleteBtn" onClick={this.deleteCharacter}>
                    <p>Delete Character</p>
                </div>
            </>
        )
    }
}

export default CharacterDisplay;