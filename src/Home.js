import React, {Component} from "react";
import {withAuthenticator} from "@aws-amplify/ui-react";

class Home extends Component{
    constructor(props){
        super(props)
    }

    state = {
        isShowingWeapons: true,
        userWeapons: [],
        userCharacters: []
    }

    onTabClick(e){
        let tabDiv;
        if(e.target.tagName === "P"){
            tabDiv = e.target.parentElement;
        }
        else{
            tabDiv = e.target;
        }
        if(tabDiv.classList.contains("isNotActiveTab")){
            tabDiv.classList.remove("isNotActiveTab");
            if(tabDiv.classList.contains("weaponTab")){
                tabDiv.nextSibling.classList.add("isNotActiveTab");
                this.setState({
                    isShowingWeapons: true
                })
            }
            else{
                tabDiv.previousElementSibling.classList.add("isNotActiveTab");
                this.setState({
                    isShowingWeapons: false
                })
            }
        }
    }

    componentDidMount(){
        Promise.all([
            fetch(`https://l3mbw2dg9b.execute-api.us-west-2.amazonaws.com/prod/weapon/findbyuserid/${this.props.payload.attributes.sub}`), //weapons
            fetch(`https://l3mbw2dg9b.execute-api.us-west-2.amazonaws.com/prod/character/findbyuserid/${this.props.payload.attributes.sub}`) //characters
        ]).then(responses => {
            return Promise.all(responses.map(response => {
                return response.json();
            }));
        }).then(data => {
            console.log(data);
            this.setState({
                userWeapons: data[0],
                userCharacters: data[1]
            })
        }).catch(err => {
            console.log(err);
        });
    }

    renderCharactersOrWeapons(){
        if(this.state.isShowingWeapons){
            if(this.state.userWeapons.length === 0){
                return <p className="emptyArrayNotice">No weapons to be found. Try creating one!</p>
            }
            return(
                <>
                    {this.state.userWeapons
                    .map(weapon => (
                        <>
                            <div className="weaponDiv" onClick={()=>window.location.href=`/weaponDisplay?id=${weapon.weaponId}`}>
                                <p className="weaponName">{weapon.weaponName}</p>
                                <p className="weaponClass">{weapon.weaponClass}</p>
                            </div>
                        </>
                    ))}
                </>
            )
        }
        else{
            if(this.state.userCharacters.length === 0){
                return <p className="emptyArrayNotice">No characters to be found. Try creating one!</p>
            }
            return(
                <>
                    {this.state.userCharacters
                    .map(character => (
                        <>
                            <div className="characterDiv" onClick={()=>window.location.href=`/characterDisplay?id=${character.characterId}`}>
                                <p className="characterName">{character.name}</p>
                                <p className="characterCovenant">{character.covenant}</p>
                                <p className="characterClass">{character.startingClass}</p>
                            </div>
                        </>
                    ))}
                </>
            )
        }
    }

    render(){
        return(
            <>
                <div className="tabDiv">
                    <div className="weaponTab" onClick={this.onTabClick.bind(this)}>
                        <p>Weapons</p>
                    </div>
                    <div className="characterTab isNotActiveTab" onClick={this.onTabClick.bind(this)}>
                        <p>Characters</p>
                    </div>
                </div>
                <div className="contentDiv">
                    {this.renderCharactersOrWeapons()}
                </div>
            </>
        )
    }
}

export default withAuthenticator(Home);
