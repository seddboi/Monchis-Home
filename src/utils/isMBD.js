export const isMBD = () => {
	const currentYear = new Date().getFullYear();
	const mBDStart = new Date(`${currentYear}-10-01`).getTime();
	const mBDEnd = new Date(`${currentYear}-10-02`).getTime();
	const today = new Date().getTime();
	return today > mBDStart && today < mBDEnd;
};
