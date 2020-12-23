const dotenv = require('dotenv');
const Api = require('./utils/api');
dotenv.config();  //load enviroment variables

class Rubies {
    constructor(key){
        this.apiKey = key
        this.base_url = "https://openapi.rubiesbank.io/v1"
    }

    checkPaymentStatus = async (account_number, amount) => {
        const payment = await Api.post(this.base_url + '/checkpaymentstatus',
            { virtualaccount: account_number, amount: amount },
            { 'Authorization': this.apiKey }
        );
        console.log(payment);
        return payment;
    }

    createVirtualAccount = async (obj) => {
        let requestData = {
            virtualaccountname: obj.virtualaccountname,
            amount: obj.amount,
            amountcontrol: obj.amountcontrol,
            daysactive: obj.daysactive,
            minutesactive: obj.minutesactive,
            callbackurl: obj.callbackurl
        };

        const account = await Api.post(this.base_url + '/createvirtualaccount',
            requestData, { 'Authorization': this.apiKey, }
        );
        console.log(account);
        return account ;
    };

    confirmCallbackTransaction = async (payment_reference) => {
        const account = await Api.post(this.base_url + '/confirmcallbacktransaction',
            { paymentreference: payment_reference },
            { 'Authorization': this.apiKey }
        );
        console.log(account);
        return account.data;
    };

    disableVirtualAccount = async (account_number) => {
        const account = await Api.post(this.base_url + '/disablevirtualaccount',
            { virtualaccount: account_number },
            { 'Authorization': this.apiKey }
        );
        console.log(account);
        return account.data;
    };


    getVirtualAccount = async (account_number)=>{
        const account = await Api.post(this.base_url + '/getvirtualaccount', 
                                        { virtualaccount: account_number }, 
                                        { 'Authorization': this.apiKey}
                                        );
        console.log(account);
        return account.data;
    };
    
    // list all transactions on a oarticular account
    listTransactions = async (account_number, page)=>{
        const transactions = await Api.post(this.base_url + '/listtransactions',
            { virtualaccount: account_number, page: page },
            { 'Authorization': this.apiKey}
        );
        console.log(transactions);
        return accoutransactionsnts;
    }

    listVirtualAccounts = async (request, page) => {
        const accounts = await Api.post(this.base_url + '/listvirtualaccounts',
            { request: request, page: page },
            { 'Authorization': this.apiKey }
        );
        console.log(accounts);
        return accounts;
    }

    nameEnquiry = async (accountnumber, bankcode) => {
        const user = await Api.post(this.base_url + '/nameenquiry',
            { accountnumber, bankcode },
            { 'Authorization': this.apiKey }
        );
        console.log(user);
        return user;
    }
    
};

module.exports = Rubies;