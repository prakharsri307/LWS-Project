public with sharing class carSearchFormController {
    @AuraEnabled(cacheable = true)
    public static List<Car_Type__c> getCarTypes(){
        return [Select Id, Name From Car_Type__c];
        
    }
}