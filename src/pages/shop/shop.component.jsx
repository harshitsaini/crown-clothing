import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from "./shop.data.js";

class ShopePage extends React.Component {
  constructor(){
    super();
    this.state = {
      shopData: SHOP_DATA
    };
  }

  render(){
    return (
      <div className="shop-page">
        {
          this.state.shopData.map(
            ({id, ...otherItems}) => (
              <CollectionPreview key={id} {...otherItems} />
            )
          )
        }
      </div>
    );
  }
}


export default ShopePage;