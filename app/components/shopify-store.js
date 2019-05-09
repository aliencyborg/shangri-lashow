import Component from '@glimmer/component'
import shopify from 'shangri-lashow/util/shopify'

export default class ShopifyStoreComponent extends Component {
  setup = () => {
    let shopifyNodes = document.getElementsByClassName('shopify-buy-frame')

    if (shopifyNodes.length) {
      for (const node of shopifyNodes) {
        node.style.display = ''
      }
    } else {
      shopify()
    }
  }

  teardown = () => {
    const shopifyNodes = document.getElementsByClassName('shopify-buy-frame')

    for (const node of shopifyNodes) {
      node.style.display = 'none'
    }
  }
}
