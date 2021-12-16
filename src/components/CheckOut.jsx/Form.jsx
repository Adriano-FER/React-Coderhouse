const BuyerForm = ({setBuyer, buyer, name }) => {
const handleBuyerChange = (e) => {
  setBuyer({...buyer, [e.target.name]: e.target.value })
}
    return (
        <input type="text" name={name} onChange={handleBuyerChange}></input>
    )
}
export default BuyerForm;