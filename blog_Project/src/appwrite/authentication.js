
// import config from "../config/config.js";
import config from "../config/config";
import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client;
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); 
                                    // waits till the account creation with email,pass,name        
            if(userAccount) {
                // call another method -->> as if user exist login to its account.
                return this.login({email, password});
            }   
            else   return userAccount; 
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite Service :: logout :: Error", error);
        }
    }
}

const authService = new AuthService();

export default authService;