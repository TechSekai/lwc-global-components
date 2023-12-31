import { LightningElement, api, wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class GlobalObjectIcon extends LightningElement {

    @api objectApiName;
    @api size = 'medium';

    @track objectSchema;

    isLoaded = false;
    
    
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    response({ error, data }) {
        if (data) this.objectSchema = data;
        if (error) console.error(error);
        this.isLoaded = true;
    }

    normalizeSize(value) {
        value = value?.toLowerCase();

        switch (value) {
            case 'xx-small':
                return 'icon-xx-small';
            case 'x-small':
                return 'icon-x-small';
            case 'small':
                return 'icon-small';
            case 'medium':
                return 'icon-medium';
            case 'large':
                return 'icon-large';
            default:
                return 'icon-medium'
        }
    }

    capitalizeFirstLetter(word) {
        if (typeof word === 'string' && word !== '')
            return `${word?.slice(0, 1)?.toUpperCase()}${word?.slice(1)}`   
        return null;
    }

    get isCustomObject() {
        return this.objectSchema?.custom || false;
    }

    get iconURL() {
        return this.objectSchema?.themeInfo?.iconUrl || false;
    }

    get iconSize() {
        return this.objectSchema?.custom ? this.normalizeSize(this.size) : this.size; 
    }

    get iconName() {
        return `standard:${this.objectApiName?.toLowerCase()}`;
    }
    
    get alternativeText() {
        return this.objectSchema?.Label || this.capitalizeFirstLetter(this.objectApiName) || '';
    }

    get title() {
        return this.objectSchema?.Label || this.capitalizeFirstLetter(this.objectApiName) ||'';
    }
}