

import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error in creating account: " + error);
            throw error;
        }
    }

    async login ({email,password}){
           try{
                return  await this.account.createEmailSession(email,password);
           }catch(error){
            console.log("Error in login account: " + error);
            throw error;
           }

          
    }
    
    async getCurrentUser(){
        try {
          return  await this.account.get();
        } catch (error) {
            console.log("Error in current account: " + error);
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            return  await this.account.deleteSessions();    
          } catch (error) {
              console.log("Error in logging out account: " + error);
              throw error;
          }
          return null;
    }

}

export const authService = new AuthService();

export default AuthService;