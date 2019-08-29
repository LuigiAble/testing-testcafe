import { Selector, t } from 'testcafe';

export default class HoldingSummaryPage {
    constructor() {
        this.holdingPageTitle = Selector('.OverviewSection').child('h2');
        this.actionsButton = Selector('.InvestmentActionsDropdown .Button-holder').withText('Actions');
        this.actionsEditDropDown = Selector('.InvestmentActionsDropdown .DropdownMenu').find('a').withText('Update Valuation');
        this.actionsDeleteDropDown = Selector('.InvestmentActionsDropdown .DropdownMenu').find('a').withText('Delete Holding');
        this.addDescriptionInput = Selector('.ValuationModal .FormElement--note.small').find('input').nth(0);
        this.addPricePerUnitInput = Selector('.ValuationModal .ValuationRow--price .InputHolder').find('input').nth(0);
        this.marketValueInput =     Selector('.ValuationModal .ValuationRow--value .InputHolder').find('input').nth(0);
        this.saveChangesButton = Selector('.ValuationModal .Button-holder').withText('Save Changes');
        this.removeHoldingButton = Selector('.ModalContent.isFirstChild .ModalFooter').find('button').child('span').withText('Remove');
        this.getMarketValueRow = Selector('.TableWrapper .u-smallBoldDark').nth(1);
    };

    async editInvestmentMarketValue(data) {
        await t
            .click(this.actionsButton)
            .click(this.actionsEditDropDown)
            .typeText(this.addDescriptionInput, data.valuation)
            .typeText(this.addPricePerUnitInput, data.pricePerUnit)
            .click(this.saveChangesButton);
        return await this.marketValueInput.value;
    };

    async deleteInvestment() {
        await t
            .click(this.actionsButton)
            .click(this.actionsDeleteDropDown)
            .click(this.removeHoldingButton);
    };
};