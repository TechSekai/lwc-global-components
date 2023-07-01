import { LightningElement, api } from 'lwc';

export default class GlobalNotification extends LightningElement {

    @api iconName;
    @api subject;
    @api title;
    @api url;

    closeNotification() {
        this.template.querySelector('[data-id="notification-container"]')?.classList?.toggle('slds-transition-hide');
    }

    get show() {
        return this.subject || false;
    }
}