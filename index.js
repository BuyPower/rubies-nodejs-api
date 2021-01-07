const dotenv = require('dotenv');
const Api = require('./utils/api');
dotenv.config();  //load enviroment variables

class Rubies {
    constructor(key){
        this.apiKey = key
        this.base_url = "https://openapi.rubiesbank.io/v1"
    }

    checkPaymentStatus (account_number, amount) {
        const payment = Api.post(this.base_url + '/checkpaymentstatus',
            { virtualaccount: account_number, amount: amount },
            { 'Authorization': this.apiKey }
        );
        console.log(payment);
        return payment;
    }

    createVirtualAccount (obj) {
        let requestData = {
            virtualaccountname: obj.virtualaccountname,
            amount: obj.amount,
            amountcontrol: obj.amountcontrol,
            daysactive: obj.daysactive,
            minutesactive: obj.minutesactive,
            callbackurl: obj.callbackurl
        };

        const account = Api.post(this.base_url + '/createvirtualaccount',
            requestData, { 'Authorization': this.apiKey, }
        );
        return account ;
    };

    confirmCallbackTransaction  (payment_reference) {
        const account = Api.post(this.base_url + '/confirmcallbacktransaction',
            { paymentreference: payment_reference },
            { 'Authorization': this.apiKey }
        );
        return account.data;
    };

    disableVirtualAccount (account_number) {
        const account = Api.post(this.base_url + '/disablevirtualaccount',
            { virtualaccount: account_number },
            { 'Authorization': this.apiKey }
        );
        return account.data;
    };


    getVirtualAccount (account_number){
        const account = Api.post(this.base_url + '/getvirtualaccount', 
                                        { virtualaccount: account_number }, 
                                        { 'Authorization': this.apiKey}
                                        );
        return account.data;
    };
    
    // list all transactions on a oarticular account
    listTransactions (account_number, page){
        const transactions = Api.post(this.base_url + '/listtransactions',
            { virtualaccount: account_number, page: page },
            { 'Authorization': this.apiKey}
        );
        return accoutransactionsnts;
    }

    listVirtualAccounts (request, page) {
        const accounts = Api.post(this.base_url + '/listvirtualaccounts',
            { request: request, page: page },
            { 'Authorization': this.apiKey }
        );
        return accounts;
    }

    nameEnquiry (accountnumber, bankcode) {
        const user = Api.post(this.base_url + '/nameenquiry',
            { accountnumber, bankcode },
            { 'Authorization': this.apiKey }
        );
        return user;
    }
    
};

module.exports = Rubies;