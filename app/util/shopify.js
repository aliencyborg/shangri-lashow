/* global ShopifyBuy */

export default function() {
  var scriptURL =
    'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit()
    } else {
      loadScript()
    }
  } else {
    loadScript()
  }

  function loadScript() {
    var script = document.createElement('script')
    script.async = true
    script.src = scriptURL
    ;(
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script)
    script.onload = ShopifyBuyInit
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shangrilashow.myshopify.com',
      storefrontAccessToken: '953e7c1c15f8c8b85e14ae045e62d64d'
    })

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent('collection', {
        id: 86930194481,
        node: document.getElementById('collection-component-33178e87217'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            variantId: 'all',
            contents: {
              imgWithCarousel: false,
              variantTitle: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': 'calc(25% - 20px)',
                  'margin-left': '20px',
                  'margin-bottom': '50px',
                  width: 'calc(25% - 20px)'
                },
                imgWrapper: {
                  position: 'relative',
                  height: '0',
                  'padding-top': 'calc(75% + 15px)'
                },
                img: {
                  height: 'calc(100% - 15px)',
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0'
                }
              },
              button: {
                'background-color': '#ffb800',
                color: '#000000',
                ':hover': {
                  'background-color': '#e6a600',
                  color: '#000000'
                },
                'border-radius': '20px',
                ':focus': {
                  'background-color': '#e6a600'
                }
              },
              variantTitle: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              },
              title: {
                'font-family': 'PT Sans, sans-serif',
                'font-size': '20px',
                color: '#ffad00'
              },
              description: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              },
              price: {
                'font-family': 'PT Sans, sans-serif',
                'font-size': '24px',
                color: '#ffad00',
                'font-weight': 'bold'
              },
              compareAt: {
                color: '#ffad00',
                'font-size': '20.4px',
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              }
            },
            googleFonts: ['PT Sans', 'PT Sans', 'PT Sans', 'PT Sans', 'PT Sans']
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              cart: {
                'background-color': '#ffb800'
              },
              button: {
                'background-color': '#ffb800',
                color: '#000000',
                ':hover': {
                  'background-color': '#e6a600',
                  color: '#000000'
                },
                'border-radius': '20px',
                ':focus': {
                  'background-color': '#e6a600'
                }
              },
              title: {
                color: '#000000'
              },
              footer: {
                'background-color': '#ffb800'
              },
              header: {
                color: '#000000'
              },
              lineItems: {
                color: '#000000'
              },
              subtotalText: {
                color: '#000000'
              },
              subtotal: {
                color: '#000000'
              },
              notice: {
                color: '#000000'
              },
              currency: {
                color: '#000000'
              },
              close: {
                ':hover': {
                  color: '#000000'
                },
                color: '#000000'
              },
              emptyCart: {
                color: '#000000'
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px'
                }
              },
              button: {
                'background-color': '#ffb800',
                color: '#000000',
                ':hover': {
                  'background-color': '#e6a600',
                  color: '#000000'
                },
                'border-radius': '20px',
                ':focus': {
                  'background-color': '#e6a600'
                }
              },
              variantTitle: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              },
              title: {
                'font-family': 'PT Sans, sans-serif'
              },
              description: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              },
              price: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              },
              compareAt: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              }
            },
            googleFonts: ['PT Sans', 'PT Sans', 'PT Sans', 'PT Sans', 'PT Sans']
          },
          toggle: {
            styles: {
              toggle: {
                'background-color': '#ffb800',
                ':hover': {
                  'background-color': '#e6a600'
                },
                ':focus': {
                  'background-color': '#e6a600'
                }
              },
              count: {
                color: '#000000',
                ':hover': {
                  color: '#000000'
                }
              },
              iconPath: {
                fill: '#000000'
              }
            }
          },
          option: {
            styles: {
              label: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold',
                color: '#ffad00',
                'font-size': '17px'
              },
              select: {
                'font-family': 'PT Sans, sans-serif',
                'font-weight': 'bold'
              }
            },
            googleFonts: ['PT Sans', 'PT Sans']
          },
          productSet: {
            styles: {
              products: {
                '@media (min-width: 601px)': {
                  'margin-left': '-20px'
                }
              }
            }
          },
          lineItem: {
            styles: {
              variantTitle: {
                color: '#000000'
              },
              title: {
                color: '#000000'
              },
              price: {
                color: '#000000'
              },
              quantity: {
                color: '#000000'
              },
              quantityIncrement: {
                color: '#000000',
                'border-color': '#000000'
              },
              quantityDecrement: {
                color: '#000000',
                'border-color': '#000000'
              },
              quantityInput: {
                color: '#000000',
                'border-color': '#000000'
              }
            }
          }
        }
      })
    })
  }
}
