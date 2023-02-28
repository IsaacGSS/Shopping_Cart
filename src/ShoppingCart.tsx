import { ShoppingCard } from './components/ShoppingCard/ShoppingCard'
import './ShoppingCart.scss'

export const ShoppingCart = () => {
  return (
    <main>
      <section id='shoppingList'>
        <div id='shoppingContinue'>
          <span id='arrowReturn'>
            <img src='src/assets/svg/caretLeft.svg' alt='' />
          </span>
          <h2>Shopping Continue</h2>
        </div>

        <div id='cart'>
          <h2>Shopping cart</h2>
          <p>You have 3 item in your cart</p>

          <div id='requestList'>
            <ShoppingCard />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  )
}
