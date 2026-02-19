import { useSelector } from 'react-redux';

function formatCurrency(value) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
}

// function BalanceDisplay({ balance }) {
function BalanceDisplay() {
	const { balance } = useSelector(store => store.account);

	return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

//! The old way of access to store

// function mapStateToProp(state) {
// 	return {
// 		balance: state.account.balance,
// 	};
// }

// export default connect(mapStateToProp)(BalanceDisplay);
