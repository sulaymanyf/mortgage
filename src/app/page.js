import LoanCalculator from './components/LoanCalculator';
import ExchangeRates from './components/ExchangeRates';

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <ExchangeRates />
            <LoanCalculator />
        </div>
    );
};

export default HomePage;