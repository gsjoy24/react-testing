type PrimaryButtonProps = {
	actionType?: string;
};
const PrimaryButton = ({ actionType = 'add' }: PrimaryButtonProps) => {
	return <button>Click to {actionType}</button>;
};

export default PrimaryButton;
