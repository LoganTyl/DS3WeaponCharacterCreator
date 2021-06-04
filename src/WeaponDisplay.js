import React, {Component} from "react";

class WeaponDisplay extends Component{
    constructor(props){
        super(props)
    }

    state = {
        weaponData: [],
        isSignedIn: this.props.isSignedIn
    }

    componentDidMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let weaponId = params.get('id');
        fetch(`https://l3mbw2dg9b.execute-api.us-west-2.amazonaws.com/prod/weapon/${weaponId}`) //weaponId
        .then(response => response.json())
        .then(data => {
            this.setState({
                weaponData: data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    render(){
        return(
            <>
                <div className="weaponDisplay">
                    <div className="basicCharacterInfo">
                        <h3>Basic Character Info</h3>
                        <p className="weaponDisplayName">Name: {this.state.weaponData.weaponName}</p>
                        <p className="weaponDisplayClass">Weapon Class: {this.state.weaponData.weaponClass}</p>
                        <span className="weaponDisplayAttackTypes">Attack Types: </span>
                        <span>{this.state.weaponData.attackType}</span>
                        <p className="weaponDisplayWeaponSkill">Weapon Skill: {this.state.weaponData.weaponSkill} | Cost: {this.state.weaponData.skillCost} FP</p>
                    </div>
                    <div className="attackDefenseOtherStats">
                        <div className="attackStats">
                            <h3>Attack</h3>
                            {/* <p>{this.state.weaponData.attackStats.physical}</p> */}
                            {/* <p>Physical: {this.state.weaponData.attackStats.physical.N}</p>
                            <p>Fire: {this.state.weaponData.attackStats.fire.N}</p>
                            <p>Magic: {this.state.weaponData.attackStats.magic.N}</p>
                            <p>Lightning: {this.state.weaponData.attackStats.lightning.N}</p>
                            <p>Dark: {this.state.weaponData.attackStats.dark.N}</p>
                            <p>Critical: {this.state.weaponData.attackStats.critical.N}</p>
                            <p>Range: {this.state.weaponData.attackStats.range.N}</p>
                            <p>Spell Buff: {this.state.weaponData.attackStats.spellBuff.N}</p> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default WeaponDisplay;