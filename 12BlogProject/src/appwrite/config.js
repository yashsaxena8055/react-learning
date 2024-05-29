import conf from "../config/conf";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";

export class appwriteService{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
  }

  async createPost({title,slug,content,featuredImage,status,userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {title,content,featuredImage,status,userId}
        )
    } catch (error) {
        console.error("Error in creating post... ",error);
        throw error;
    }
  }
  async updatePost(slug,{title,content,featuredImage,status,userId}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {title,content,featuredImage,status})
    } catch (error) {
        console.error("Error in updatinhg post... ",error);
        throw error;
    }
  }
  
  async deletePost(slug){
    try {
        await this.databases.deleteDocument( conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug)
        return true;
    } catch (error) {
    console.error("Error in deleting post.. ",error);
    throw error;        
    }
  }
  
  async getPost(slug){
    try {
        return await this.databases.getDocument( 
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug) 
    } catch (error) {
        console.error("Error in getiing post.. ",error);
        return false;
    }
  }

  async getPosts(queries= [Query.equal("status","active")]){
    try {
        
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );


    } catch (error) {
   console.error("Error in fetching posts .. ,error");       
   return false;
    }
  }
 // file upload methods;
 async uploadFile(file){
try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    )
} catch (error) {
    console.error("Error in uploading file..",error);
    return false;
}
 }

async deleteFile(fileId){
    try {
       return await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
    } catch (error) {
        console.error("Error in deleting file...",error)
    }
}

 getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,fileId
    )
 } 

}
export const service = new Service();