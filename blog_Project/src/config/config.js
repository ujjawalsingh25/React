
// Good Practice is to Wrap all Environment Variables in a "Config" file
// So as it give a confirm of String variable, which is required and ease the access 
// as not need the whole import.meta.env.VITE_APPWRITE_URL rather just appwriteUrl
 
const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID  ),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID )
}

export default config;