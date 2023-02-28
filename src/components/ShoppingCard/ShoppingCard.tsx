import './ShoppingCard.scss'

export const ShoppingCard = () => {
  return (
    <div id='PurchaseOrder'>
      <div id='OrderDescription'>
        <img src='src/assets/pizza.jpg' alt='' />
        {/* ../../assets/pizza.jpg */}
        <div id='Description'>
          <h3>Pizza de calabresa</h3>
          <p>pizza de calabresa coberta de cebolas deliciosas</p>
        </div>
      </div>
      <div>
        <div id='Quantity'>
          <p>1</p>
          <div id='QuantityButton'>
            <button id='ButtMore'>
              <img src='src/assets/svg/caretUp.svg' alt='' />
            </button>
            <button id='ButtLess'>
              <img src='src/assets/svg/caretDown.svg' alt='' />
            </button>
          </div>
        </div>
        <span id='OrderValue'>$681</span>
        <button id='DeleteRequest'>
          <img src='src/assets/svg/trash.svg' alt='' />
        </button>
      </div>
    </div>
  )
}
