import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationTestCompo extends NavigationMixin(LightningElement) {
    navigateToRelatedList(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordRelationshipPage',
        attributes: {
            recordId: '0012x00000UZ08sAAD',
            objectApiName: 'Account',
            relationshipApiName: 'Contacts',
            actionName: 'view'
        }
    })
}
}