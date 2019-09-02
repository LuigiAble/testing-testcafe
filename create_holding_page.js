import { Selector, t } from 'testcafe';
import DashboardPage from './dashboard_page';

const dashboardPage = new DashboardPage();

export default class CreateHoldingPage {
    constructor() {
        this.NewChangeAdded = Selector('.u-heading.u-zeroMargin.FormSection-capture');
        this.selectCompanyDropDown = Selector('.SelectCurrentSelection .SelectCurrentSelection-controller').child('spamer').withText('Select a company');
        this.companyInput = Selector('.InputText').withAttribute('placeholder', 'Company');
        this.amplitudeOptionSelected = Selector('.SelectPopup .SelectOptions .SelectOption .SelectOption-link .CompanySelectorItem').child('span');
        this.selectPortfolioDropDown = Selector('.SelectCurrentSelection .SelectCurrentSelection-controller').child('span').withText('Select a portfolio');
        this.portfolioInput = Selector('.InputText').withAttribute('placeholder', 'Portfolio');
        this.portfolioOptionSelected = Selector('.SelectPopup .SelectOptions .SelectOption .SelectOption-link');
        this.typeInvestmentButton = Selector('.TabButton').child('span');
        this.equityHoldingDetailsTitle = Selector('.u-sectionHeading.FormSection-title');
        this.seriesDropDown = Selector('.SelectCurrentSelection-controller').child('span').withText('Select series for this holding...');
        this.seriesOptionSelected = Selector('.SelectOption').child('a');
        this.inputAcquisitionDate = Selector('.InputText').withAttribute('name', 'date');
        this.investmentAmountInput = Selector('.InputText').withAttribute('name', 'total_acquisition_amount');
        this.numberSharesInput = Selector('.InputText').withAttribute('name', 'quantity');
        this.addHoldingButton = Selector('.btn.Button.Button--default.Button--primary').child('span').withText('Add New Holding');
    };

    async createNewHolding(holdingData) {
        await dashboardPage.goToCreateHoldingForm();
        await this.selectCompany(holdingData.companyName);
        await this.selectPortfolio(holdingData.portfolioName);
        await t.click(Selector(this.typeInvestmentButton).withText(holdingData.typeInvestment));
        await this.selectSeries(holdingData.seriesDropDown);
        await t
            .typeText(this.inputAcquisitionDate, holdingData.acquisitionDate, { replace: false })
            .typeText(this.investmentAmountInput, holdingData.amountInput)
            .typeText(this.numberSharesInput, holdingData.sharesInput)
            .click(this.addHoldingButton);
    };

    async selectNewCompany(companyName) {
        await t
            console.log("hahaha lol")
            .click(this.selectCompanyDropDown)
            .typeText(this.companyInput, companyName)
            .click(Selector(this.amplitudeOptionSelected).withExactText(companyName))
    };

    async selectNewPortfolio(portfolioName) {
        await t
            .click(this.selectPortfolioDropDown)
            .typeText(this.portfolioInput, portfolioName)
            .click(Selector(this.portfolioOptionSelected).withExactText(portfolioName));
            console.log(this.selectALotOfSerieandSeries);
    }

    async selectALotOfSerieandSeries(series) {
        await t
            .click(this.seriesDropDown)
            .click(Selector(this.seriesOptionSelected).withText(series));
            console.log("Hello world")
    };

};