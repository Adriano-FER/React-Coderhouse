const BuyerForm = ({setBuyer, buyer, name }) => {
const handleBuyerChange = (e) => {
  setBuyer({...buyer, [e.target.name]: e.target.value })
}
    return (

          <div class="col-6"><input type="text" name={name} onChange={handleBuyerChange}></input></div>

    )
}
export default BuyerForm;