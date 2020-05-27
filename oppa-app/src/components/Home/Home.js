import React from 'react'
import Tile from './../Tile/Tile'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <Tile name="მობილური" goTo='/Mobile' />
                    <Tile name="კომუნალური" goTo='/Utility' />
                </div>
                <div className="row">
                    <Tile name="ფინანსური მომსახურება" goTo='/Finances' />
                    <Tile name="ქველმოქმედება" goTo='/Cherity' />
                </div>
            </div>
        )
    }
}
export default Home