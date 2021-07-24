# Next Tourism
Link to live-site [here](http://next-tourism.vercel.app/)

## 🔎 What does it do?

At the moment it allows a user to view different tours from different countries that were fetched from a local file. It uses lunr for the search functionality that matches up queries with text found in the index used by lunr. The mailsletter component allows a user to subscribe to my newsletter with the Mailchimp API and the **`subscribe`** file found in **`src/pages/api`**. Lunr uses a search API that's located in the **`src/pages/api`** section to create a lunr index with a refs and fields. 

### TODO

- [x] Homepage
- [x] Tours page
- [x] Dynamic page for each country 
- [x] Dynamic page for each tour package 
- [x] Fuzzy search for locations
- [ ] User authentication with bcrypt
- [ ] Allow user to book a tour