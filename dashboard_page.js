import { Selector, t } from 'testcafe';

export default class DashboardPage {
    constructor() {
        this.addInvestmentButton = Selector('.u-displayInlineBlock .Button--secondary').child('span').withText('Add New...');
        this.newHoldingButton = Selector('.DropdownMenuItem-anchor').withText('New Holding');
        this.isSuccessAlert = Selector('.Alert-body');
        this.investmentModal = Selector('.ModalBody.ModalBody--announcement').child('h1');
        this.viewInvestmentModalButton = Selector('.btn.Button.Button--default.Button--primary').child('span').withText('View Investment');
    };

    async goToCreateHoldingForm() {
        await t
            .click(this.addInvestmentButton)
            .click(this.newHoldingButton);
    };

    async goToHoldingView() {
        await t
            .click(this.viewInvestmentModalButton);
    };
};