import { LightningElement, api } from 'lwc';
import { classSet } from 'c/globalUtils';
import { isStatic } from './utils';

export default class GlobalNotification extends LightningElement {

    @api iconName;
    @api subject;
    @api title;
    @api url;
    @api position;

    displayNotification = true;

    closeNotification() {
        this.displayNotification = !this.displayNotification;
    }
    
    get show() {
        return this.subject && this.displayNotification || false;
    }

    get computedContainerClassNames() {
        return classSet('slds-notification-container').add({ 'position-static': isStatic(this.position) });
    }
}